var generateResumeBtn = document.getElementById("generate-resume");
var resumeContent = document.getElementById("resume-content");
var generatedResume = document.getElementById("generated-resume");
var addSkillBtn = document.getElementById("add-skill");
var removeSkillBtn = document.getElementById("remove-skill");
var skillInput = document.getElementById("skill-input");
var skillsContainer = document.getElementById("skills-container");
var skillsListElement = document.createElement("ul");
var shareableLink = document.getElementById("shareable-link");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var downloadPdfButton = document.getElementById("download-pdf");
// Declare an empty array to hold the skills
var skills = [];
// Add Skill Functionality
addSkillBtn.addEventListener("click", function () {
    var newSkill = skillInput.value.trim();
    if (newSkill) {
        skills.push(newSkill);
        skillInput.value = "";
        // Update skills list in the UI
        updateSkillsList();
    }
});
// Remove Skill Functionality
removeSkillBtn.addEventListener("click", function () {
    var skillToRemove = skillInput.value.trim();
    if (skillToRemove) {
        skills = skills.filter(function (skill) { return skill !== skillToRemove; });
        skillInput.value = "";
        // Update skills list in the UI
        updateSkillsList();
    }
});
// Function to update skills list in the UI
function updateSkillsList() {
    skillsListElement.innerHTML = ""; // Clear the existing list
    skills.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsListElement.appendChild(skillItem);
    });
    // Append the skills list to the skills section
    if (!skillsContainer.contains(skillsListElement)) {
        skillsContainer.appendChild(skillsListElement);
    }
}
// Generate Resume Functionality
generateResumeBtn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var company = document.getElementById("company")
        .value;
    var position = document.getElementById("position")
        .value;
    var workDuration = document.getElementById("work-duration").value;
    var university = document.getElementById("university")
        .value;
    var degree = document.getElementById("degree").value;
    var eduDuration = document.getElementById("edu-duration").value;
    var username = document.getElementById("username")
        .value;
    var github = document.getElementById("github").value;
    var linkedin = document.getElementById("linkedin")
        .value;
    var skillsList = "";
    skills.forEach(function (skill) {
        skillsList += "<li>".concat(skill, "</li>");
    });
    var resumeHTML = "\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    \n    <h3>Work Experience</h3>\n    <p><b>Company:</b> ").concat(company, "</p>\n    <p><b>Position:</b> ").concat(position, "</p>\n    <p><b>Duration:</b> ").concat(workDuration, "</p>\n    \n    <h3>Education</h3>\n    <p><b>University:</b> ").concat(university, "</p>\n    <p><b>Degree:</b> ").concat(degree, "</p>\n    <p><b>Duration:</b> ").concat(eduDuration, "</p>\n    \n    <h3>Skills</h3>\n    <ul>").concat(skillsList, "</ul>\n\n    <h3>Find me on Social Media</h3>\n    <p><b>GitHub:</b> <a href=\"").concat(github, "\" target=\"_blank\"><i class=\"fab fa-github\"></i> GitHub</a></p>\n    <p><b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></p>\n  ");
    resumeContent.innerHTML = resumeHTML;
    generatedResume.style.display = "block";
    // Generate short shareable link with only username
    var shareableURL = "http://localhost:5500/?u=".concat(encodeURIComponent(username));
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
    shareableLinkContainer.style.display = "block";
});
// Download Resume as PDF Functionality
downloadPdfButton.addEventListener("click", function () {
    window.print(); // Use browser's print feature for PDF download
});
