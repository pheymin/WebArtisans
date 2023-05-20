import $ from 'jquery';

export default class LandingNav{
    constructor(){
        this.contents = ''
        this.init()
    }

    init(){
        this.contents = `
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div class="w-10 h-10">
                        <img src="/vite.svg"/>
                    </div>
                    <div class="p-3.5 text-xl font-bold tracking-wider">WèbArtisáns</div>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a router href="/contactus" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple hover:bg-[#f4f2ff] rounded-md mx-3">
                        Contact Us
                    </a>
                    <a router href="/explore" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple hover:bg-[#f4f2ff] rounded-md mx-3">
                        Explore
                    </a>
                    <a router href="/forum" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple hover:bg-[#f4f2ff] rounded-md mx-3">
                        Forum
                    </a>
                </nav>
                <div>
                    <div class="flex justify-between relative">
                        <a router href="/login" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple hover:bg-[#f4f2ff] rounded-md mx-2 ">Log In</a>
                        <button class="py-4 px-6 bg-primary-purple rounded-xl font-semibold hover:bg-tertiary-purple">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    render(){
        $('#nav').html(this.contents)
    }
}