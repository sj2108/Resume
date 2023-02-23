let topic = document.getElementById("topic");
const TOPIC = {
    PROJECT: "project",
    EDUCATION: "education",
    WORKEXP: "workexp",
    SKILL: "skills",
    LANGUAGE: "languages",
};
let submitImage = document.getElementById("submit-image");
let profileImage = document.getElementsByTagName("img")[0];
let newProfileImage = document.getElementById("profile-image");

let educationList = [];
let degreeName = document.getElementById("degree-name");
let specializationEdu = document.getElementById("specialization");
let collegeName = document.getElementById("college-name");
let dateFromEdu = document.getElementById("date-from-edu");
let dateToEdu = document.getElementById("date-to-edu");
let courseCgpa = document.getElementById("cgpa");
let educationButton = document.getElementById("submit-education");

let projectList = [];
let addProjectDescButton = document.getElementById("add-project-desc");
let projectName = document.getElementById("project-name");
let dateFromProject = document.getElementById("date-from-project");
let dateToProject = document.getElementById("date-to-project");
let descrProject = document.getElementsByClassName("project-desc");
let projectButton = document.getElementById("submit-project");

let workExpList = [];
let addWorkExpDescButton = document.getElementById("add-desc");
let roleName = document.getElementById("role-name");
let companyName = document.getElementById("company-name");
let workLocation = document.getElementById("work-location");
let dateFrom = document.getElementById("date-from");
let dateTo = document.getElementById("date-to");
let descr = document.getElementsByClassName("workexp-desc");
let workExpButton = document.getElementById("submit-workexp");

let skillList = [];
let skillName = document.getElementById("skill-name");
let skillPercentage = document.getElementById("skill-percentage");
let buttonSkills = document.getElementById("submit-skills");

let languageList = [];
let languageName = document.getElementById("languages-name");
let languageRating = document.getElementById("languages-rating");
let buttonLanguage = document.getElementById("submit-languages");

let cancelProjectButton = document.getElementById("cancel-project");
let confirmProjectButton = document.getElementById("confirm-project");
let submitProjectButton = document.getElementById("submit-project");
let cancelWorkexpButton = document.getElementById("cancel-workexp");
let confirmWorkexpButton = document.getElementById("confirm-workexp");
let submitWorkexpButton = document.getElementById("submit-workexp");
let cancelEducationButton = document.getElementById("cancel-education");
let confirmEducationButton = document.getElementById("confirm-education");
let submitEducationButton = document.getElementById("submit-education");
let projectIndex = -1;
let eduIndex = -1;
let workexpIndex = -1;
let parent_Div = "";

let introList = [];
let name = document.getElementById("name");
let role = document.getElementById("role");
let description = document.getElementById("desc");
let buttonIntro = document.getElementById("submit-intro");

let contactList = [];
let linkedinLink = document.getElementById("linkedin");
let mailLink = document.getElementById("mail");
let phoneLink = document.getElementById("phone");
let placeLink = document.getElementById("place");
let twitterLink = document.getElementById("twitter");
let nameLink = document.getElementById("nameHeading");
let buttonLink = document.getElementById("submit-contact-info");

let previewButton = document.getElementById("preview-resume");

let lastTopicValue = "None";


previewButtonChanges = ({formDisplay,resumeWidth,resumeMargin,}) => {
    let hideForm = document.getElementsByClassName("form");
    let previewResume = document.getElementsByClassName("layout");
    hideForm[0].style.display = formDisplay;
    previewResume[0].style.width = resumeWidth;
    previewResume[0].style.margin = resumeMargin;
};

previewButton.addEventListener("click", (e) => {
    console.log((e.target.value));
    if(e.target.value==="Preview")
    {
        e.target.value = "Go back to form";
        previewButtonChanges({
            formDisplay: "none",
            resumeWidth: "60%",
            resumeMargin: "auto",
        });
    }
    else
    {
        e.target.value = "Preview";
        previewButtonChanges({
            formDisplay: "block",
            resumeWidth: "48%",
            resumeMargin: "20px",
        });
    }
});

