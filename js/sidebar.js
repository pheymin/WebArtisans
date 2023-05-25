var sideNav = `
    <nav class="sidebar md:h-screen h-auto w-auto bg-[#f8faff] z-50 py-4 px-6">
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
                        <a href="#" class="">
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
                        <a href="../pages/upload-lesson.html" class="">
                            <i class="fa-solid fa-file-arrow-up"></i>
                            <span class="ml-2">Upload Lesson</span>
                        </a>
                    </li>
                    <li class="menu-item cursor-pointer h-10 text-[#4d2ec8] hover:bg-[#805be8] hover:text-white my-3 flex items-center px-3 py-6">
                        <a href="#" class="">
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