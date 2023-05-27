let regexUsername = /^[a-zA-Z0-9_]{6,20}$/;
let regexPassword = /^[a-zA-Z0-9_@]{6,20}$/;
let regexEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
let regexPhone = /^[0-9]{10,11}$/;

//type: username, password, email
function validateInput(type, value){
    if (value === '') return false;

    switch(type){
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
        default:
            return false;
    }
}

export { validateInput };

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

 export { getCurrentDateTime };