// console.log(topic.value);
topic.addEventListener("change", () => {
    if (lastTopicValue != "None")
        document
            .getElementsByClassName(lastTopicValue + "-form")[0]
            .classList.add("sub-form");
    document
        .getElementsByClassName(topic.value + "-form")[0]
        .classList.remove("sub-form");
    lastTopicValue = topic.value;
});

function changeButtons(showSubmitButton, topic) {
    let confirmButton = document.getElementById("confirm-" + topic);
    let cancelButton = document.getElementById("cancel-" + topic);
    let submitButton = document.getElementById("submit-" + topic);
    if (showSubmitButton) {
        cancelButton.style.display = "none";
        confirmButton.style.display = "none";
        submitButton.style.display = "block";
    } else {
        cancelButton.style.display = "block";
        confirmButton.style.display = "block";
        submitButton.style.display = "none";
    }
}
getElementIDRight=(elementId)=> {
    let elementId1 = elementId.split("-")[1];
    let elementId2 = elementId.split("-")[2];
    return "right-" + elementId1 + "-" + elementId2;
}
confirmProjectButton.addEventListener("click", () => {
    projectList.splice(projectIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitProject();
    changeButtons(true, TOPIC.PROJECT);
});
confirmWorkexpButton.addEventListener("click", () => {
    workExpList.splice(projectIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitWorkExp();
    changeButtons(true, TOPIC.WORKEXP);
});

confirmEducationButton.addEventListener("click", () => {
    educationList.splice(eduIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitEducation();
    changeButtons(true, TOPIC.EDUCATION);
});
cancelProjectButton.addEventListener("click", () => {
    changeButtons(true, TOPIC.PROJECT);
    reinitializeProject();
});
cancelEducationButton.addEventListener("click", () => {
    changeButtons(true, TOPIC.EDUCATION);
    reinitializeEducation();
});

cancelWorkexpButton.addEventListener("click", () => {
    changeButtons(true, TOPIC.WORKEXP);
    reinitializeWorkexp();
});
let addDescription = (description, topicName,parentDiv) => {
    let newDesc = document.createElement("textarea");
    newDesc.value = description;
    console.log(newDesc);
    newDesc.classList.add(topicName + "-desc");
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv.appendChild(newDesc);
};
reassignProjectForEdit = (projectArray) => {
    projectName.value = projectArray.name;
    dateFromProject.value = projectArray.dateFrom;
    dateToProject.value = projectArray.dateTo;
    let firstDesc = document.getElementsByClassName("project-desc");
    firstDesc[0].value = projectArray.description[0];
    for (let j = 1; j < projectArray.description.length; j++) 
    {
        let parentDiv = document.getElementsByClassName("complete-project-desc");
        console.log(parentDiv[0]);
        addDescription(projectArray.description[j],TOPIC.PROJECT,parentDiv[0]) 
    }
};

reassignWorkExpForEdit = (workExpArray) => {
    roleName.value = workExpArray.role;
    companyName.value = workExpArray.company;
    workLocation.value = workExpArray.location;
    dateFrom.value = workExpArray.dateFrom;
    dateTo.value = workExpArray.dateTo;
    let first_desc = document.getElementsByClassName("workexp-desc");
    first_desc[0].value = workExpArray.description[0];
    for (let j = 1; j < workExpArray.description.length; j++) 
    {
        let parentDiv = document.getElementsByClassName("complete-desc");
        console.log(parentDiv[0]);
        addDescription(workExpArray.description[j], TOPIC.WORKEXP,parentDiv[0]);    
    }

};


removeElementFromArray = (topicName) => {
    if (topicName === TOPIC.LANGUAGE) {
        languageList = languageList.filter((l) => l.id != elementArrayId);
        console.log(languageList);
    } else if (topicName === TOPIC.SKILL) {
        skillList = skillList.filter((l) => l.id != elementArrayId);
        console.log(skillList);
    } else if (topicName === TOPIC.WORKEXP) {
        workExpList = workExpList.filter((l) => l.id != elementArrayId);
        console.log(workExpList);
    } else if (topicName === TOPIC.PROJECT) {
        projectList = projectList.filter((l) => l.id != elementArrayId);
        console.log(projectList);
    } else if (topicName === TOPIC.EDUCATION) {
        educationList = educationList.filter((l) => l.id != elementArrayId);
        console.log(educationList);
    }
};
reassignEducationForEdit = (educationArray)=>{
    degreeName.value = educationArray.degree;
    specializationEdu.value = educationArray.specialization;
    collegeName.value = educationArray.college;
    dateFromEdu.value = educationArray.dateFrom;
    dateToEdu.value = educationArray.dateTo;
    courseCgpa.value = educationArray.cgpa;
}
let parentDiv = document.getElementsByClassName("form");
parentDiv[0].addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.textContent === "Edit") {
            e.preventDefault();
            let parent = e.target.parentNode.parentNode;
            parent_Div = parent;
            let element_id = parent.getAttribute("id");
            let element_id1 = element_id.split("-")[1];   // Give the randomly geneated ID
            let element_id2 = element_id.split("-")[2];   // Give the topic name
            element_id = element_id1 + "-" + element_id2; 
            console.log(element_id2);
            changeButtons(false, element_id2);

            if (element_id2 === TOPIC.EDUCATION) {
                e.preventDefault();
                for (let i = 0; i < educationList.length; i++) {
                    if (educationList[i].id === element_id) {
                        eduIndex = i;
                        reassignEducationForEdit(educationList[i]);
                        break;
                    }
                }
            } else if (element_id2 === TOPIC.PROJECT) {
                e.preventDefault();
                reinitializeProject();
                for (let i = 0; i < projectList.length; i++) {
                    if (projectList[i].id === element_id) {
                        projectIndex = i;
                        reassignProjectForEdit(projectList[i]);
                        break;
                    }
                }
            } else if (element_id2 === TOPIC.WORKEXP) {
                e.preventDefault();
                reinitializeWorkexp();
                // let workexpIndex = -1;
                for (let i = 0; i < workExpList.length; i++) {
                    if (workExpList[i].id === element_id) {
                        workexpIndex = i;
                        reassignWorkExpForEdit(workExpList[i]);
                        break;
                    }
                }
            }
        } else if (e.target.textContent === "X") {
            let parent = e.target.parentNode.parentNode;
            element_id = parent.getAttribute("id");
            element_id1 = element_id.split("-")[1];
            topicName = element_id.split("-")[2];
            console.log(element_id);
            element_id = "right-" + element_id1 + "-" + topicName;
            elementArrayId = element_id1 + "-" + topicName;
            parent.remove();
            let element_remove = document.getElementById(element_id);
            console.log(element_id);
            element_remove.remove();
            removeElementFromArray(topicName);
            
        }
    }
});


