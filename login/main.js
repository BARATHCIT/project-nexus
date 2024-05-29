
function logout() {
    // Redirect to index.html on logout
    window.location.href = 'login.html';
}

function toggleCollapsible() {
    var reservationsSidebar = document.getElementById('reservationsSidebar');
    reservationsSidebar.classList.toggle('collapsed');
}

// Check if the user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');

// If not logged in, redirect to index.html
if (!isLoggedIn) {
    window.location.href = 'login.html';
}