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
const shareableLink = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLElement;
const downloadPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;

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
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;

  let skillsList = "";
  skills.forEach((skill) => {
    skillsList += `<li>${skill}</li>`;
  });

  const resumeHTML = `
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    
    <h3>Work Experience</h3>
    <p><b>Company:</b> ${company}</p>
    <p><b>Position:</b> ${position}</p>
    <p><b>Duration:</b> ${workDuration}</p>
    
    <h3>Education</h3>
    <p><b>University:</b> ${university}</p>
    <p><b>Degree:</b> ${degree}</p>
    <p><b>Duration:</b> ${eduDuration}</p>
    
    <h3>Skills</h3>
    <ul>${skillsList}</ul>

    <h3>Find me on Social Media</h3>
    <p><b>GitHub:</b> <a href="${github}" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>
    <p><b>LinkedIn:</b> <a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></p>
  `;

  resumeContent.innerHTML = resumeHTML;
  generatedResume.style.display = "block";

  // Generate short shareable link with only username
  const shareableURL = `http://localhost:5500/?u=${encodeURIComponent(
    username
  )}`;
  shareableLink.href = shareableURL;
  shareableLink.textContent = shareableURL;
  shareableLinkContainer.style.display = "block";
});

// Download Resume as PDF Functionality
downloadPdfButton.addEventListener("click", () => {
  window.print(); // Use browser's print feature for PDF download
});
