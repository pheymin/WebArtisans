if ($("nav").length) {
    $("nav").html(
        `
            <div class="flex justify-around mx-auto w-auto my-6">
                <div class="p-3.5 text-xl font-bold tracking-wider">WèbArtisáns</div>
                <div>
                    <div class="flex justify-between">
                        <a router href="/contactus" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple mx-3">
                            Contact Us
                        </a>
                        <a router href="/explore" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple mx-3">
                            Explore
                        </a>
                        <a router href="/forum" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple mx-3">
                            Forum
                        </a>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between relative">
                        <a router href="/login" class="p-4 cursor-pointer font-semibold hover:text-tertiary-purple mx-2 ">Log In</a>
                        <button class="py-4 px-6 bg-primary-purple rounded-xl font-semibold hover:bg-tertiary-purple">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        `
    )
}