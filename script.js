
document.addEventListener("DOMContentLoaded", function () {
    const heart = document.querySelector(".heart");

    heart.addEventListener("click", function () {
        heart.style.animation = "none";
        setTimeout(() => heart.style.animation = "beat 1s infinite alternate ease-in-out", 10);
    });
});
