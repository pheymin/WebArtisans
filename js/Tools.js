let regexUsername = /^[a-zA-Z0-9_]{6,20}$/;
let regexPassword = /^[a-zA-Z0-9_@]{6,20}$/;
let regexEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;

//type: username, password, email
function validateInput(type, value){
    if (value === '') return false;

    switch(type){
        case 'username':
            return regexUsername.test(value);
        case 'password':
            return regexPassword.test(value);
        case 'email':
            return regexEmail.test(value);
        default:
            return false;
    }
}

export { validateInput };