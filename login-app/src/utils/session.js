export const setUserSession = (token, user) => {
    localStorage.setItem('token', token)
  }
  
  export const removeUserSession = () => {
    localStorage.removeItem('token');
  }

  export const getToken = () => {
    if(localStorage.getItem('token') !== null) return true;
    return false;
  }