import {validateInput} from "./Tools.js";

let sidebar = $("#sidebar-nav");
let nav = $("#nav");
let footer = $("#footer");
let basicDetail = $("#basic-detail");
let infoContainer = $("#info-container");
let basicDetailTitle = $("#basic-detail-title");
let txtName = $("#txtName");
let txtEmail = $("#txtEmail");
let txtOccupation = $("#txtOccupation");
let txtPhone = $("#txtPhone");
let txtGender = $("#txtGender");
let txtBox = [$("#txtEmail"), $("#txtName"), $("#txtOccupation"), $("#txtPhone"), $("#txtGender")];
let textAlert = [$("#name-alert"), $("#occupation-alert"), $("#phone-alert"), $("#gender-alert")];
let editIcon = $("#img-edit-icon");
var user = JSON.parse(sessionStorage.getItem("currentUser"));

$("document").ready(function(){
    avatarByGender(parseInt(user.GENDER));
    layoutByRole(parseInt(user.ROLE));
    showInfo(parseInt(user.ID));
    changeTextColor();
    
    editIcon.on("click", function(e){
        e.preventDefault();
        handleModify();
    });
}); 

function changeTextColor() {
    for (let i = 0; i < txtBox.length; i++) {
        console.log(txtBox[i].attr("id"));
        if (txtBox[i].attr("disabled") === "disabled") {
            txtBox[i].css("color", "#9B9B9B");
        }
        else{
            txtBox[i].css("color", "#000000");
            if (i !== 0){
                txtBox[i].css("color", "#000000");
            }
        }
        console.log(txtBox[i].attr("disabled"));
    }
    // if (!editable) {
    //     for (let i = 0; i < txtBox.length; i++) {
    //         txtBox[i].css("color", "#9B9B9B");
    //     }
    // }
    // else{
    //     for (let i = 0; i < txtBox.length; i++) {
    //         if (i !== 0){
    //             txtBox[i].css("color", "#000000");
    //         }
    //     }
    // }
}

function layoutByRole(role) { 
    if (role === 1) {
        sidebar.show();
        nav.hide();
        footer.hide();
        $("#lesson-detail-title").hide();
        $("#lesson-detail").hide();

        basicDetail.addClass("basic-detail-admin");
        basicDetailTitle.addClass("detail-title-admin");
    }
    else{
        sidebar.hide();
        nav.show();
        footer.show();
        $("#lesson-detail-title").show();
        $("#lesson-detail").show();

        basicDetail.removeClass("basic-detail-admin");
        basicDetailTitle.removeClass("detail-title-admin");
        basicDetail.addClass("basic-detail-user");
        basicDetailTitle.addClass("detail-title");
    }
 }

 function avatarByGender(gender) {
    let avatar = $("#imgAvatar");
    if (gender === 0) {
        avatar.attr("src", "../images/FemaleAvatar.png");
    }
    else{
        avatar.attr("src", "../images/MaleAvatar.png");
    }
 }

 function identifyGender(gender) {
    if (gender === "0" ) {
        return "Female";
    }
    else if (gender === "1") {
        return "Male";
    }
 }

 function convertGenderToNumber(gender) {
    if (gender === "Female") {
        return "0";
    }
    else if (gender === "Male") {
        return "1";
    }
 }

 function showInfo(id) {
    $.ajax({
    url: "../php/profile.php", // Replace with your server endpoint URL
    type: "GET",
    data: {"id" : id},
    success: function(data) {
        console.log(JSON.stringify(data));

        txtName.val(data[0].NAME);
        txtOccupation.val(data[0].OCCUPATION);
        txtPhone.val(data[0].PHONE);
        txtGender.val(identifyGender(data[0].GENDER));
        txtEmail.val(data[0].EMAIL);

        for (let i = 0; i < txtBox.length; i++) {
            if (txtBox[i].val() === "") {
                txtBox[i].val("-");
            }
        }
    },
    error: function() {
      console.log("Error retrieving data from the server.");
    }
  });
 }

 function handleModify() {
    for (let i = 0; i < textAlert.length; i++) {
        textAlert[i].text("");
    }
    if (editIcon.attr("src") === "../images/edit-icon.png") {
        for (let i = 0; i < txtBox.length; i++) {
            if (i !== 0){
                txtBox[i].removeAttr("disabled");
            }
        }
        changeTextColor();
        editIcon.attr("src", "../images/done-icon.png");
    }
    else if (editIcon.attr("src") === "../images/done-icon.png") {
        let isValid = true;

        if(!validateInput("username", txtName.val())){
            isValid = false;
            textAlert[0].text("Invalid name");
        }

        if(!validateInput("occupation", txtOccupation.val())){
            isValid = false;
            textAlert[1].text("Invalid occupation");
        }

        if(!validateInput("phone", txtPhone.val())){
            isValid = false;
            textAlert[2].text("Invalid phone number");
        }

        if (txtGender.val() !== "Male" && txtGender.val() !== "Female") {
            console.log(txtGender.val());
            isValid = false;
            textAlert[3].text("Enter 'Male' or 'Female'");
        }

        if (isValid) {
            let data = {
                "id" : parseInt(user.ID),
                "name" : txtName.val(),
                "occupation" : txtOccupation.val(),
                "phone" : txtPhone.val(),
                "gender" : convertGenderToNumber(txtGender.val()),
            }

            
            $.ajax({
                url: "../php/profile.php", // Replace with your server endpoint URL
                type: "POST",
                data: JSON.stringify(data),
                success: function(response) {
                    console.log("Gender: " + data.gender);
                    avatarByGender(parseInt(data.gender));
                    alert("Update successfully!");
                    for (let i = 0; i < txtBox.length; i++) {
                        if (i !== 0){
                            txtBox[i].attr("disabled", "disabled");
                        }
                    }
                    data = {
                        "ID": user.ID,
                        "NAME": txtName.val(),
                        "EMAIL": user.EMAIL,
                        "PASSWORD": user.PASSWORD,
                        "ROLE": user.ROLE,
                        "PHONE": txtPhone.val(),
                        "GENDER": convertGenderToNumber(txtGender.val()),
                        "OCCUPATION": txtOccupation.val()
                    }

                    sessionStorage.setItem("currentUser", JSON.stringify(data));
                    changeTextColor();
                    editIcon.attr("src", "../images/edit-icon.png");
                    clearAlert(textAlert);
                },
                error: function() {
                    console.log("Error retrieving data from the server.");
                }
            });
        }
    }
};

function clearAlert(alerts) { 
    for (let i = 0; i < alerts.length; i++) {
        alerts[i].text("");
    }
}