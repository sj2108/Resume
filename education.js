import * as index from "./index.js";

export let educationList=[];
let degreeName = document.getElementById("degree-name");
let specializationEdu = document.getElementById("specialization");
let collegeName = document.getElementById("college-name");
let dateFromEdu = document.getElementById("date-from-edu");
let dateToEdu = document.getElementById("date-to-edu");
let courseCgpa = document.getElementById("cgpa");
export let educationButton = document.getElementById("submit-education");

export function confirmEducation(parent_Div, eduIndex)
{
    educationList.splice(eduIndex, 1);
    let elementId = parent_Div.getAttribute("id");
    parent_Div.remove();
    let elementIdRight = index.getElementIDRight(elementId);
    let elementRemove = document.getElementById(elementIdRight);
    elementRemove.remove();
    submitEducation();
    index.changeButtons(true, index.TOPIC.EDUCATION);
}
export function cancelEducation()
{
    index.changeButtons(true,index.TOPIC.EDUCATION);
    reinitializeEducation();
}
export function deleteEducation(elementArrayId){
educationList = educationList.filter((l) => l.id != elementArrayId);
console.log(educationList);
}

export let reassignEducationForEdit = (educationArray) => {
    degreeName.value = educationArray.degree;
    specializationEdu.value = educationArray.specialization;
    collegeName.value = educationArray.college;
    dateFromEdu.value = educationArray.dateFrom;
    dateToEdu.value = educationArray.dateTo;
    courseCgpa.value = educationArray.cgpa;
};
// Reset Education form
export function reinitializeEducation() {
    degreeName.value = "";
    specializationEdu.value = "";
    collegeName.value = "";
    dateFromEdu.value = "";
    dateToEdu.value = "";
    courseCgpa.value = "";
}

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


export let submitEducation = () => {
    const topic = index.TOPIC.EDUCATION;
    let ID = index.createID(topic);
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

    let dates = index.setDate(dateFromEdu.value, dateToEdu.value);
    let insideHTML = getEducationData(educationElement, dates);
    index.createNewElementRight(topic, rightID, insideHTML, educationElement);
    index.createNewElementLeft(topic, leftID, educationElement.degree);
    educationList.push(educationElement);
    // localStorage.setItem("educationList", JSON.stringify(educationElement));
    console.log(educationList);
    reinitializeEducation();
};