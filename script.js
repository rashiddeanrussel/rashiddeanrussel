if (!localStorage.getItem("users")) {
    const defaultUser = [{ username: "rashid", password: "102006" }];
    localStorage.setItem("users", JSON.stringify(defaultUser));
}

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");
const openLogin = document.getElementById("openLogin");
const openRegister = document.getElementById("openRegister");

if (goRegister) {
    goRegister.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });
}

if (goLogin) {
    goLogin.addEventListener("click", () => {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
}

if (openLogin) {
    openLogin.addEventListener("click", () => {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
}

if (openRegister) {
    openRegister.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });
}

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("reg-username").value;
        let password = document.getElementById("reg-password").value;
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.find(u => u.username === username)) {
            alert("Username already taken!");
            return;
        }

        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Registration Successful!");

        registerForm.reset();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("login-username").value;
        let password = document.getElementById("login-password").value;
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let valid = users.find(u => u.username === username && u.password === password);

        if (valid) {
            alert("Login Successful!");
            localStorage.setItem("loggedInUser", username);
            window.location.href = "portfolio.html";
        } else {
            alert("Incorrect username or password!");
        }
    });
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out!");
        window.location.href = "index.html";
    });
}
