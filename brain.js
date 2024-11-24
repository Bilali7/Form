let formData = [];

let signup = document.getElementById ("signup"); 
let userName = document.getElementById ("firstname");
let userEmail = document.getElementById ("emails");
let userPassword = document.getElementById ("password");
let userConfirmPassword = document.getElementById ("confirm");
let login = document.getElementById ("login"); 
let emaillogin = document.getElementById ("loginemail");
let passwordlogin = document.getElementById ("loginpassword");
let signupContainer = document.getElementById ("signupForm");
let loginContainer = document.getElementById ("login");

document.getElementById ("showsignup").addEventListener ("click", function (event) {
    event.preventDefault ();
    signupContainer.style.display = "flex";
    loginContainer.style.display = "none";
});

document.getElementById ("showlogin").addEventListener ("click", function (event) {
    event.preventDefault ();
    signupContainer.style.display = "none";
    loginContainer.style.display = "flex";
});

function isValidPassword (password) {
    let passwordSyntax = /^.{8}$/;
    return passwordSyntax.test (password);
}

signup.addEventListener ("submit", function (event) {
    event.preventDefault();

let names = userName.value.trim();
let email = userEmail.value.trim();
let password = userPassword.value.trim();
let confirmPassword = userConfirmPassword.value.trim();

if (!names || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
}

if (password !== confirmPassword) {
    // swal("Good job!", "You clicked the button!", "success");
    alert("Passwords do not match.");
    return;
}

if (!isValidPassword(password)) {
    alert("Password must be exactly 8 characters long.");
    return;
}

let userRecord = {
    name: names,
    email: email,
    password: password
};

formData.push(userRecord);
// alert("Sign Up successful!");
swal("Good job!", "You clicked the button!", "success");

userName.value = "";
userEmail.value = "";
userPassword.value = "";
userConfirmPassword.value = "";
});

login.addEventListener ("submit", function (event) { 
    event.preventDefault();

    let emails = emaillogin.value.trim ();
    let password = passwordlogin.value.trim ();

    if (!emails || !password) {
        alert ("both fieds are required");
        return;
    }

    let user = formData.find (user => user.email === emails && user.password === password);

    if (user) {
        // alert (`welcome back, ${user.name} !`);
        // swal(`Good job!, ${user.name} ! You clicked the button!, success login`);
        swal(`Good job! You clicked the button!, success login`);
    }
    else {
        alert ("Invalid email or password");
    }

    emails.value = "";
    password.value = "";
})    