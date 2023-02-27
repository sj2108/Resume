import * as index from "./index.js";

export let projectList = [];
export let addProjectDescButton = document.getElementById("add-project-desc");
let projectName = document.getElementById("project-name");
let dateFromProject = document.getElementById("date-from-project");
let dateToProject = document.getElementById("date-to-project");
let descrProject = document.getElementsByClassName("project-desc");
export let projectButton = document.getElementById("submit-project");

export function deleteProject(elementArrayId){
projectList = projectList.filter(
    (l) => l.id != elementArrayId
)
console.log(projectList);
};
export function confirmProject(parent_Div,projectIndex)
{
    projectList.splice(projectIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = index.getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitProject();
    index.changeButtons(true, index.TOPIC.PROJECT);

}
export function cancelProject()
{
    index.changeButtons(true, index.TOPIC.PROJECT);
    reinitializeProject();
}
export function reinitializeProject() {
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

function getProjectData(project_element, dates) {
    return `<h4 class="project">${project_element.name}</h4>
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
        index.addDescription(
            projectArray.description[j],
            index.TOPIC.PROJECT,
            parentDiv[0]
        );
    }
};


export let submitProject = () => {
    const topic = index.TOPIC.PROJECT;
    let ID = index.createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let projectElement = {
        name: projectName.value,
        dateFrom: dateFromProject.value,
        dateTo: dateToProject.value,
        description: [],
        id: ID,
    };
    let dates = index.setDate(dateFromProject.value, dateToProject.value);
    for (var i = 0; i < descrProject.length; i++) {
        projectElement.description.push(descrProject[i].value);
    }
    let insideHTML = getProjectData(projectElement, dates);
    index.createNewElementRight(topic, rightID, insideHTML, projectElement);
    index.createNewElementLeft(topic, leftID, projectElement.name, 1);
    projectList.push(projectElement);
    console.log(projectList);
    reinitializeProject();
};