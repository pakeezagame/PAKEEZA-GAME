// Login Button
document.getElementById("loginBtn").addEventListener("click", function () {
    document.querySelector(".login-box").scrollIntoView({
        behavior: "smooth"
    });
});

// Register Button
document.getElementById("signupBtn").addEventListener("click", function () {
    alert("Registration feature coming soon.");
});

// Login Form
document.querySelector(".login-box button").addEventListener("click", function () {

    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (username === "" || password === "") {
        alert("Please enter Username and Password.");
        return;
    }

    alert("Welcome " + username + "!");
});

// Deposit Button
document.querySelector(".deposit").addEventListener("click", function () {
    alert("Deposit page coming soon.");
});

// Withdraw Button
document.querySelector(".withdraw").addEventListener("click", function () {
    alert("Withdraw page coming soon.");
});

// Play Now Buttons
document.querySelectorAll(".card button").forEach(function(button){
    button.addEventListener("click", function(){
        const game = this.parentElement.querySelector("h2").innerText;
        alert("Opening " + game + "...");
    });
});
