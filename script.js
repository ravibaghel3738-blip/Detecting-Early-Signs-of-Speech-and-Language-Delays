// Smooth Popup Message (Alert Replace)
function showMessage() {
    const popup = document.createElement("div");
    popup.innerText = "Early diagnosis helps better development. Don't ignore signs!";

    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.right = "30px";
    popup.style.background = "linear-gradient(45deg, #ff6a00, #ee0979)";
    popup.style.color = "white";
    popup.style.padding = "15px 20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    popup.style.opacity = "0";
    popup.style.transition = "0.5s";

    document.body.appendChild(popup);

    // Smooth fade in
    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100);

    // Auto remove
    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}


// Smooth Scroll Animation (Cards appear)
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});


// Smooth Navbar Click Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Button Hover Ripple Effect
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function(e) {
        let ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "100px";
        ripple.style.height = "100px";
        ripple.style.background = "rgba(255,255,255,0.5)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.left = (e.offsetX - 50) + "px";
        ripple.style.top = (e.offsetY - 50) + "px";
        ripple.style.animation = "ripple 0.6s linear";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});