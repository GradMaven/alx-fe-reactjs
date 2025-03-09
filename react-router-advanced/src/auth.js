
const Auth = {
    isAuthenticated: false,
    login(cb) {
      Auth.isAuthenticated = true;
      setTimeout(cb, 100); 
    },
    logout(cb) {
      Auth.isAuthenticated = false;
      setTimeout(cb, 100);
    },
  };
  
  export default Auth;
  