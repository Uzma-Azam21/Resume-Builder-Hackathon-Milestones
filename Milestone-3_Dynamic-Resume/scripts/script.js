// Declare and select DOM elements
var generateResumeBtn = document.getElementById('generate-resume');
var resumeContent = document.getElementById('resume-content');
var generatedResume = document.getElementById('generated-resume');
var addSkillBtn = document.getElementById('add-skill');
var removeSkillBtn = document.getElementById('remove-skill');
var skillInput = document.getElementById('skill-input');
var skillsContainer = document.getElementById('skills-container');
var skillsListElement = document.createElement('ul');
// Declare an empty array to hold the skills
var skills = [];
// Add Skill Functionality
addSkillBtn.addEventListener('click', function () {
    var newSkill = skillInput.value.trim();
    if (newSkill) {
        skills.push(newSkill);
        skillInput.value = '';
        // Update skills list in the UI
        updateSkillsList();
    }
});
// Remove Skill Functionality
removeSkillBtn.addEventListener('click', function () {
    var skillToRemove = skillInput.value.trim();
    if (skillToRemove) {
        skills = skills.filter(function (skill) { return skill !== skillToRemove; });
        skillInput.value = '';
        // Update skills list in the UI
        updateSkillsList();
    }
});
// Function to update skills list in the UI
function updateSkillsList() {
    skillsListElement.innerHTML = ''; // Clear the existing list
    skills.forEach(function (skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsListElement.appendChild(skillItem);
    });
    // Append the skills list to the skills section
    if (!skillsContainer.contains(skillsListElement)) {
        skillsContainer.appendChild(skillsListElement);
    }
}
// Generate Resume Functionality
generateResumeBtn.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workDuration = document.getElementById('work-duration').value;
    var university = document.getElementById('university').value;
    var degree = document.getElementById('degree').value;
    var eduDuration = document.getElementById('edu-duration').value;
    // Add placeholders for social media links
    var socialGitHub = document.getElementById('github').value;
    var socialLinkedIn = document.getElementById('linkedin').value;
    var skillsList = '';
    skills.forEach(function (skill) {
        skillsList += "<li>".concat(skill, "</li>");
    });
    var resumeHTML = "\n    <h3>Personal Information</h3>\n    <p>Name: ".concat(name, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    \n    <h3>Work Experience</h3>\n    <p>Company: ").concat(company, "</p>\n    <p>Position: ").concat(position, "</p>\n    <p>Duration: ").concat(workDuration, "</p>\n    \n    <h3>Education</h3>\n    <p>University: ").concat(university, "</p>\n    <p>Degree: ").concat(degree, "</p>\n    <p>Duration: ").concat(eduDuration, "</p>\n    \n    <h3>Skills</h3>\n    <ul>").concat(skillsList, "</ul>\n\n    <h3>Social Media Links</h3>\n    <p><a href=\"").concat(socialGitHub, "\" target=\"_blank\"><i class=\"fab fa-github\"></i> GitHub</a></p>\n    <p><a href=\"").concat(socialLinkedIn, "\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></p>\n  ");
    resumeContent.innerHTML = resumeHTML;
    generatedResume.style.display = 'block';
});
