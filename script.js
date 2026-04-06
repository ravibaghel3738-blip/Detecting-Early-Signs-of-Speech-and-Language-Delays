function showMessage() {
    const popup = document.createElement("div");
    popup.innerText = "Early identification helps children receive support sooner. Observe, document, and communicate concerns professionally.";

    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.right = "30px";
    popup.style.maxWidth = "320px";
    popup.style.background = "linear-gradient(45deg, #ff6a00, #ee0979)";
    popup.style.color = "white";
    popup.style.padding = "15px 20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    popup.style.opacity = "0";
    popup.style.transition = "0.5s";
    popup.style.zIndex = "2000";
    popup.style.lineHeight = "1.5";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 3500);
}

// Smooth card reveal
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

// Smooth navbar click scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Ripple effect for button
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function(e) {
        let ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "100px";
        ripple.style.height = "100px";
        ripple.style.background = "rgba(255,255,255,0.4)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.left = (e.offsetX - 50) + "px";
        ripple.style.top = (e.offsetY - 50) + "px";
        ripple.style.animation = "ripple 0.6s linear";

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple keyframes using JS
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
