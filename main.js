function validation(){
    var userName = document.getElementById('user').value;
    var passWord = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('conpass').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailID = document.getElementById('email').value;

//Username check
    if (userName == "") {
        document.getElementById('Usererror').innerHTML = "**Please enter a username";
        return false;
    }
    
    if (userName.length <= 2 || userName.length > 20) {
        document.getElementById('Usererror').innerHTML = "**User name length must be between 2 and 20";
        return false;
    }

    
    if (!isNaN(userName)) {
        document.getElementById('Usererror').innerHTML = "**Numbers not allowed";
        return false;
    }

    else {
        document.getElementById('Usererror').innerHTML = "";
    }


//Password check
    if (passWord == "") {
        document.getElementById('passwor').innerHTML = "**Please enter a password";
        return false;
    }

    else {
        document.getElementById('passwor').innerHTML = "";
    }

    if (confirmPassword !== passWord) {
        document.getElementById('confpass').innerHTML = "**Passwords don't match";
        return false;
    }

    if (confirmPassword.length < 5 || confirmPassword.length > 20) {
        document.getElementById('confpass').innerHTML = "**Password length is too short/long";
        return false;
    }

    else {
        document.getElementById('confpass').innerHTML = "";
    }

// Mobile number check 

    if ((isNaN(mobileNumber)) || (mobileNumber.length != 10)) {
        document.getElementById('mobnum').innerHTML = "**Please verify mobile number";
        return false;
    }

    else {
        document.getElementById('mobnum').innerHTML = "";
    }


//Email ID check    
    if (emailID == "") {
        document.getElementById('emale').innerHTML = "**Email is invalid";
        return false;
    }
}