const auth = {
  isAuthenticated: false,
  
  signIn(cb) {
    auth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  
  signout(cb) {
    auth.isAuthenticated = false;
    setTimeout(cb, 100);
  },

  checkAuthentication() {
    return true;
  }
};

export default auth;