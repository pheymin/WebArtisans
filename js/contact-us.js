import { getCurrentDateTime } from "./Tools.js";

$("document").ready(function(){
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

    notiContainer.hover(function() {
        noti2.addClass('animate');
        noti3.addClass('animate');
        fbMsg.text(getMsg('fbMsg'));
        igMsg.text(getMsg('igMsg'));
        twMsg.text(getMsg('twMsg'));
        return;
    });

    notiContainer.mouseleave(function() {
        noti2.removeClass('animate');
        noti3.removeClass('animate');
        for (let i = 0; i < msgs.length; i++){
            msgs[i].text("Notification");
        }
        return;
    });

    let btnSend = $('#btn-send');

    btnSend.click(function() {
        let name = $('#txt-name').val();
        let email = $('#txt-email').val();
        let phone = $('#txt-phone').val();
        let message = $('#txt-message').val();
        if (name == "" || email == "" || message == "") {
            alert("Please fill in all fields!");
            return;
        }
        $.ajax({
            url: "../php/contact-us.php",
            type: "POST",
            data: {
                "send": 1,
                "name": name,
                "email": email,
                "message": message,
                "phone": phone,
            },
            success: function(response) {
                if (response == "success") {
                    alert("Message sent!");
                    name.val("");
                    email.val("");
                    phone.val("");
                    message.val("");
                    return;
                }
            }
        });
    });
});