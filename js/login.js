import $ from 'jquery';
// import Modal from '../components/Modal';
// import Alert from '../components/Alert';

export default class Login{
    constructor(){
        this.contents = '';
        this.init();
        // this.handleEvents();
    }

    init(){
        this.contents = `
            <div id="login-form" class="absolute left-1/2 top-1/2 transfrom -translate-x-1/2 -translate-y-1/2 h-screen my-10">
                <div class="flex flex-col">
                    <h1 class="font-reemkufi text-4xl font-semibold text-[#1d2129]">Sign In</h1>
                    <h3 class="w-4/5 text-base font-normal my-4 self-center text-[#4e5969] font-inter">To Keep connected with please login with your personal info</h3>
                </div>
                <div id="input-area">
                    <div>
                        <input type="email" name="email" placeholder="Email" class='textbox'>
                    </div>
                    <div class="flex relative items-center">
                        <input type="password" name="password" placeholder="Password" class='textbox'>
                        <span class="right-0 p-3 absolute">
                            <i class="fa-regular fa-eye cursor-pointer text-[#4e5969]"></i>
                        </span>
                    </div>
                    <div>
                        <div class="flex flex-row">
                            <input type="checkbox" name="remember" id="remember" class="cursor-pointer mr-2">
                            <label for="remember" class="cursor-pointer text-sm font-inter font-medium text-[#4e5969] hover:text-[#165dff]">Remember me</label>
                        </div>
                    </div>
                    <div>
                        <button id="btn-login" class="btn-purple cursor-pointer text-base font-medium">Sign in</button>
                    </div>
                </div>
                <div class="font-inter text-sm my-6">
                    <span class="mr-2 text-[#86909c]">Dont't have an account yet?</span>
                    <span><a href="" class="cursor-pointer font-medium text-[#4080FF] hover:text-[#165dff]">Sign up</a></span>
                </div>
            </div>
        `
    }

    render(){
        $('#app').html(this.contents);
        this.handleEvents();
    }

    handleToggleIcon(){
        const icon = $('#input-area span i')
        const input = $('#input-area input[name="password"]')

        icon.on('click', () => {
            icon.toggleClass('fa-eye fa-eye-slash');
            input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
        });
    }

    handleLogin(){
        
        const email = $('#input-area input[name="email"]');
        const password = $('#input-area input[name="password"]');
        const remember = $('#input-area input[name="remember"]');
        const data = {
            email: email.val(),
            password: password.val(),
            isRemmeber: remember.is(':checked')
        }

        if( data.email === '' || data.password === '') {
            //const modal = new Modal('warning','Warning', 'Don\'t leave any field blank');
            //modal.render();
            return false;
        }

        let isValid = this.validateInput(data.email, data.password);

        if(!isValid){
            //const modal = new Modal('error','Error', 'Please check your email and password');
            //modal.render();
            return;
        }

        console.log("data: ", data);

        //TODO: send data to server
    }

    validateInput(email, password){

        let regexPassword = /^[a-zA-Z0-9_]{6,20}$/;
        if(!regexPassword.test(password)) return false;
        
        let regex = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
        if(!regex.test(email)) return false;
    
        return true;
    }

    handleEvents(){
        this.handleToggleIcon();

        $('#btn-login').on('click', () => {
            this.handleLogin();
        })
    }
}

const login = new Login();
login.render();