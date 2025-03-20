document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navMenuSmall = document.getElementById("navMenuSmall");

    menuButton.addEventListener("click", function() {
        navMenuSmall.classList.toggle("active");
        menuButton.textContent = navMenuSmall.classList.contains("active") ? "✖" : "☰";
    });
});
