function checkName() {
    let name = document.getElementById('name');
    let pattern = "^[A-Za-z -']+$";
    let namespan = document.getElementById('namespan');

    if (name.value.length == 0) {
        namespan.textContent = "Name cannot be empty";
        name.style.border = "2px solid hsl(0, 100%, 74%)";
        name.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";

    } else if (name.value.match(pattern)) {
        name.style.background = "url('images/success-icon.svg') no-repeat 95% 50%";
        namespan.textContent = " ";
        name.style.border = "1px solid green";
        return true;

    } else {
        namespan.textContent = "Invalid name";
        name.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        name.style.border = "2px solid hsl(0, 100%, 74%)";
    }
}



function checkEmail() {
    let email = document.getElementById('email');
    let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let emailspan = document.getElementById('emailspan');

    if (email.value.length == 0) {
        emailspan.textContent = "Email cannot be empty";
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        email.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;

    } else if (email.value.match(pattern)) {
        email.style.background = "url('images/success-icon.svg') no-repeat 95% 50%";
        emailspan.textContent = " ";
        email.style.border = "1px solid green";
        return true;

    } else {
        emailspan.textContent = "Invalid email address";
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        email.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;
    }
}



function checkPassLength() {
    let password = document.getElementById('password');
    let passspan = document.getElementById('passspan');

    if (password.value.length == 0) {
        passspan.textContent = "Password cannot be empty";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        password.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;

    } else if (password.value.length > 8) {
        passspan.textContent = "Pass must have less than 8 characters";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        password.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;

    } else {
        password.style.background = "url('images/success-icon.svg') no-repeat 95% 50%";
        passspan.textContent = " ";
        password.style.border = "1px solid green";
        return true;
    }
}



function checkPasswords() {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let passpan = document.getElementById('passpan');

    if (confirmPassword.value.length == 0) {
        passpan.textContent = "Confirm Password cannot be empty";
        confirmPassword.style.border = "2px solid hsl(0, 100%, 74%)";
        confirmPassword.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;

    } else if (password.value != confirmPassword.value) {
        passpan.textContent = "Passwords don't match";
        confirmPassword.style.border = "2px solid hsl(0, 100%, 74%)";
        confirmPassword.style.background = "url('images/error-icon.svg') no-repeat 95% 50%";
        return false;

    } else if (password.value === confirmPassword.value) {
        confirmPassword.style.background = "url('images/success-icon.svg') no-repeat 95% 50%";
        confirmPassword.style.border = "1px solid green";
        passpan.textContent = " ";
        return true;
    }
}



function formSubmission() {
    if (checkName() && checkEmail() && checkPassLength() && checkPassLength() && checkPassLength()) {
        //alert("Successful subscription! Form Submitted! Thank you!");
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            type: "success",
            passive: true,
            showConfirmButton: false,
            timer: 2000,
        });
    } else {
        //alert("There are empty or invalid fields. Please try again.");
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            type: "success",
            passive: true,
            showConfirmButton: false,
            timer: 2000,
        });
    }

}


const date = new Date();
document.getElementById("date").innerHTML = date.toDateString();