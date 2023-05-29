let regexUsername = /^[a-zA-Z0-9_ ]{6,20}$/;
let regexPassword = /^[a-zA-Z0-9_@]{6,20}$/;
let regexEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
let regexPhone = /^[0-9]{10,11}$/;
let regexOccupation = /^[A-Za-z]+$/;

//type: username, password, email
function validateInput(type, value) {
    if (value === '') return false;

    switch (type) {
        case 'username':
            return regexUsername.test(value);
        case 'password':
            return regexPassword.test(value);
        case 'email':
            return regexEmail.test(value);
        case 'phone':
            return regexPhone.test(value);
        case 'message':
            return regexUsername.test(value);
        case 'occupation':
            return regexOccupation.test(value);
        default:
            return false;
    }
}

function getCurrentDateTime() {
    let currentTime = new Date();

    // Get the individual components of the current date
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1; // Months are zero-based, so we add 1
    let day = currentTime.getDate();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    // Formatting the date to display leading zeros
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    minute = (minute < 10 ? "0" : "") + minute;
    second = (second < 10 ? "0" : "") + second;

    // Creating the formatted date string
    let currentTimeString = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

    return currentTimeString;
}


function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImageUrl() {
    var randomInt = getRandomInt(0,80);
    return `../public/random/avatar-${randomInt}.svg`;
}

function getCurrentUser() {
    if (sessionStorage.getItem('currentUser') === null) return null;
    
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

function getCurrentUserName() {
    var user = getCurrentUser();
    if (user === null) return "";
    else
        return user.NAME;
}

function getCurrentUserID(){
    var user = getCurrentUser();
    if (user === null) return "";
    else
        return user.ID;
}

function getCurrentUserRole(){
    var user = getCurrentUser();
    if (user === null) return "";
    else
        return user.ROLE;
}

function getCurrentUserAvatar(){
    var user = getCurrentUser();
    if (user === null) 
        return "";

    else{
        var name = user.NAME.replace(/\s/g, '').toLowerCase();
        if (window.location.href.includes('pages')) 
            return `../public/${name}.svg`;
        else
            return `./public/${name}.svg`;
    }
}

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

export { validateInput, getCurrentDateTime, getRandomImageUrl, getCurrentUser, 
    getCurrentUserName, getCurrentUserID, getCurrentUserRole, getCurrentUserAvatar,
    logoutModal
};