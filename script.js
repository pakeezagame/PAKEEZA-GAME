// Login Button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

// Register Button
const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    window.location.href = "register.html";
  });
}

// Deposit
const depositBtn = document.querySelector(".deposit");

if (depositBtn) {
  depositBtn.addEventListener("click", function () {
    alert("Deposit feature coming soon.");
  });
}

// Withdraw
const withdrawBtn = document.querySelector(".withdraw");

if (withdrawBtn) {
  withdrawBtn.addEventListener("click", function () {
    alert("Withdraw feature coming soon.");
  });
}

// Play Now Buttons
document.querySelectorAll(".card button").forEach(function(button){
  button.addEventListener("click", function(){
    const game = this.parentElement.querySelector("h2").innerText;
    alert("Opening " + game);
  });
});
