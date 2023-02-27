import * as index from "./index.js";

export let workExpList = [];
export let addWorkExpDescButton = document.getElementById("add-desc");
let roleName = document.getElementById("role-name");
let companyName = document.getElementById("company-name");
let workLocation = document.getElementById("work-location");
let dateFrom = document.getElementById("date-from");
let dateTo = document.getElementById("date-to");
let descr = document.getElementsByClassName("workexp-desc");
export let workExpButton = document.getElementById("submit-workexp");

export function confirmWorkexp(parent_Div,workexpIndex)
{
    workExpList.splice(workexpIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = index.getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitWorkExp();
    index.changeButtons(true, index.TOPIC.WORKEXP);
}
export function deleteWorkexp(elementArrayId)
{
    workExpList = workExpList.filter((l) => l.id != elementArrayId);
    console.log(workExpList);
}
export function cancelWorkexp()
{
    index.changeButtons(true, index.TOPIC.WORKEXP);
    reinitializeWorkexp();
}

export let reassignWorkExpForEdit = (workExpArray) => {
    roleName.value = workExpArray.role;
    companyName.value = workExpArray.company;
    workLocation.value = workExpArray.location;
    dateFrom.value = workExpArray.dateFrom;
    dateTo.value = workExpArray.dateTo;
    let first_desc = document.getElementsByClassName("workexp-desc");
    first_desc[0].value = workExpArray.description[0];
    for (let j = 1; j < workExpArray.description.length; j++) {
        let parentDiv = document.getElementsByClassName("complete-desc");
        console.log(parentDiv[0]);
        index.addDescription(
            workExpArray.description[j],
            index.TOPIC.WORKEXP,
            parentDiv[0]
        );
    }
};

export function reinitializeWorkexp() {
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

export let addWorkExpDesc = () => {
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

export let submitWorkExp = () => {
    const topic = index.TOPIC.WORKEXP;
    let ID = index.createID(topic);
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
    let dates = index.setDate(dateFrom.value, dateTo.value);
    for (var i = 0; i < descr.length; i++) {
        workExpElement.description.push(descr[i].value);
    }
    let insideHTML = getWorkexpData(workExpElement, dates);
    index.createNewElementRight(topic, rightID, insideHTML, workExpElement);
    index.createNewElementLeft(topic, leftID, companyName.value, 1);
    workExpList.push(workExpElement);
    console.log(workExpList);
    reinitializeWorkexp();
};