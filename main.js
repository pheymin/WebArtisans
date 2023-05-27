// import $ from 'jquery'

const nav = `
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div class="w-10 h-10">
                <img class="logo-img" src="../public/vite.svg"/>
            </div>
            <div class="p-3.5 text-xl font-bold tracking-wider">WèbArtisáns</div>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a router href="contactus.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Contact Us
            </a>
            <a router href="explore.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Explore
            </a>
            <a router href="forum.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Forum
            </a>
        </nav>
        <div>
            <div class="flex justify-between relative">
                <a router href="login.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-2 ">Log In</a>
                <button id="btn-register" class="py-4 px-6 text-white bg-[#a38ffd] rounded-xl font-semibold hover:bg-[#805be8]">
                    Register
                </button>
            </div>
        </div>
    </div>
`

const userNav = `
    <nav>
        <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
            <div id="nav-pane" class="relative flex h-20 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" id="sm-nav-menu-control" class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-[#f4f2ff] hover:text-[#805be8]" aria-controls="mobile-menu" aria-expanded="false">
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="logo-img block h-10 w-auto lg:hidden" src="./public/vite.svg" alt="logo">
                        <img class="logo-img hidden h-10 w-auto lg:block" src="./public/vite.svg" alt="logo">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="contactus.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">Contact Us</a>
                            <a href="explore.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">Explore</a>
                            <a href="forum.html" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">Forum</a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="relative ml-3">
                        <div>
                            <button id="nav-profile-img" type="button" class="flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <img class="h-10 w-10 rounded-full" src="./public/random/avatar-0.svg" alt="">
                            </button>
                        </div>
                        <div id="nav-dropdown" class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f4f2ff] hover:text-[#7a62d6]" role="menuitem" tabindex="-1" id="user-menu-item-0">Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f4f2ff] hover:text-[#7a62d6]" role="menuitem" tabindex="-1" id="user-menu-item-1">View Certificate</a>
                            <a href="user-lesson.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f4f2ff] hover:text-[#7a62d6]" role="menuitem" tabindex="-1" id="user-menu-item-1">View My Lessons</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f4f2ff] hover:text-[#7a62d6]" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
            <div id="sm-nav-menu-dropdown" class="space-y-1 px-2 pb-3 pt-2 hidden">
                <a href="#" class="block rounded-md hover:bg-[#f4f2ff] px-3 py-2 font-medium" aria-current="page">Contact Us</a>
                <a href="#" class="block rounded-md hover:bg-[#f4f2ff] px-3 py-2 font-medium">Explore</a>
                <a href="#" class="block rounded-md hover:bg-[#f4f2ff] px-3 py-2 font-medium">Forum</a>
            </div>
        </div>
    </nav>
`

const footer = `
    <div class="flex justify-around mx-auto w-auto my-6">
        <div class="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <div class="w-10 h-10">
                    <img class="logo-img" src="../public/vite.svg"/>
                </div>
                <span class="ml-3 text-2xl tracking-wider font-semibold">WèbArtisáns</span>
            </a>
            <p class="text-sm text-[#86909c] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 WèbArtisáns —
                <a href="https://github.com/pheymin/WebArtisans" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@FWDD-WèbArtisáns-Cluster</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="ml-3 text-[#86909c]">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a class="ml-3 text-[#86909c]">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a class="ml-3 text-[#86909c]">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.1.9.1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3 0 0 1-.3 3.2 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.2-1.5 3.2-1.2 3.2-1.2.7 1.5.2 2.7.1 3 1.1.7 1.1 1.8 1.1 3.1 0 4.6-2.8 5.5-5.5 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </span>
        </div>
    </div>
`

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

$(document).ready(() => {
    var role = getCurrentUser() ? getCurrentUser().ROLE : null;
    console.log(role);

    if (role === '0' || role === '1') {
        $('#nav').html(userNav)

        $("#nav-profile-img").on('click', () => {
            $('#nav-dropdown').toggleClass('hidden');
        })

        $("#sm-nav-menu-control").on('click', () => {
            $('#sm-nav-menu-dropdown').toggleClass('hidden');
        })
    }
    else {
        $('#nav').html(nav)
    }

    // $('#nav').html(nav)
    // $('#nav').html(userNav)
    $('#footer').html(footer)

    $('#btn-register').on('click', () => {
        // window.location.href = './pages/register.html'
        replaceUrl('register.html')
    })

    $("a").on('click', (e) => {
        e.preventDefault()
        if (!e.target.attributes.href) return;
        replaceUrl(e.target.attributes.href.value);
    })
})

function getCurrentUrl() {
    return window.location.href;
}

function curIsIndex() {
    return getCurrentUrl() === "http://localhost/WebArtisans/" || getCurrentUrl() === "http://localhost/WebArtisans/index.html" ||
        getCurrentUrl() === "http://webartisans.com/" || getCurrentUrl() === "http://webartisans.com/index.html";
}

function replaceUrl(value) {
    const path = curIsIndex() ? `./pages/${value}` : `./${value}`;
    window.location.href = path;
}