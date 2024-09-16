// Declare and select DOM elements
const generateResumeBtn = document.getElementById(
  "generate-resume"
) as HTMLButtonElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const generatedResume = document.getElementById(
  "generated-resume"
) as HTMLElement;
const addSkillBtn = document.getElementById("add-skill") as HTMLButtonElement;
const removeSkillBtn = document.getElementById(
  "remove-skill"
) as HTMLButtonElement;
const skillInput = document.getElementById("skill-input") as HTMLInputElement;
const skillsContainer = document.getElementById(
  "skills-container"
) as HTMLElement;
const skillsListElement = document.createElement("ul");

// Declare an empty array to hold the skills
let skills: string[] = [];

// Add Skill Functionality
addSkillBtn.addEventListener("click", () => {
  const newSkill = skillInput.value.trim();
  if (newSkill) {
    skills.push(newSkill);
    skillInput.value = "";

    // Update skills list in the UI
    updateSkillsList();
  }
});

// Remove Skill Functionality
removeSkillBtn.addEventListener("click", () => {
  const skillToRemove = skillInput.value.trim();
  if (skillToRemove) {
    skills = skills.filter((skill) => skill !== skillToRemove);
    skillInput.value = "";

    // Update skills list in the UI
    updateSkillsList();
  }
});

// Function to update skills list in the UI
function updateSkillsList() {
  skillsListElement.innerHTML = ""; // Clear the existing list
  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsListElement.appendChild(skillItem);
  });

  // Append the skills list to the skills section
  if (!skillsContainer.contains(skillsListElement)) {
    skillsContainer.appendChild(skillsListElement);
  }
}

// Generate Resume Functionality
generateResumeBtn.addEventListener("click", () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const position = (document.getElementById("position") as HTMLInputElement)
    .value;
  const workDuration = (
    document.getElementById("work-duration") as HTMLInputElement
  ).value;

  const university = (document.getElementById("university") as HTMLInputElement)
    .value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const eduDuration = (
    document.getElementById("edu-duration") as HTMLInputElement
  ).value;

  // Add placeholders for social media links
  const socialGitHub = (document.getElementById("github") as HTMLInputElement)
    .value;
  const socialLinkedIn = (
    document.getElementById("linkedin") as HTMLInputElement
  ).value;

  let skillsList = "";
  skills.forEach((skill) => {
    skillsList += `<li>${skill}</li>`;
  });

  const resumeHTML = `
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable = "true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable = "true"> ${email}</span></p>
    <p><b>Phone:</b> <span contenteditable = "true">${phone}</span></p>
    
    <h3>Work Experience</h3>
    <p><b>Company:</b> <span contenteditable = "true">${company}</span></p>
    <p><b>Position:</b> <span contenteditable = "true">${position}</span></p>
    <p><b>Duration:</b> <span contenteditable = "true">${workDuration}</span></p>
    
    <h3>Education</h3>
    <p><b>University:</b> <span contenteditable = "true">${university}</span></p>
    <p><b>Degree:</b> <span contenteditable = "true"> ${degree}</span></p>
    <p><b>Duration:</b> <span contenteditable = "true">${eduDuration}</span></p>
    
    <h3>Skills</h3>
    <ul>${skillsList}</ul>

    <h3>Social Media Links</h3>
    <p><a href="${socialGitHub}" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>
    <p><a href="${socialLinkedIn}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></p>
  `;

  resumeContent.innerHTML = resumeHTML;
  generatedResume.style.display = "block";
});
