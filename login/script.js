function validateLoginForm() {
    var Email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    if (!Email || !password) {
        alert('All fields must be filled out');
        return false;
 }


  
    localStorage.setItem('isLoggedIn', 'true');

      alert('Login successful!');
      window.location.href = 'main.html';

    return true
}

function validateSignupForm(){
    var newEmail = document.getElementById('Email').value;
    var newpassword = document.getElementById('password').value;
    var newrepassword = document.getElementById('repassword').value;
    
    
    if (!newEmail || !newpassword || !newrepassword) {
        alert('All fields must be filled out');
        return false;
    }

    if (newpassword !== newrepassword) {
        alert('Passwords do not match');
        return false;
    }
    alert('Signup successful!');
    window.location.href = 'login.html';
    return true;
}
