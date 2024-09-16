 // TypeScript for handling the show/hide functionality of the skills section

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;

    toggleButton.addEventListener("click", () => {
        if (skillsList.classList.contains("hidden")) {
            skillsList.classList.remove("hidden");
        } else {
            skillsList.classList.add("hidden");
        }
    });
});