// Add in right section of the page
function createNewElementRight(topicName, rightID, insideHTML, element_data) {
    let parentDiv = document.getElementsByClassName(topicName + "-container");
    let newDiv = document.createElement("div");

    // console.log(roleName);

    newDiv.innerHTML = insideHTML;
    if (topicName === TOPIC.PROJECT || topicName === TOPIC.WORKEXP) {
        newDiv.id = rightID;
        let newChildDiv = document.createElement("div");
        let ul = document.createElement("ul");
        ul.classList.add = "space-bottom";
        for (let i = 0; i < element_data.description.length; i++) {
            let li = document.createElement("li");
            li.textContent = element_data.description[i];
            ul.appendChild(li);
        }
        newChildDiv.appendChild(ul);
        newDiv.appendChild(newChildDiv);
        parentDiv[0].appendChild(newDiv);
    } else if (topicName === TOPIC.LANGUAGE) {
        // languages
        newDiv.id = rightID;
        newDiv.className = "inside-" + topicName + "-container";
        parentDiv[0].appendChild(newDiv);
        let insideNewDiv = document.getElementsByClassName("place-circles");
        for (let i = 0; i < element_data.rating; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<i class='fa-solid fa-circle rating'></i>";
            insideNewDiv[languageList.length - 1].appendChild(newDiv);
        }
        for (let i = 0; i < 5 - element_data.rating; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
            insideNewDiv[languageList.length - 1].appendChild(newDiv);
        }
    } else if (topicName === TOPIC.SKILL) {
        newDiv.className = TOPIC.SKILL;
        parentDiv[0].appendChild(newDiv);
        let insideNewDiv = document.querySelectorAll(
            ".inside-skills-container"
        );
        insideNewDiv[skillList.length - 1].style.width =
            "" + element_data.percentage + "%";
    } else {
        newDiv.id = rightID;
        parentDiv[0].appendChild(newDiv);
    }
}

