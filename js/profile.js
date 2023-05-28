let sidebar = $("#sidebar-nav");
let nav = $("#nav");
let footer = $("#footer");
let basicDetail = $("#basic-detail");
let infoContainer = $("#info-container");
let basicDetailTitle = $("#basic-detail-title");

$("document").ready(function(){
    avatarByGender(0);
    layoutByRole(1);
}); 

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