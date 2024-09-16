 // TypeScript for handling the show/hide functionality of the skills section

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills-btn");
    var skillsList = document.getElementById("skills-list");
    toggleButton.addEventListener("click", function () {
        if (skillsList.classList.contains("hidden")) {
            skillsList.classList.remove("hidden");
        }
        else {
            skillsList.classList.add("hidden");
        }
    });
});
