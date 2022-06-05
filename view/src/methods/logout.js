export function logout() {
    localStorage.setItem('uid', '')
    localStorage.set('isLoggedIn', 'false')
}