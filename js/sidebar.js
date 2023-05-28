import { logoutModal } from "./Tools.js";

$(document).ready(function () {
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (currentUser == null || currentUser.ROLE != "1" && !window.location.href.includes("profile.html")) {
        window.location.href = "login.html";
        return;
    }

    $('#sidebar-nav').append(sideNav)

    const menuItems = $('.menu-item');

    //loop through the menu items
    menuItems.each(function () {
        //add click event listener to each menu item
        $(this).click(function () {
            //remove the active class from all the menu items
            menuItems.removeClass('menu-item-active');
            //add the active class to the clicked menu item
            $(this).addClass('menu-item-active');
        });
    });

    //last menu item click event
    $('.menu-item').last().click(function () {
        openLogoutModal();
    });
});

var sideNav = `
    <nav class="sidebar md:h-full h-auto w-auto bg-[#f4f2ff] z-50 py-4 px-6">
        <header class="relative">
            <div class="flex 2xl:flex-row flex-col items-center">
                <img class="w-10 h-10" src="../public/vite.svg" alt="logo">

                <div class="text-base font-medium flex flex-col ml-4 2xl:mt-0 mt-4">
                    <span class="font-semibold tracking-wider text-xl">WèbArtisáns</span>
                    <span class="mt-1">Website Admin</span>
                </div>
            </div>
        </header>

        <div class="menu-sidebar">
            <div class="menu-items-list">
                <ul class=" mt-8">
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./dashboard.html" class="">
                            <i class="fa-solid fa-house"></i>
                            <span class="ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./profile.html" class="">
                            <i class="fa-solid fa-address-card"></i>
                            <span class="ml-2">Profile</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./upload-lesson.html" class="">
                            <i class="fa-solid fa-file-arrow-up"></i>
                            <span class="ml-2">Upload Lesson</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./view-feedback.html" class="">
                            <i class="fa-regular fa-message"></i>
                            <span class="ml-2">View Feedback</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./edit-lesson.html" class="">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <span class="ml-2">Edit Lesson</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./admin-registration.html" class="">
                            <i class="fa-solid fa-link"></i>
                            <span class="ml-2">Invite Admin</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="#" class="">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span class="ml-2">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`

// $('#sidebar-nav').append(sideNav)

// const menuItems = $('.menu-item');

// //loop through the menu items
// menuItems.each(function () {
//     //add click event listener to each menu item
//     $(this).click(function () {
//         //remove the active class from all the menu items
//         menuItems.removeClass('menu-item-active');
//         //add the active class to the clicked menu item
//         $(this).addClass('menu-item-active');
//     });
// });

// //last menu item click event
// $('.menu-item').last().click(function () {
//     openLogoutModal();
// });

$(document).on('click', '#logout-modal-backdrop', function () {
    closeLogoutModal();
});

$(document).on('click', '#btn-cancel', function () {
    closeLogoutModal();
});

$(document).on('click', '#btn-logout', function () {
    confirmLogout();
});

function openLogoutModal() {
    $('body').append(logoutModal);
}

function closeLogoutModal() {
    $('.menu-item').first().addClass('menu-item-active');
    $('.menu-item').last().removeClass('menu-item-active');
    $('#logout-modal-backdrop').remove();
}

function confirmLogout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = './login.html';
}