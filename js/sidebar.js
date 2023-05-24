var sideNav = `
    <nav class="sidebar md:h-full h-auto w-auto bg-[#f8faff] z-50 py-4 px-6">
        <header class="relative">
            <div class="flex 2xl:flex-row flex-col items-center">
                <img class="w-10 h-10" src="../public/vite.svg" alt="logo">

                <div class="text-base font-medium flex flex-col ml-4 2xl:mt-0 mt-4">
                    <span class="font-semibold tracking-wider text-xl">WèbArtisáns</span>
                    <span class="mt-1">Website Admin</span>
                </div>
            </div>
        </header>

        <div class="menu-bar">
            <div class="menu">
                <ul class=" mt-8">
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="./dashboard.html" class="">
                            <i class="fa-solid fa-house"></i>
                            <span class="ml-2">Dashboard</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="#" class="">
                            <i class="fa-solid fa-address-card"></i>
                            <span class="ml-2">Profile</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="#" class="">
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
                        <a href="#" class="">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <span class="ml-2">Edit Quiz</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="#" class="">
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

var logoutModal = `
    <div id="logout-modal-backdrop" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div id="modal-panel" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Account Logout</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">Are you sure you want to logout from your account? After logout you will be redirected to the login page.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button id="btn-logout" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                            Logout
                        </button>
                        <button id="btn-cancel" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

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