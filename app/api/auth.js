/**
 * Created by sandeepkumar on 21/04/17.
 */

class AuthService {

  constructor() {
  }

  parseTokenFromQueryString(search) {
    const idToken = this.getTokenFromQueryVariable(search);
    if (idToken) {
      this.setToken(idToken);
    }
  }

  getTokenFromQueryVariable(search) {
    var query = search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == 'auth_token') {
        return decodeURIComponent(pair[1]);
      }
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token;
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : null;
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('access_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('access_token');
  }
  clearTokens() {
    this.logout();
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}

const auth = new AuthService();
export default auth;
