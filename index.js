import * as skills from "./skills.js";
import * as intro from "./introduction.js";
import * as languages from "./languages.js";
import * as project from "./project.js";
import * as workexp from "./workexp.js"
import * as education from "./education.js";
import * as image from "./image.js";
import * as contact from "./contactinfo.js";

let topic = document.getElementById("topic");
export const TOPIC = {
    PROJECT: "project",
    EDUCATION: "education",
    WORKEXP: "workexp",
    SKILL: "skills",
    LANGUAGE: "languages",
};


// let completEducationData = JSON.parse(localStorage.getItem("educationList"));
// let educationList=[];
// console.log(completEducationData);
// console.log(typeof(educationList));

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

let previewButton = document.getElementById("preview-resume");

let lastTopicValue = "None";

// for (const element in completEducationData){
//     console.log(completEducationData.dateFrom)
//     let dates = setDate(
//         completEducationData[element].dateFrom,
//         completEducationData[element].dateTo
//     );
//     let insideHTML = getEducationData(completEducationData[element], dates);
//     let rightID = "right-" + completEducationData[element].id;
//     let leftID = "left-" + completEducationData[element].id;
//     createNewElementRight(
//         TOPIC.EDUCATION,
//         rightID,
//         insideHTML,
//         completEducationData[element]
//     );
//     createNewElementLeft(
//         TOPIC.EDUCATION,
//         leftID,
//         completeEducationData[element].degree
//     );
    
// };


let previewButtonChanges = ({formDisplay,resumeWidth,resumeMargin,}) => {
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

export function changeButtons(showSubmitButton, topic) {
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
export let getElementIDRight=(elementId)=> {
    let elementId1 = elementId.split("-")[1];
    let elementId2 = elementId.split("-")[2];
    return "right-" + elementId1 + "-" + elementId2;
}
confirmProjectButton.addEventListener("click", () => {
    project.confirmProject(parent_Div,projectIndex);
    
});
confirmWorkexpButton.addEventListener("click", () => {
    workexp.confirmWorkexp(parent_Div,workexpIndex);
});

confirmEducationButton.addEventListener("click", () => {
    education.confirmEducation(parent_Div,eduIndex);
});
cancelProjectButton.addEventListener("click", () => {
    project.cancelProject();
});
cancelEducationButton.addEventListener("click", () => {
    education.cancelEducation();
   
});

cancelWorkexpButton.addEventListener("click", () => {
    workexp.cancelWorkexp();
    
});
export let addDescription = (description, topicName,parentDiv) => {
    let newDesc = document.createElement("textarea");
    newDesc.value = description;
    console.log(newDesc);
    newDesc.classList.add(topicName + "-desc");
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv.appendChild(newDesc);
};





let removeElementFromArray = (topicName,elementArrayId) => {
    if (topicName === TOPIC.LANGUAGE) {
        languages.deleteLanguage(elementArrayId);
    } else if (topicName === TOPIC.SKILL) {
        skills.deleteSkill(elementArrayId);
    } else if (topicName === TOPIC.WORKEXP) {
        workexp.deleteWorkexp(elementArrayId);
    } else if (topicName === TOPIC.PROJECT) {
        project.deleteProject(elementArrayId)
    } else if (topicName === TOPIC.EDUCATION) {
        education.deleteEducation(elementArrayId);
    }
};

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
                for (let i = 0; i < education.educationList.length; i++) {
                    if (education.educationList[i].id === element_id) {
                        eduIndex = i;
                        education.reassignEducationForEdit(
                            education.educationList[i]
                        );
                        break;
                    }
                }
            } else if (element_id2 === TOPIC.PROJECT) {
                e.preventDefault();
                project.reinitializeProject();
                for (let i = 0; i < project.projectList.length; i++) {
                    if (project.projectList[i].id === element_id) {
                        projectIndex = i;
                        project.reassignProjectForEdit(project.projectList[i]);
                        break;
                    }
                }
            } else if (element_id2 === TOPIC.WORKEXP) {
                e.preventDefault();
                workexp.reinitializeWorkexp();
                // let workexpIndex = -1;
                for (let i = 0; i < workexp.workExpList.length; i++) {
                    if (workexp.workExpList[i].id === element_id) {
                        workexpIndex = i;
                        workexp.reassignWorkExpForEdit(workexp.workExpList[i]);
                        break;
                    }
                }
            }
        } else if (e.target.textContent === "X") {
            e.preventDefault;
            let parent = e.target.parentNode.parentNode;
            let element_id = parent.getAttribute("id");
            let element_id1 = element_id.split("-")[1];
            let topicName = element_id.split("-")[2];
            console.log(element_id);
            element_id = "right-" + element_id1 + "-" + topicName;
            let elementArrayId = element_id1 + "-" + topicName;
            parent.remove();
            let element_remove = document.getElementById(element_id);
            console.log(element_id);
            element_remove.remove();
            removeElementFromArray(topicName,elementArrayId);
            
        }
    }
});


