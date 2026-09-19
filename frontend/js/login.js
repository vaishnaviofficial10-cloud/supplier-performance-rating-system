```javascript
/* =========================================
   SUPPLIER PERFORMANCE RATING SYSTEM
   LOGIN JAVASCRIPT
   ========================================= */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const passwordToggle = document.getElementById("passwordToggle");

const loginButton = document.getElementById("loginButton");
const buttonText = document.getElementById("buttonText");
const buttonArrow = document.getElementById("buttonArrow");
const loader = document.getElementById("loader");

const forgotPassword = document.getElementById("forgotPassword");
const createAccount = document.getElementById("createAccount");

const formMessage = document.getElementById("formMessage");


/* =========================================
   SHOW / HIDE PASSWORD
   ========================================= */

passwordToggle.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        passwordToggle.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        passwordToggle.textContent = "Show";

    }

});


/* =========================================
   EMAIL VALIDATION
   ========================================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================================
   CLEAR ERRORS
   ========================================= */

function clearErrors() {

    emailError.textContent = "";
    passwordError.textContent = "";

    emailInput.parentElement.classList.remove("error");
    passwordInput.parentElement.classList.remove("error");

    formMessage.style.display = "none";

}


/* =========================================
   LOGIN FORM
   ========================================= */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let valid = true;


    /* Email */

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.parentElement.classList.add("error");

        valid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.parentElement.classList.add("error");

        valid = false;

    }


    /* Password */

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        passwordInput.parentElement.classList.add("error");

        valid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        passwordInput.parentElement.classList.add("error");

        valid = false;

    }


    if (!valid) {
        return;
    }


    /* =====================================
       LOGIN LOADING STATE

       This is currently frontend demo logic.
       Replace this section with your backend
       authentication API.
       ===================================== */

    loginButton.disabled = true;

    buttonText.style.display = "none";
    buttonArrow.style.display = "none";

    loader.style.display = "block";


    setTimeout(function () {

        loader.style.display = "none";

        buttonText.style.display = "inline";
        buttonText.textContent = "Login successful";

        loginButton.style.background = "#15803d";


        /*
         * Example for future backend connection:
         *
         * fetch("/api/login", {
         *     method: "POST",
         *     headers: {
         *         "Content-Type": "application/json"
         *     },
         *     body: JSON.stringify({
         *         email: email,
         *         password: password
         *     })
         * })
         * .then(response => response.json())
         * .then(data => {
         *
         *     if (data.success) {
         *         window.location.href = "dashboard.html";
         *     }
         *
         * });
         */


        setTimeout(function () {

            buttonText.textContent = "Sign In";

            loginButton.style.background = "";

            buttonArrow.style.display = "block";

            loginButton.disabled = false;

        }, 1500);

    }, 1000);

});


/* =========================================
   LIVE ERROR CLEARING
   ========================================= */

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    emailInput.parentElement.classList.remove("error");

});


passwordInput.addEventListener("input", function () {

    passwordError.textContent = "";

    passwordInput.parentElement.classList.remove("error");

});


/* =========================================
   FORGOT PASSWORD
   ========================================= */

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Password reset will be available after connecting the backend.";

    formMessage.style.display = "block";

});


/* =========================================
   CREATE ACCOUNT
   ========================================= */

createAccount.addEventListener("click", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Registration page will be connected here.";

    formMessage.style.display = "block";

});
```
