import {
    createNewElementRight,
    TOPIC,
    createID,
    completeSkillsData,
    addForm,
    changeInsideTopicButtons,
    changeTopicButtons
} from "./index.js";
export let skillList = [];
let skillName = document.getElementById("skill-name");
let skillPercentage = document.getElementById("skill-percentage");
export let skillButton = document.getElementById("submit-skills");
export let editSkillsButton = document.getElementById("edit-skills-button");
export let addSkillsButton = document.getElementById("add-skills-button");
export let editInsideSkillsButton =
    document.getElementById("skills-information");


export function editSkillsInfo() {
    changeTopicButtons("none");
    changeInsideTopicButtons(TOPIC.SKILL,"block");
}
export function addSkillsInfo() {
    changeTopicButtons("none");
    changeForm(TOPIC.SKILL);
}
export function editInsideSkillsInfo(e) {
    let parentDiv = e.target.parentNode.parentNode.parentNode;
    let insideParent = parentDiv.firstElementChild;
    parentDiv = parentDiv.parentNode;
    console.log(parentDiv);
    let ID = e.target.parentNode.getAttribute("id");
    if (ID === "remove-inside-skills-button") {
        let rightID = insideParent.getAttribute("id");
        let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
        parentDiv.remove();
        deleteSkill(elementID);
    }
}

export function assignSkillsValue(completeSkillsData) {
    if (completeSkillsData) {
        skillList = completeSkillsData;
        console.log(skillList);
        for (const element in completeSkillsData) {
            // console.log(completeSkillsData.dateFrom);

            let rightID = "right-" + completeSkillsData[element].id;
            // let leftID = "left-" + completeSkillsData[element].id;
            let insideHTML = getSkillsData(
                rightID,
                completeSkillsData[element].skill,
                completeSkillsData[element].percentage
            );
            createNewElementRight(
                TOPIC.SKILL,
                rightID,
                insideHTML,
                completeSkillsData[element]
            );
           
        }
    }
}

// Reset Skills form
function reinitializeSkills() {
    skillName.value = "";
    skillPercentage.value = "";
}
function getSkillsData(rightID, text, percentage) {
    return `
    
    
    <div class="change-inside-skills">
    <div class='border-element' id= 
            ${rightID} 
            ><div style="width:${percentage}%;"class='inside-skills-container'><h4>
            ${text} 
            </h4> </div></div>
            <div class="edit-icons">
            <div class="inside-skills-class" id="remove-inside-skills-button"><i class="fa-solid fa-trash edit-image"></i></div>
            </div>
    </div>
            `;
}

export function deleteSkill(elementArrayId) {
    skillList = completeSkillsData;
    skillList = skillList.filter((l) => l.id != elementArrayId);
    localStorage.setItem("skillList", JSON.stringify(skillList));

    console.log(skillList);
}

export const submitSkills = () => {
    const topic = "skills";
    let ID = createID(topic);
    // let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let skill_element = {
        skill: skillName.value,
        percentage: skillPercentage.value,
        id: ID,
    };
    skillList.push(skill_element);
    localStorage.setItem("skillList", JSON.stringify(skillList));
    let insideHTML = getSkillsData(
        rightID,
        skill_element.skill,
        skill_element.percentage
    );
    createNewElementRight(topic, rightID, insideHTML, skill_element);
    reinitializeSkills();
    addForm(topic);
    changeInsideTopicButtons(topic,"none");
    changeTopicButtons("block");
};
