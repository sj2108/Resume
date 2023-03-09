import {
    createNewElementRight,
    setDate,
    TOPIC,
    createID,
    addDescription,
    addForm,
    changeInsideTopicButtons,
    changeTopicButtons,
    data,
    changeForm,
    changeButtons,
} from "./index.js";

export let projectList = [];
export let addProjectDescButton = document.getElementById("add-project-desc");
let projectName = document.getElementById("project-name");
let dateFromProject = document.getElementById("date-from-project");
let dateToProject = document.getElementById("date-to-project");
let descrProject = document.getElementsByClassName("project-desc");
export let projectButton = document.getElementById("submit-project");
export let cancelProjectButton = document.getElementById("cancel-project");
export let confirmProjectButton = document.getElementById("confirm-project");
export let editProjectButton = document.getElementById("edit-project-button");
export let addProjectButton = document.getElementById("add-project-button");
export let editInsideProjectButton = document.getElementById(
    "project-information"
);


export function editProjectInfo() {
    changeTopicButtons("none");
    changeInsideTopicButtons(TOPIC.PROJECT, "block");
}
export function addProjectInfo() {
    changeTopicButtons("none");
    changeForm(TOPIC.PROJECT);
}
export function editInsideProjectInfo(e) {
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
                data.projectIndex = i;
                console.log("Hello");
                reassignProjectForEdit(projectList[i]);
                break;
            }
        }
        data.parent_Div = parentDiv;
    } else {
        parentDiv.remove();
        deleteProject(elementID);
    }
}

export function assignProjectValue(completeProjectData) {
    if (completeProjectData) {
        projectList = completeProjectData;
        for (const element in completeProjectData) {
            // console.log(completeProjectData.dateFrom);
            let dates = setDate(
                completeProjectData[element].dateFrom,
                completeProjectData[element].dateTo
            );
            let insideHTML = getProjectData(
                completeProjectData[element],
                dates
            );
            let rightID = "right-" + completeProjectData[element].id;
            // let leftID = "left-" + completeProjectData[element].id;
            createNewElementRight(
                TOPIC.PROJECT,
                rightID,
                insideHTML,
                completeProjectData[element]
            );
        }
    }
}

export function deleteProject(elementArrayId) {
    projectList = projectList.filter((l) => l.id != elementArrayId);
    localStorage.setItem("projectList", JSON.stringify(projectList));
    let insideButton = document.getElementsByClassName("inside-project-class");
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
    console.log(projectList);
}
export function confirmProject(parent_Div, projectIndex) {
    projectList.splice(projectIndex, 1);
    localStorage.setItem("projectList", JSON.stringify(projectList));
    parent_Div.remove();
    submitProject();
}

export function cancelProject() {
    // changeButtons(true, TOPIC.PROJECT);
    addForm(TOPIC.PROJECT);
    changeInsideTopicButtons(TOPIC.PROJECT,"none");
    changeTopicButtons("block")
    reinitializeProject();
}
export function reinitializeProject() {
    projectName.value = "";
    dateFromProject.value = "";
    dateToProject.value = "";
    descrProject[0].value = "";
   
    for (let i = 1; i < descrProject.length; )
    {
        descrProject[i].remove();
    }
}

function getProjectData(project_element, dates) {
    return `
    
    
    <div class="change-inside-project">
    <h4 class="project">${project_element.name}</h4>
    <div class="edit-icons">
    <div class="inside-project-class" id="edit-inside-project-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
    <div class="inside-project-class" id="remove-inside-project-button"><i class="fa-solid fa-trash edit-image"></i></div>
    </div>
    </div>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]} </div>

                </div>`;
}

export let addProjectDesc = () => {
    let parentDiv = document.getElementsByClassName("complete-project-desc");
    let newDesc = document.createElement("textarea");
    console.log(newDesc);
    newDesc.classList.add("project-desc");
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv[0].appendChild(newDesc);
};

export let reassignProjectForEdit = (projectArray) => {
    projectName.value = projectArray.name;
    dateFromProject.value = projectArray.dateFrom;
    dateToProject.value = projectArray.dateTo;
    let firstDesc = document.getElementsByClassName("project-desc");
    firstDesc[0].value = projectArray.description[0];
    for (let j = 1; j < projectArray.description.length; j++) {
        let parentDiv = document.getElementsByClassName(
            "complete-project-desc"
        );
        console.log(parentDiv[0]);
        addDescription(
            projectArray.description[j],
            TOPIC.PROJECT,
            parentDiv[0]
        );
    }
};

export let submitProject = () => {
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
    projectList.push(projectElement);
    localStorage.setItem("projectList", JSON.stringify(projectList));
    console.log(projectList);
    reinitializeProject();
    addForm(topic);
    changeInsideTopicButtons(topic, "none");
    changeTopicButtons("block");
};
