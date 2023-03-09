import {assignSkillsValue,deleteSkill,skillList,skillButton,submitSkills,editSkillsButton,addSkillsButton,editInsideSkillsButton, editInsideSkillsInfo, editSkillsInfo, addSkillsInfo} from "./skills.js";
import {editIntroductionInfo,editIntroductionButton,buttonIntro,submitIntro} from "./introduction.js";
import {assignLanguagesValue,deleteLanguage,languageButton,submitLanguages,editLanguagesButton,addLanguagesButton,editInsideLanguagesButton,addLanguagesInfo,editLanguagesInfo,editInsideLanguagesInfo} from "./languages.js";
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
    editInsideWorkExpInfo,
    addWorkExpInfo,
    editWorkExpInfo,
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
    editProjectInfo,
    addProjectInfo,
    editInsideProjectInfo
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
    editEducationInfo,
    addEducationInfo,
    editInsideEducationInfo
} from "./education.js";
import {submitImage,submitPicture,editImageButton,editImageInfo} from "./image.js";
import {editContactInfo,assignContactValue,buttonLink,submitContactInfo,editContactInfoButton} from "./contactinfo.js";


export const TOPIC = {
    PROJECT: "project",
    EDUCATION: "education",
    WORKEXP: "workexp",
    SKILL: "skills",
    LANGUAGE: "languages",
    INTRODUCTION: "intro",
};



export let completeEducationData = JSON.parse(
    localStorage.getItem("educationList")
);
export let completeContactData = JSON.parse(
    localStorage.getItem("contactList")
);
export let completeWorkExpData = JSON.parse(
    localStorage.getItem("workExpList")
);
export let completeProjectData = JSON.parse(
    localStorage.getItem("projectList")
);
export let completeSkillsData = JSON.parse(localStorage.getItem("skillList"));
export let completeLanguagesData = JSON.parse(
    localStorage.getItem("languageList")
);
export let completeIntroData = JSON.parse(localStorage.getItem("introList"));

assignEducationValue(completeEducationData);
assignContactValue(completeContactData);
assignProjectValue(completeProjectData);
console.log(completeContactData);
assignWorkExpValue(completeWorkExpData);
assignSkillsValue(completeSkillsData);
assignLanguagesValue(completeLanguagesData);



editContactInfoButton.addEventListener("click",(e)=>{
    editContactInfo();
})
editIntroductionButton.addEventListener("click", (e) => {
    editIntroductionInfo();
});





export let data={
    projectIndex : -1,
    eduIndex : -1,
    workexpIndex : -1,
    parent_Div : ""
}

let previewButton = document.getElementById("preview-resume");
let lastTopicValue = "None";


editImageButton.addEventListener("click", () => {
    editImageInfo();
});

addLanguagesButton.addEventListener("click", () => {
    addLanguagesInfo();
});

editLanguagesButton.addEventListener("click", () => {
    editLanguagesInfo();
});
editInsideLanguagesButton.addEventListener("click", (e) => {
    editInsideLanguagesInfo(e);
});

addSkillsButton.addEventListener("click", () => {
    addSkillsInfo();
});

editSkillsButton.addEventListener("click", () => {
    editSkillsInfo();
});

editInsideSkillsButton.addEventListener("click", (e) => {
    editInsideSkillsInfo(e)
       
});

editInsideWorkExpButton.addEventListener("click", (e) => {
    editInsideWorkExpInfo(e);
});

addWorkExpButton.addEventListener("click", () => {
    addWorkExpInfo();
});

editWorkExpButton.addEventListener("click", () => {
    editWorkExpInfo();
});


editInsideProjectButton.addEventListener("click", (e) => {
    editInsideProjectInfo(e);
});

addProjectButton.addEventListener("click", () => {
    addProjectInfo();
});

editProjectButton.addEventListener("click", () => {
    editProjectInfo();
});
editInsideEducationButton.addEventListener("click",(e)=>{
    editInsideEducationInfo(e);
})

addEducationButton.addEventListener("click", () => {
    addEducationInfo();
});

editEducationButton.addEventListener("click", () => {
    editEducationInfo();
});

export function addForm(topicName){
    document
        .getElementsByClassName(topicName + "-form")[0]
        .classList.add("sub-form");
}
export function changeForm(topic){
    if(lastTopicValue!="None")
    document.getElementsByClassName(lastTopicValue + "-form")[0].classList.add("sub-form");
    document.getElementsByClassName(topic + "-form")[0].classList.remove("sub-form");
    lastTopicValue = topic;
    console.log(lastTopicValue);
};

export function changeTopicButtons(displayType)
{ 
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = displayType;
}
export function changeInsideTopicButtons(topicName,displayType)
{
    let insideButton = document.getElementsByClassName(
        "inside-"+topicName+"-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = displayType;
}


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
    confirmProject(data.parent_Div,data.projectIndex);
    
});
confirmWorkexpButton.addEventListener("click", () => {
    confirmWorkexp(data.parent_Div,data.workexpIndex);
});

confirmEducationButton.addEventListener("click", () => {
    confirmEducation(data.parent_Div,data.eduIndex);
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
        deleteLanguage(elementArrayId);
    } else if (topicName === TOPIC.SKILL) {
        deleteSkill(elementArrayId);
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
            data.parent_Div = parent;
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
                            data.educationList[i]
                        );
                        break;
                    }
                }
            } else if (element_id2 === TOPIC.PROJECT) {
                e.preventDefault();
                reinitializeProject();
                for (let i = 0; i < projectList.length; i++) {
                    if (projectList[i].id === element_id) {
                        data.projectIndex = i;
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
                        data.workexpIndex = i;
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
        console.log(newDiv.childNodes[1]);
        for (let i = 0; i < element_data.rating; i++) {
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = "<i class='fa-solid fa-circle rating'></i>";
            newDiv.childNodes[1].appendChild(tempDiv);
        }
        for (let i = 0; i < 5 - element_data.rating; i++) {
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
            newDiv.childNodes[1].appendChild(tempDiv);
        }
        parentDiv[0].appendChild(newDiv);
    } else if (topicName === TOPIC.SKILL) {
        console.log(skillList)
        newDiv.className = TOPIC.SKILL;
        parentDiv[0].appendChild(newDiv);
        console.log(skillList.length);
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
languageButton.addEventListener("click", submitLanguages);

// Submit Button for skills
skillButton.addEventListener("click", submitSkills);


buttonIntro.addEventListener("click", submitIntro);

// Submit Button for weblinks

buttonLink.addEventListener("click", submitContactInfo);

// Submit button for adding picture
submitImage.addEventListener("click", submitPicture);

