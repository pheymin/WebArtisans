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
            <a router href="/contactus" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Contact Us
            </a>
            <a router href="/explore" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Explore
            </a>
            <a router href="/forum" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-3">
                Forum
            </a>
        </nav>
        <div>
            <div class="flex justify-between relative">
                <a router href="/login" class="p-4 cursor-pointer font-semibold hover:text-[#805be8] hover:bg-[#f4f2ff] rounded-md mx-2 ">Log In</a>
                <button class="py-4 px-6 text-white bg-[#a38ffd] rounded-xl font-semibold hover:bg-[#805be8]">
                    Register
                </button>
            </div>
        </div>
    </div>
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

$('#nav').html(nav)
$('#footer').html(footer)