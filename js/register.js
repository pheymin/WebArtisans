import { validateInput } from "./Tools";

function handleToggleIcon(){
    const icon = $('#input-area span i')
    const input = $('#input-area input[name="password"]')

    icon.on('click', () => {
        icon.toggleClass('fa-eye fa-eye-slash');
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });
}

function handleRegister(){
    const name = $('#input-area input[name="username"]');
    const email = $('#input-area input[name="email"]');
    const password = $('#input-area input[name="password"]');
    const data = {
        name: name.val(),
        email: email.val(),
        password: password.val(),
        role: 0
    }

    if(data.username === '' || data.email === '' || data.password === '') {
        // const modal = new Modal('warning','Warning', 'Don\'t leave any field blank');
        // modal.render();
        return false;
    }

    let isValid = validateInput('username', data.username) && validateInput('email', data.email) && validateInput('password', data.password);

    if(!isValid){
        // const modal = new Modal('error','Error', 'Invalid input');
        // modal.render();
        return;
    }

    console.log("data: ", data);
    
    const query = `INSERT INTO users (NAME, EMAIL, PASSWORD, ROLE) VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`

    //TODO: send data to server
    $.ajax({
        url: "../php/register.php",
        type: "POST",
        data: JSON.stringify(query),
        success: function (data) {
            alert("Register successfully!");
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