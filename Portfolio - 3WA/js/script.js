document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.innerText = "👀 Tu cherches quelque chose ?";
    });

    title.addEventListener("mouseout", () => {
        title.innerText = "🎉 Bienvenue sur mon portfolio !";
    });
});
