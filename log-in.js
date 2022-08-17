// add click event with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // get the email address inside the input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // get the password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // email and password check
    if (email === 'shafayet@gmail.com' && password === '1234') {
        window.location.href = 'functional-baper-bank.html';
    }
    else {
        alert("you are not my son");
    }
})