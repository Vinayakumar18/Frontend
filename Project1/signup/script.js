function validation() {
    const pwd = document.forms['signup']['password'].value;
    const cpwd = document.forms['signup']['confirmpassword'].value;
    const gender = document.forms['signup']['gender'];

    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    const specialChars = "!@#$%^&*(),.?\":{}|<>";
    let genderSelected = false;

    if (pwd.length < 6) {
        document.getElementById('pwderror').innerHTML = "Password length must be greater than 6";
        return false;
    }

    for (let i = 0; i < pwd.length; i++) {
        const char = pwd[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
    }
    for (let j = 0; j < gender.length; j++) {
        if (gender[j].checked) {
            genderSelected = true;
            break;
        }
    }

    if ((!hasUppercase) || (!hasNumber) || (!hasSpecialChar)) {
        document.getElementById('pwderror').innerHTML = "Password must contain atleast one Uppercase letter, one number and one special character"
        return false
    } else if (pwd !== cpwd) {
        document.getElementById('pwderror').innerHTML = "Passwords do not match";
        return false;
    }
    else if (!genderSelected) {
        document.getElementById('pwderror').innerHTML = "Please Select your gender"
        return false;
    }

    document.getElementById('pwderror').innerHTML = "";
    return true;
}
