import { validateInput } from "./Tools";
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

function handleLogin(){
        
    const email = $('#input-area input[name="email"]');
    const password = $('#input-area input[name="password"]');
    const remember = $('#input-area input[name="remember"]');
    const data = {
        email: email.val(),
        password: password.val(),
        isRemmeber: remember.is(':checked')
    }

    if( data.email === '' || data.password === '') {
        //const modal = new Modal('warning','Warning', 'Don\'t leave any field blank');
        //modal.render();
        return false;
    }

    let isValid = validateInput('email', data.email) && validateInput('password', data.password);

    if(!isValid){
        //const modal = new Modal('error','Error', 'Please check your email and password');
        //modal.render();
        return;
    }

    console.log("data: ", data);

    //TODO: send data to server
}

function handleEvents(){
    handleToggleIcon();

    $('#btn-login').on('click', () => {
        handleLogin();
    })
}

handleEvents();
