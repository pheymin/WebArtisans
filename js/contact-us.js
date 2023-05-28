import { getCurrentDateTime, validateInput } from "./Tools.js";

$("document").ready(function () {
    $('body').find('.logo-img').attr('src', '../public/vite.svg');

    let noti2 = $('#noti2');
    let noti3 = $('#noti3');
    let notiContainer = $('#noti-container');
    let fbMsg = $('.fb-msg');
    let igMsg = $('.ig-msg');
    let twMsg = $('.tw-msg');

    let msg = {
        "fbMsg": "Follow us on Facebook",
        "igMsg": "Follow us on Instagram",
        "twMsg": "Follow us on Twitter",
    };

    let msgs = [fbMsg, igMsg, twMsg];

    let getMsg = (message) => {
        return msg[message];
    };

    notiContainer.hover(function () {
        noti2.addClass('animate');
        noti3.addClass('animate');
        fbMsg.text(getMsg('fbMsg'));
        igMsg.text(getMsg('igMsg'));
        twMsg.text(getMsg('twMsg'));
        return;
    });

    notiContainer.mouseleave(function () {
        noti2.removeClass('animate');
        noti3.removeClass('animate');
        for (let i = 0; i < msgs.length; i++) {
            msgs[i].text("Notification");
        }
        return;
    });

    let btnSend = $('#btn-send');

    btnSend.on('click', function (e) {
        e.preventDefault()
        handleSubmit();
    })
});

let name = $('#txt-name');
let email = $('#txt-email');
let phone = $('#txt-phone');
let message = $('#txt-message');

function handleSubmit() {
    console.log("submit");

    let textAlert = [$('#name-alert'), $('#email-alert'), $('#phone-alert'), $('#message-alert')];
    for (let i = 0; i < textAlert.length; i++) {
        textAlert[i].text("");
    }

    let isValid = true;
    

    let nameT = name.val();
    let emailT = email.val();
    let phoneT = phone.val();
    let messageT = message.val();

    //var isValid = validation(txtValue)
    if(!validateInput("username", nameT)){
        isValid = false;
        textAlert[0].text("Invalid name");
    }

    if(!validateInput("email", emailT)){
        isValid = false;
        textAlert[1].text("Format: xxx@mail.com");
    }

    if(!validateInput("phone", phoneT)){
        isValid = false;
        textAlert[2].text("Invalid phone number");
    }

    if (messageT == "") {
        $('#message-alert').text("Please fill in this field");
        isValid = false;
    }


    if (isValid) {
        let data = {
            name: name.val(),
            email: email.val(),
            phone: phone.val(),
            message: message.val(),
        };

        sendFeedback(data);
        console.log('submit');
    }
}

let txtAlert = [$('#name-alert'), $('#email-alert'), $('#phone-alert'), $('#message-alert')];
let txtBox = [name, email, phone, message];
let txtName = ["username", "email", "phone", "message"];

function sendFeedback(data) {
    console.log("data: ",data);
    // const query = `INSERT INFO feedback (MESSAGE, NAME, EMAIL, PHONE) VALUES ('${data.message}', '${data.name}', '${data.email}', '${data.phone}')`
    $.ajax({
        url: "../php/contact-us.php",
        type: "POST",
        data: JSON.stringify(data),
        success: function (response) {
            alert("Message sent!");
            clearInput(txtBox);
            clearAlert(txtAlert);
            return;
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