import { validateInput } from "./Tools.js";
// import Modal from '../components/Modal';
// import Alert from '../components/Alert';

function handleToggleIcon(){
    const icon = $('#input-area span i')
    const input = $('#input-area input[name="password"]')

    icon.on('click', () => {
        icon.toggleClass('fa-eye fa-eye-slash');
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });
}

const email = $('#input-area input[name="email"]');
const password = $('#input-area input[name="password"]');
const remember = $('#input-area input[name="remember"]');

function handleLogin(){
    const data = {
        email: email.val(),
        password: password.val(),
        isRemmeber: remember.is(':checked')
    }

    if( data.email === '' || data.password === '') {
        return false;
    }

    let isValid = validateInput('email', data.email) && validateInput('password', data.password);

    if(!isValid){
        return;
    }
    //console.log("data: ", data);

    const query = `SELECT * FROM users WHERE EMAIL = '${data.email}' AND PASSWORD = '${data.password}'`;
    $.ajax({
        url: "../php/authentication.php",
        type: "GET",
        data: {query: query},
        success: function (data) {
            // console.log(data);
            if(data == '[]'){
                alert("Email or password is incorrect!");
                return;
            }

            //console.log(data);
            clearInput();
            if(data[0].ROLE == 1){
                console.log('admin');
                window.location.href = "./dashboard.html";
            }else{
                console.log('user');
                window.location.href = "./explore.html";
            }
            
            sessionStorage.setItem('currentUser', JSON.stringify(data[0]));

        }
    });
}

function handleEvents(){
    handleToggleIcon();

    $('#btn-login').on('click', () => {
        handleLogin();
    })
}

handleEvents();

function clearInput()
{
    email.val('');
    password.val('');
    remember.prop('checked', false);
}