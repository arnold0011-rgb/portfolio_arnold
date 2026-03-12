// --- 1. EFFET D'ÉCRITURE (Typing Effect) ---
const textElement = document.getElementById('typing-text');
const phrase = "Développeur passionné par le code propre et l'expérience utilisateur.";
let index = 0;

function typeWriter() {
    if (index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        // La vitesse est de 50 millisecondes par lettre
        setTimeout(typeWriter, 50);
    }
}

// --- 2. GESTION DU MODE SOMBRE ---
const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    // On bascule la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');
    
    // On change l'icône et le texte du bouton
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = "☀️ Mode Clair";
    } else {
        btn.innerText = "🌙 Mode Sombre";
    }
});

// --- 3. BARRE DE PROGRESSION AU DÉFILEMENT ---
window.onscroll = function() {
    // Calcul de la hauteur de défilement
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // On applique le % à la largeur de la barre de progression
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// --- 4. INTERACTION AVEC LES CARTES ---
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        // On récupère la description stockée dans l'attribut data-desc
        const description = card.getAttribute('data-desc');
        alert("Infos : " + description);
    });
});

// Lancement de l'effet d'écriture au démarrage
window.onload = typeWriter;