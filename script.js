if (localStorage.getItem('showConfirmation') === 'true') {
    localStorage.removeItem('showConfirmation');
    showConfirmation();
}


// --- COUNTDOWN ---
const eventDate = new Date("2025-09-14T00:00:00Z"); 
setInterval(() => {
    const now = new Date();
    const timeDiff = eventDate - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("countdown").innerText = 
        `${days} jours, ${hours} heures avant le tournoi !`;
}, 1000);


// --- MODALS ---

// Ouvre le formulaire d'inscription d'équipe
document.getElementById("openModalEquipe").addEventListener("click", () => {
    document.getElementById("modalEquipe").style.display = "flex";
});

// Ouvre le formulaire pour les médias
document.getElementById("openModal").addEventListener("click", () => {
    document.getElementById("modalMedia").style.display = "flex";
});

// Ferme tous les modals
function closeModals() {
    document.getElementById("modalEquipe").style.display = "none";
    document.getElementById("modalMedia").style.display = "none";
}

// Ferme si on clique à l’extérieur du modal
window.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
        closeModals();
    }
});

// Ferme si on appuie sur Échap
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeModals();
    }
});

// Animation d'apparition des sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {threshold: 0.1});

    sections.forEach(section => observer.observe(section));
    });

// --- CONFIRMATION MESSAGE ---
function showConfirmation(){
    const message = document.getElementById("confirmationMessage");
    message.classList.remove("hidden");
    setTimeout(() => {
        message.classList.add("hidden");
    }, 5000);
}

// --- MENU BURGER MOBILE ---

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isVisible = navLinks.style.display === "flex";
    navLinks.style.display = isVisible ? "none" : "flex";
});
