document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.innerText = "👀 Tu cherches quelque chose ?";
    });

    title.addEventListener("mouseout", () => {
        title.innerText = "🎉 Bienvenue sur mon portfolio !";
    });
});

// Animation
document.addEventListener("DOMContentLoaded", () => {
    // Effet rigolo sur le titre quand on passe la souris
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.innerText = "👀 Hé, tu cherches quelque chose ?";
    });

    title.addEventListener("mouseout", () => {
        title.innerText = "🎉 Bienvenue sur mon portfolio !";
    });

    // Apparition progressive des sections
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fade-in 0.8s ease-out forwards";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
