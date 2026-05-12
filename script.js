const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event){

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === 'admin@gmail.com' && password === '12345'){

        message.style.color = 'lightgreen';
        message.textContent = 'Login successful!';

        // Redirect Example
        // window.location.href = "dashboard.html";

    }else{

        message.style.color = 'red';
        message.textContent = 'Invalid email or password';

    }

});