// Add in left section of the page
function createNewElementLeft(topicName, leftID, value) {
    let parent_Div = document.querySelector("." + topicName + "-" + "form");
    let nextDiv = document.createElement("div");
    nextDiv.class = "subform";
    nextDiv.id = leftID;
    parent_Div.appendChild(nextDiv);
    parent_Div = nextDiv;

    let display_Div = document.createElement("div");
    display_Div.innerHTML = "<h4>" + value + "</h4>";
    display_Div.style.border = "2px solid black";
    parent_Div.appendChild(display_Div);
    createButton("X", parent_Div, topicName);
    if (
        topicName === TOPIC.EDUCATION ||
        topicName === TOPIC.PROJECT ||
        topicName === TOPIC.WORKEXP
    ) {
        createButton("Edit", parent_Div, topicName);
    }
    parent_Div.style.display = "flex";
}

// Addding Linkedin link
function addLinkedin(parentDiv, user_linkedin) {
    if (user_linkedin != "") {
        parentDiv[0].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-linkedin icons'></i></div><div class='icon-text'><a href=" +
            user_linkedin +
            " target='_blank' class='iconic'>" +
            user_linkedin +
            "</a></div>";
    }
}
// Adding Email ID
function addEmail(parentDiv, user_email) {
    if (user_email != "") {
        parentDiv[1].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-envelope icons'></i></div><div class='icon-text'><a href='mailto: " +
            user_email +
            " target='_blank' class='iconic'>" +
            user_email +
            "</a></div>";
    }
}
// Adding Phone Number
function addPhone(parentDiv, user_phone) {
    if (user_phone != "") {
        parentDiv[2].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-mobile icons'></i></div><div class='icon-text'><a href='tel:+" +
            user_phone +
            " target='_blank' class='iconic'>" +
            user_phone +
            "</a></div>";
    }
}

// Adding Location
function addPlace(parentDiv, user_place) {
    if (user_place != "") {
        parentDiv[3].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-location-dot icons'></i></div><div class='icon-text'><a href='' target='_blank' class='iconic'>" +
            user_place +
            "</a></div>";
    }
}

// Adding Twitter link
function addTwitter(parentDiv, user_twitter) {
    if (user_twitter != "") {
        let userName_twitter = user_twitter.split("/")[3];
        user_name = nameLink.innerHTML;
        user_name = user_name.split(" ")[0].toLowerCase();
        parentDiv[4].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-square-twitter icons'></i></div><div class='icon-text'><a href=" +
            user_twitter +
            " target='_blank' class='iconic'>" +
            userName_twitter +
            "</a></div>";
    }
}

// Creates random id
function createID(topic) {
    return Math.random().toString(16).slice(2) + "-" + topic;
}

// Arranges date mm/yyyy manner
function setDate(dateFrom, dateTo) {
    mmFrom = dateFrom.split("-")[1];
    mmTo = dateTo.split("-")[1];
    yyyyFrom = dateFrom.split("-")[0];
    yyyyTo = dateTo.split("-")[0];
    return [mmFrom, yyyyFrom, mmTo, yyyyTo];
}

// Creates Button
function createButton(text, parent_Div, topicName) {
    let display_Div = document.createElement("div");
    let className = "";
    if (text == "Edit") className = "remove-" + topicName;
    else className = "edit-" + topicName;
    display_Div.innerHTML =
        "<button class=" + className + ">" + text + "</button>";
    parent_Div.appendChild(display_Div);
}

// Text inside Skills
function getSkillsData(rightID, text) {
    return `<div class='border-element' id= 
            ${rightID} 
            ><div class='inside-skills-container'><h4>
            ${text} 
            </h4> </div></div>`;
}

