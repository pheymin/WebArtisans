import { getCurrentDateTime, validateInput } from "./Tools.js";

let username = $('#txt-name');
let email = $('#txt-email');
let password = $('#txt-password');
let Rpassword = $('#txt-Rpassword');
let textAlert = [$('#name-alert'), $('#email-alert'), $('#password-alert'), $('#Rpassword-alert')];
let txtBox = [username, email, password, Rpassword];

$(document).ready(function () {
    $('.menu-item').eq(5).addClass('menu-item-active');
    $('body').find('.logo-img').attr('src', '../public/vite.svg');

    let btnSubmit = $('#btn-submit');

    btnSubmit.on('click', function (e) {
        e.preventDefault()
        handleSubmit();
    });
});

function handleSubmit() {
    //console.log("submit");

    for (let i = 0; i < textAlert.length; i++) {
        textAlert[i].text("");
    }

    let isValid = true;

    //var isValid = validation(txtValue)
    if(!validateInput("username", username.val())){
        isValid = false;
        textAlert[0].text("Invalid name");
    }

    if(!validateInput("email", email.val())){
        isValid = false;
        textAlert[1].text("Format: xxx@mail.com");
    }

    if (password.val() === Rpassword.val()) {
        if(!validateInput("password", password.val())){
            isValid = false;
            textAlert[2].text("Enter Strong Password");
        }
    }
    else{
        isValid = false;
        textAlert[2].text("Password not match");
    }

    if (isValid) {
        let data = {
            name: username.val(),
            email: email.val(),
            password: password.val(),
            role: 1,
        };

        submit(data);
        console.log('submit');
    }
}

function submit(info){
    const emailQuery = `SELECT COUNT(*) AS count FROM users WHERE EMAIL = '${info.email}'`;

    $.ajax({
        url: "../php/authentication.php",
        type: "GET",
        data: {query: emailQuery},
        success: function (data) {
            if(parseInt(data[0].count)> 0){
                alert("Email already exist!");
                txtBox[1].val("");
                return;
            }
            else{
                const query = `INSERT INTO users (NAME, EMAIL, PASSWORD, ROLE) VALUES ('${info.name}', '${info.email}', '${info.password}', '${info.role}')`;
            
                $.ajax({
                    url: "../php/create-user.php",
                    type: "POST",
                    data: JSON.stringify(query),
                    success: function (data) {
                        alert("Register successfully!");
                        clearInput(txtBox);
                        clearAlert(textAlert);
                    }
                });
            }
        }
    });
    
    
}

function clearInput(txtBox) {
    for (let i = 0; i < txtBox.length; i++) {
        txtBox[i].val("");
    }
}

function clearAlert(alerts) { 
    for (let i = 0; i < alerts.length; i++) {
        alerts[i].text("");
    }
}

// function submit(data) {
//     console.log("data: ",data);
//     // const query = `INSERT INFO feedback (MESSAGE, NAME, EMAIL, PHONE) VALUES ('${data.message}', '${data.name}', '${data.email}', '${data.phone}')`
//     $.ajax({
//         url: "../php/contact-us.php",
//         type: "POST",
//         data: JSON.stringify(data),
//         success: function (response) {
//             alert("Message sent!");
//             clearInput(txtBox);
//             clearAlert(txtAlert);
//             return;
//         }
//     });
// }