// Add in right section of the page
export function createNewElementRight(topicName, rightID, insideHTML, element_data) {
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
            insideNewDiv[(languages.languageList.length) - 1].appendChild(newDiv);
        }
        for (let i = 0; i < 5 - element_data.rating; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
            insideNewDiv[(languages.languageList.length) - 1].appendChild(newDiv);
        }
    } else if (topicName === TOPIC.SKILL) {
        newDiv.className = TOPIC.SKILL;
        parentDiv[0].appendChild(newDiv);
        let insideNewDiv = document.querySelectorAll(
            ".inside-skills-container"
        );
        insideNewDiv[(skills.skillList.length) - 1].style.width =
            "" + element_data.percentage + "%";
    } else {
        newDiv.id = rightID;
        parentDiv[0].appendChild(newDiv);
    }
}

// Add in left section of the page
export function createNewElementLeft(topicName, leftID, value) {
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


// Creates random id
export function createID(topic) {
    return Math.random().toString(16).slice(2) + "-" + topic;
}

// Arranges date mm/yyyy manner
export function setDate(dateFrom, dateTo) {
    console.log(dateFrom);
    let mmFrom = dateFrom.split("-")[1];
    let mmTo = dateTo.split("-")[1];
    let yyyyFrom = dateFrom.split("-")[0];
    let yyyyTo = dateTo.split("-")[0];
    return [mmFrom, yyyyFrom, mmTo, yyyyTo];
}

// Creates Button
function createButton(text, parent_Div, topicName) {
    let display_Div = document.createElement("div");
    let className = "";
    if (text === "X") className = "remove-" + topicName;
    else className = "edit-" + topicName;
    display_Div.innerHTML =
        "<button class=" + className + ">" + text + "</button>";
    parent_Div.appendChild(display_Div);
}


// Add description blocks for work experience
workexp.addWorkExpDescButton.addEventListener("click", workexp.addWorkExpDesc);

// Add description blocks for project
project.addProjectDescButton.addEventListener("click", project.addProjectDesc);

// Submit Button for work experience
workexp.workExpButton.addEventListener("click", workexp.submitWorkExp);

// Submit Button for project
project.projectButton.addEventListener("click", project.submitProject);

// Submit Button for education
education.educationButton.addEventListener("click", education.submitEducation);

// Submit Button for languages
languages.languageButton.addEventListener("click", languages.submitLanguages);

// Submit Button for skills
skills.skillButton.addEventListener("click", skills.submitSkills);


intro.buttonIntro.addEventListener("click", intro.submitIntro);

// Submit Button for weblinks

contact.buttonLink.addEventListener("click", contact.submitContactInfo);

// Submit button for adding picture
image.submitImage.addEventListener("click", image.submitPicture);




// {/* <i class="fa-solid fa-pen-to-square"></i><i class="fa-solid fa-pen-to-square"></i> */}