// Text inside Languages
function getLanguagesData(text) {
    return "<h4>" + text + "</h4><div class='place-circles'></div>";
}

// Text inside Work Experience
function getWorkexpData(workExp_element, dates) {
    return ` 
                <h4>${workExp_element.role}</h4>
                <h4 id="company-name">${workExp_element.company}</h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">${workExp_element.location}</div>
                </div>
            `;
}

// Text inside Education
function getEducationData(education_element, dates) {
    return `
                <h4 class="degree">${education_element.degree} in ${education_element.specialization} </h4>
                <h4>${education_element.college} </h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">CGPA- ${education_element.cgpa}</div>
                </div>
                <br>
                `;
}
// Text inside Project
function getProjectData(project_element, dates) {
    return `<h4 class="project">${project_element.name}</h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]} </div>

                </div>`;
}

// Reset Introduction form
function reinitializeIntro() {
    name.value = "";
    role.value = "";
    description.value = "";
}

// Reset Language form
function reinitializeLanguages() {
    languageName.value = "";
    languageRating.value = "";
}

// Reset Skills form
function reinitializeSkills() {
    skillName.value = "";
    skillPercentage.value = "";
}

// Reset Contact Information form
function reinitializeContactInfo() {
    linkedinLink.value = "";
    mailLink.value = "";
    phoneLink.value = "";
    placeLink.value = "";
    twitterLink.value = "";
}

// Reset Work-Experience form
function reinitializeWorkexp() {
    roleName.value = "";
    companyName.value = "";
    workLocation.value = "";
    dateFrom.value = "";
    dateTo.value = "";
    descr[0].value = "";
    for (let i = 1; i < descr.length; ) {
        descr[i].remove();
    }
}

// Reset Education form
function reinitializeEducation() {
    degreeName.value = "";
    specializationEdu.value = "";
    collegeName.value = "";
    dateFromEdu.value = "";
    dateToEdu.value = "";
    courseCgpa.value = "";
}

// Reset Project form
function reinitializeProject() {
    projectName.value = "";
    dateFromProject.value = "";
    dateToProject.value = "";
    descrProject[0].value = "";
    // console.log("hello");
    for (let i = 1; i < descrProject.length; ) {
        // console.log(descrProject[i].className);

        descrProject[i].remove();
    }
}

// Add description blocks for work experience
addWorkExpDesc = () => {
    let parentDiv = document.getElementsByClassName("complete-desc");
    let newDesc = document.createElement("textarea");
    console.log(newDesc);
    newDesc.classList.add("workexp-desc");
    // newDesc.name="description";
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv[0].appendChild(newDesc);
};
addWorkExpDescButton.addEventListener("click", addWorkExpDesc);

// Add description blocks for project
addProjectDesc = () => {
    let parentDiv = document.getElementsByClassName("complete-project-desc");
    let newDesc = document.createElement("textarea");
    console.log(newDesc);
    newDesc.classList.add("project-desc");
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv[0].appendChild(newDesc);
};
addProjectDescButton.addEventListener("click", addProjectDesc);

// Submit Button for work experience
submitWorkExp = () => {
    const topic = TOPIC.WORKEXP;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let workExpElement = {
        role: roleName.value,
        company: companyName.value,
        location: workLocation.value,
        dateFrom: dateFrom.value,
        dateTo: dateTo.value,
        description: [],
        id: ID,
    };
    let dates = setDate(dateFrom.value, dateTo.value);
    for (var i = 0; i < descr.length; i++) {
        workExpElement.description.push(descr[i].value);
    }
    let insideHTML = getWorkexpData(workExpElement, dates);
    createNewElementRight(topic, rightID, insideHTML, workExpElement);
    createNewElementLeft(topic, leftID, companyName.value, 1);
    workExpList.push(workExpElement);
    console.log(workExpList);
    reinitializeWorkexp();
};
workExpButton.addEventListener("click", submitWorkExp);

