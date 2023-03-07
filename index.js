import * as skills from "./skills.js";
import {reassignIntroductionForEdit,buttonIntro,submitIntro} from "./introduction.js";
import * as languages from "./languages.js";
// import * as project from "./project.js";
import {
    assignWorkExpValue,
    workExpList,
    reassignWorkExpForEdit,
    deleteWorkexp,
    confirmWorkexp,
    confirmWorkexpButton,
    cancelWorkexp,
    cancelWorkexpButton,
    workExpButton,
    submitWorkExp,
    addWorkExpDesc,
    addWorkExpDescButton,
    editWorkExpButton,
    addWorkExpButton,
    editInsideWorkExpButton,
}  from "./workexp.js"
import {
    assignProjectValue,
    projectList,
    reassignProjectForEdit,
    deleteProject,
    confirmProject,
    confirmProjectButton,
    cancelProject,
    cancelProjectButton,
    projectButton,
    submitProject,
    addProjectDesc,
    addProjectDescButton,
    editProjectButton,
    addProjectButton,
    editInsideProjectButton,
} from "./project.js";
import {
    assignEducationValue,
    educationList,
    reassignEducationForEdit,
    deleteEducation,
    confirmEducation,
    confirmEducationButton,
    cancelEducation,
    cancelEducationButton,
    educationButton,
    submitEducation,
    editEducationButton,
    addEducationButton,
    editInsideEducationButton,
} from "./education.js";
import * as image from "./image.js";
import * as contact from "./contactinfo.js";

let topic = document.getElementById("topic");
export const TOPIC = {
    PROJECT: "project",
    EDUCATION: "education",
    WORKEXP: "workexp",
    SKILL: "skills",
    LANGUAGE: "languages",
    INTRODUCTION: "intro",
    
};

// localStorage.clear();

export let editIntroductionButton=document.getElementById("edit-introduction-button");


editIntroductionButton.addEventListener("click", (e) => {
    changeForm("intro");
    reassignIntroductionForEdit();
});

export let completeEducationData = JSON.parse(localStorage.getItem("educationList"));
export let completeContactData = JSON.parse(localStorage.getItem("contactList"));
export let completeWorkExpData = JSON.parse(localStorage.getItem("workExpList"));
export let completeProjectData = JSON.parse(localStorage.getItem("projectList"));
export let completeSkillsData = JSON.parse(localStorage.getItem("skillList"));
export let completeLanguagesData = JSON.parse(localStorage.getItem("languageList"));
export let completeIntroData = JSON.parse(localStorage.getItem("introList"));


assignEducationValue(completeEducationData);
contact.assignContactValue(completeContactData);
assignProjectValue(completeProjectData);
console.log(completeContactData);
assignWorkExpValue(completeWorkExpData);
// assignIntroductionValue(completeIntroData);
skills.assignSkillsValue(completeSkillsData);
languages.assignLanguagesValue(completeLanguagesData);



let projectIndex = -1;
let eduIndex = -1;
let workexpIndex = -1;
let parent_Div = "";

let previewButton = document.getElementById("preview-resume");
let lastTopicValue = "None";

editInsideWorkExpButton.addEventListener("click", (e) => {
    let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
    let ID = e.target.parentNode.getAttribute("id");
    let rightID = parentDiv.getAttribute("id");
    let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
    if (ID === "edit-inside-workexp-button") {
        console.log(ID);
        console.log(parentDiv);

        changeForm("workexp");
        changeButtons(false, TOPIC.WORKEXP);
        console.log(elementID);
        for (let i = 0; i < workExpList.length; i++) {
            if (workExpList[i].id === elementID) {
                workexpIndex = i;
                console.log("Hello");
                reassignWorkExpForEdit(workExpList[i]);
                break;
            }
        }
        parent_Div = parentDiv;
    } else {
        parentDiv.remove();
        deleteWorkexp(elementID);
    }
});

addWorkExpButton.addEventListener("click", () => {
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    changeForm("workexp");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "none";
});

editWorkExpButton.addEventListener("click", () => {
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    let insideButton = document.getElementsByClassName("inside-workexp-class");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "none";
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "block";
});


editInsideProjectButton.addEventListener("click", (e) => {
    let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
    let ID = e.target.parentNode.getAttribute("id");
    let rightID = parentDiv.getAttribute("id");
    let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
    if (ID === "edit-inside-project-button") {
        console.log(ID);
        console.log(parentDiv);

        changeForm("project");
        changeButtons(false, TOPIC.PROJECT);
        console.log(elementID);
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].id === elementID) {
                projectIndex = i;
                console.log("Hello");
                reassignProjectForEdit(projectList[i]);
                break;
            }
        }
        parent_Div = parentDiv;
    } else {
        parentDiv.remove();
        deleteProject(elementID);
    }
});

addProjectButton.addEventListener("click", () => {
    
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    changeForm("project");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "none";
});

