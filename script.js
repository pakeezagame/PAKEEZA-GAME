// PAKEEZA GAME - script.js

document.addEventListener("DOMContentLoaded", () => {

    // Play Now Button
    const playBtn = document.querySelector(".hero button");

    if (playBtn) {
        playBtn.addEventListener("click", () => {
            alert("Welcome to PAKEEZA GAME!");
        });
    }

    // Game Cards Animation
    const cards = document.querySelectorAll(".game");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });

        card.addEventListener("click", () => {
            alert(card.innerText + " Coming Soon!");
        });
    });

});