// Submit Button for project
submitProject = () => {
    const topic = TOPIC.PROJECT;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let projectElement = {
        name: projectName.value,
        dateFrom: dateFromProject.value,
        dateTo: dateToProject.value,
        description: [],
        id: ID,
    };
    let dates = setDate(dateFromProject.value, dateToProject.value);
    for (var i = 0; i < descrProject.length; i++) {
        projectElement.description.push(descrProject[i].value);
    }
    let insideHTML = getProjectData(projectElement, dates);
    createNewElementRight(topic, rightID, insideHTML, projectElement);
    createNewElementLeft(topic, leftID, projectElement.name, 1);
    projectList.push(projectElement);
    console.log(projectList);
    reinitializeProject();
};
projectButton.addEventListener("click", submitProject);

// Submit Button for education
submitEducation = () => {
    const topic = TOPIC.EDUCATION;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let educationElement = {
        degree: degreeName.value,
        specialization: specializationEdu.value,
        college: collegeName.value,
        dateFrom: dateFromEdu.value,
        dateTo: dateToEdu.value,
        cgpa: courseCgpa.value,
        id: ID,
    };
    let dates = setDate(dateFromEdu.value, dateToEdu.value);
    let insideHTML = getEducationData(educationElement, dates);
    createNewElementRight(topic, rightID, insideHTML, educationElement);
    createNewElementLeft(topic, leftID, educationElement.degree);
    educationList.push(educationElement);
    console.log(educationList);
    reinitializeEducation();
};
educationButton.addEventListener("click", submitEducation);

// Submit Button for languages
submitLanguages = () => {
    const topic = TOPIC.LANGUAGE;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let languageElement = {
        name: languageName.value,
        rating: languageRating.value,
        id: ID,
    };
    languageList.push(languageElement);
    let insideHTML = getLanguagesData(languageName.value);
    createNewElementRight(topic, rightID, insideHTML, languageElement);
    createNewElementLeft(topic, leftID, languageElement.name, 0);
    reinitializeLanguages();
};
buttonLanguage.addEventListener("click", submitLanguages);

// Submit Button for skills
submitSkills = () => {
    const topic = TOPIC.SKILL;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let skillElement = {
        skill: skillName.value,
        percentage: skillPercentage.value,
        id: ID,
    };
    skillList.push(skillElement);
    let insideHTML = getSkillsData(rightID, skillElement.skill);
    createNewElementRight(topic, rightID, insideHTML, skillElement);
    createNewElementLeft(topic, leftID, skillElement.skill, 0);
    reinitializeSkills();
};
buttonSkills.addEventListener("click", submitSkills);

// Submit Button for introduction
submitIntro = () => {
    let introElement = {
        name: name.value,
        role: role.value,
        description: description.value,
    };
    introList.push(introElement);
    let userName = document.querySelector(".intro h1");
    let userRole = document.querySelector(".intro h4");
    let userDescription = document.querySelector(".intro p");
    userName.innerHTML = name.value;
    userRole.innerHTML = role.value;
    userDescription.innerHTML = description.value;
    reinitializeIntro();
};
buttonIntro.addEventListener("click", submitIntro);

// Submit Button for weblinks
submitContactInfo = () => {
    let userLinkedin = linkedinLink.value;
    let userEmail = mailLink.value;
    let userPhone = phoneLink.value;
    let userPlace = placeLink.value;
    let userTwitter = twitterLink.value;
    let contactElement = {
        linkedin: userLinkedin,
        email: userEmail,
        phone: userPhone,
        place: userPlace,
        twitter: userTwitter,
    };
    contactList.push(contactElement);
    console.log(contactList);
    let parentDiv = document.getElementsByClassName("link-icon");
    addLinkedin(parentDiv, userLinkedin);
    addEmail(parentDiv, userEmail);
    addPhone(parentDiv, userPhone);
    addPlace(parentDiv, userPlace);
    addTwitter(parentDiv, userTwitter);
    reinitializeContactInfo();
};
buttonLink.addEventListener("click", submitContactInfo);

// Submit button for adding picture
submitPicture = (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
        profileImage.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(newProfileImage.files[0]);
};
submitImage.addEventListener("click", submitPicture);
