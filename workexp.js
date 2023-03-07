import {createNewElementRight,setDate,TOPIC,createID,addDescription} from "./index.js";

export let workExpList = [];
export let addWorkExpDescButton = document.getElementById("add-desc");
let roleName = document.getElementById("role-name");
let companyName = document.getElementById("company-name");
let workLocation = document.getElementById("work-location");
let dateFrom = document.getElementById("date-from");
let dateTo = document.getElementById("date-to");
let descr = document.getElementsByClassName("workexp-desc");
export let workExpButton = document.getElementById("submit-workexp");
export let cancelWorkexpButton = document.getElementById("cancel-workexp");
export let confirmWorkexpButton = document.getElementById("confirm-workexp");
export let editWorkExpButton = document.getElementById("edit-workexp-button");
export let addWorkExpButton = document.getElementById("add-workexp-button");
export let editInsideWorkExpButton = document.getElementById(
    "workexp-information"
);


export function assignWorkExpValue(completeWorkExpData) {
    if (completeWorkExpData) {
        workExpList = completeWorkExpData;
        for (const element in completeWorkExpData) {
            console.log(completeWorkExpData.dateFrom);
            let dates = setDate(
                completeWorkExpData[element].dateFrom,
                completeWorkExpData[element].dateTo
            );
            let insideHTML = getWorkexpData(
                completeWorkExpData[element],
                dates
            );
            let rightID = "right-" + completeWorkExpData[element].id;
            let leftID = "left-" + completeWorkExpData[element].id;
            createNewElementRight(
                TOPIC.WORKEXP,
                rightID,
                insideHTML,
                completeWorkExpData[element]
            );
            
        }
    }
}

export function confirmWorkexp(parent_Div,workexpIndex)
{
    workExpList.splice(workexpIndex, 1);
    localStorage.setItem("workExpList", JSON.stringify(workExpList));
    parent_Div.remove();
    submitWorkExp();
    document
        .getElementsByClassName(TOPIC.PROJECT + "-form")[0]
        .classList.add("sub-form");
    let insideButton = document.getElementsByClassName("inside-workexp-class");
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
}
export function deleteWorkexp(elementArrayId)
{
    
    workExpList = workExpList.filter((l) => l.id != elementArrayId);
    localStorage.setItem("workExpList", JSON.stringify(workExpList));
    let insideButton = document.getElementsByClassName("inside-workexp-class");
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
    console.log(workExpList);
}
export function cancelWorkexp()
{
    reinitializeWorkexp();
     document
         .getElementsByClassName(TOPIC.WORKEXP + "-form")[0]
         .classList.add("sub-form");
    let insideButton = document.getElementsByClassName("inside-workexp-class");
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
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
        addDescription(
            workExpArray.description[j],
            TOPIC.WORKEXP,
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
                <div class="change-inside-workexp">
                <h4>${workExp_element.role}</h4>
                <div class="edit-icons">
                <div class="inside-workexp-class" id="edit-inside-workexp-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
                <div class="inside-workexp-class" id="remove-inside-workexp-button"><i class="fa-solid fa-trash edit-image"></i></div>
                </div>
                </div>
                <h4 id="company-name">${workExp_element.company}</h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">${workExp_element.location}</div>
                </div>
            `;
}

export let submitWorkExp = () => {
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
    workExpList.push(workExpElement);
    localStorage.setItem("workExpList", JSON.stringify(workExpList));
    console.log(workExpList);
    reinitializeWorkexp();
    document
        .getElementsByClassName(TOPIC.WORKEXP + "-form")[0]
        .classList.add("sub-form");
    let insideButton = document.getElementsByClassName(
        "inside-workexp-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
};