import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import { setUserSession } from '../utils/session';
import Unauthorize from './Unauthorize'

export default function RegistrationPage() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [login, setLogin] = useState('')
  const [pwd, setPwd] = useState('')
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    axios.post(`http://localhost:4000/login`, { login: login, pwd: pwd }).then(response => {
      if(response.data.auth){
        setUserSession(response.data.token)
        window.location = '/HomePage';
      } else {
        setShowModal(true);
      }
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="login-main col-10 col-sm-8 col-md-8 col-lg-4">
          <div className="login-title">
            <h3>Zarejestruj do serwisu</h3>
          </div>
          <div className="login-content">
            <form className="login-form">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Imię"
                style={{ marginTop: "0px" }}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Nazwisko"
                onChange={(e) => setSurname(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
                onChange={(e) => setPwd(e.target.value)}
              />
              <Button className="w-100" style={{ marginTop: "20px" }} onClick={handleLogin}>
                Zarejestruj
              </Button>
            </form>
          </div>
        </div>
      </div>
      {showModal && <Unauthorize showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}