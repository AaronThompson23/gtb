function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html'; // Redirect to login page
}