editProjectButton.addEventListener("click", () => {
   
    let makeHeadingButtonInvisible=document.getElementsByClassName("topic-button");
    let insideButton = document.getElementsByClassName(
        "inside-project-class"
    );
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "none";
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "block";
});
editInsideEducationButton.addEventListener("click",(e)=>{
    
    let parentDiv=(e.target).parentNode.parentNode.parentNode.parentNode;
    let ID=(e.target).parentNode.getAttribute("id");
    let rightID = parentDiv.getAttribute("id");
    let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
    if(ID==="edit-inside-education-button")
    {
        console.log(ID);
        console.log(parentDiv);
        
        changeForm("education");
        changeButtons(false,TOPIC.EDUCATION)
        console.log(elementID);
        for (let i = 0; i < educationList.length; i++) {
            if (educationList[i].id === elementID) {
                eduIndex = i;
                console.log("Hello");
                reassignEducationForEdit(educationList[i]);
                break;
            }
        }
        parent_Div = parentDiv;
    }
    else
    {
        parentDiv.remove();
        deleteEducation(elementID);
    }
    

})

addEducationButton.addEventListener("click", () => {
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    // changeForm("project");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "none";
    changeForm("education");
    
});

editEducationButton.addEventListener("click", () => {
   let makeHeadingButtonInvisible =
       document.getElementsByClassName("topic-button");
//    changeForm("education");
   for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
       makeHeadingButtonInvisible[i].style.display = "none";
    
    let insideButton = document.getElementsByClassName(
        "inside-education-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "block";
});


let previewButtonChanges = ({formDisplay,resumeWidth,resumeMargin,rightWidth,leftWidth,buttonDisplay}) => {
    let hideForm = document.getElementsByClassName("form");
    let previewResume = document.getElementsByClassName("layout");
    hideForm[0].style.display = formDisplay;
    previewResume[0].style.width = resumeWidth;
    previewResume[0].style.margin = resumeMargin;
    let leftSideWidth=document.getElementsByClassName("left");
    let rightSideWidth=document.getElementsByClassName("right");
    rightSideWidth[0].style.width = rightWidth
    leftSideWidth[0].style.width = leftWidth;
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = buttonDisplay;
};

previewButton.addEventListener("click", (e) => {
    console.log((e.target.value));
    if(e.target.value==="Edit")
    {
        e.target.value = "Preview";
        previewButtonChanges({
            formDisplay: "block",
            resumeWidth: "54%",
            resumeMargin: "1.5%",
            rightWidth: "60%",
            leftWidth: "40%",
            buttonDisplay:"block",
        });
    }
    else
    {
        e.target.value = "Edit";
        previewButtonChanges({
            formDisplay: "none",
            resumeWidth: "60%",
            resumeMargin: "auto",
            rightWidth: "75%",
            leftWidth: "25%",
            buttonDisplay: "none",
            // leftWidth:
        });
    }
});

// console.log(topic.value);
export function changeForm(topic){
    if(lastTopicValue!="None")
    document.getElementsByClassName(lastTopicValue + "-form")[0].classList.add("sub-form");
    document.getElementsByClassName(topic + "-form")[0].classList.remove("sub-form");
    lastTopicValue = topic;
    console.log(lastTopicValue);
};

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
    confirmProject(parent_Div,projectIndex);
    
});
confirmWorkexpButton.addEventListener("click", () => {
    confirmWorkexp(parent_Div,workexpIndex);
});

confirmEducationButton.addEventListener("click", () => {
    confirmEducation(parent_Div,eduIndex);
});
cancelProjectButton.addEventListener("click", () => {
    cancelProject();
});
cancelEducationButton.addEventListener("click", () => {
    cancelEducation();
   
});

cancelWorkexpButton.addEventListener("click", () => {
    cancelWorkexp();
    
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
        completeEducationData = completeEducationData.filter((l) => l.id != elementArrayId);
        languages.deleteLanguage(elementArrayId);
    } else if (topicName === TOPIC.SKILL) {
        skills.deleteSkill(elementArrayId);
    } else if (topicName === TOPIC.WORKEXP) {
        deleteWorkexp(elementArrayId);
    } else if (topicName === TOPIC.PROJECT) {
        deleteProject(elementArrayId)
    } else if (topicName === TOPIC.EDUCATION) {
        deleteEducation(elementArrayId);
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
                for (let i = 0; i < educationList.length; i++) {
                    if (educationList[i].id === element_id) {
                        eduIndex = i;
                        reassignEducationForEdit(
                            educationList[i]
                        );
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
        console.log(skills.skillList)
        newDiv.className = TOPIC.SKILL;
        parentDiv[0].appendChild(newDiv);
        console.log(skills.skillList.length);
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
addWorkExpDescButton.addEventListener("click", addWorkExpDesc);

// Add description blocks for project
addProjectDescButton.addEventListener("click", addProjectDesc);

// Submit Button for work experience
workExpButton.addEventListener("click", submitWorkExp);

// Submit Button for project
projectButton.addEventListener("click", submitProject);

// Submit Button for education
educationButton.addEventListener("click", submitEducation);

// Submit Button for languages
languages.languageButton.addEventListener("click", languages.submitLanguages);

// Submit Button for skills
skills.skillButton.addEventListener("click", skills.submitSkills);


buttonIntro.addEventListener("click", submitIntro);

// Submit Button for weblinks

contact.buttonLink.addEventListener("click", contact.submitContactInfo);

// Submit button for adding picture
image.submitImage.addEventListener("click", image.submitPicture);

