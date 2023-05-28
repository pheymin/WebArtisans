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

$("document").ready(function(){
    avatarByGender(1);
    layoutByRole(1);
    showInfo(1);
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
    if (gender === 0 ) {
        return "Female";
    }
    else{
        return "Male";
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
                "id" : 1,
                "name" : $("#txtName").val(),
                "occupation" : $("#txtOccupation").val(),
                "phone" : $("#txtPhone").val(),
                "gender" : $("#txtGender").val(),
            }
    
            $.ajax({
                url: "../php/profile.php", // Replace with your server endpoint URL
                type: "POST",
                data: data,
                success: function(data) {
                    alert("Update successfully!");
                    for (let i = 0; i < txtBox.length; i++) {
                        if (i !== 0){
                            txtBox[i].attr("disabled", "disabled");
                        }
                    }
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