import { validateInput } from "./Tools.js";

function handleToggleIcon(){
    const icon = $('#input-area span i')
    const input = $('#input-area input[name="password"]')

    icon.on('click', () => {
        icon.toggleClass('fa-eye fa-eye-slash');
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });
}

const name = $('#input-area input[name="username"]');
const email = $('#input-area input[name="email"]');
const password = $('#input-area input[name="password"]');

function handleRegister(){
    const data = {
        name: name.val(),
        email: email.val(),
        password: password.val(),
        role: 0
    }

    if(data.username === '' || data.email === '' || data.password === '') {
        alert("Don't leave any field blank!");
        return false;
    }

    let isValid = validateInput('username', data.username) && validateInput('email', data.email) && validateInput('password', data.password);

    if(!isValid){
        alert("Invalid input!");
        return;
    }

    const emailQuery = `SELECT COUNT(*) AS count FROM users WHERE EMAIL = '${email}'`;

    $.ajax({
        url: "../php/authentication.php",
        type: "GET",
        data: {query: emailQuery},
        success: function (data) {
            if(data.count > 0){
                alert("Email already exist!");
                return;
            }
        }
    });
    
    const query = `INSERT INTO users (NAME, EMAIL, PASSWORD, ROLE) VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`;

    $.ajax({
        url: "../php/create-user.php",
        type: "POST",
        data: JSON.stringify(query),
        success: function (data) {
            alert("Register successfully!");

            name.val('');
            email.val('');
            password.val('');
        }
    });

}


function handleEvents(){
    handleToggleIcon();

    $('#btn-register').on('click', (e) => {
        e.preventDefault();
        handleRegister();
    })
}

handleEvents();