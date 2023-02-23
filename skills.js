let skillList = [];
let skillName = document.getElementById("skill-name");
let skillPercentage = document.getElementById("skill-percentage");
let buttonSkills = document.getElementById("submit-skills");

// Reset Skills form
export function reinitializeSkills() {
    skillName.value = "";
    skillPercentage.value = "";
}

export const submitSkills = () => {
    const topic = "skills";
    let idi = createID(topic);
    let leftID = "left-" + idi;
    let rightID = "right-" + idi;
    let skill_element = {
        skill: skillName.value,
        percentage: skillPercentage.value,
        id: idi,
    };
    skillList.push(skill_element);
    let insideHTML = insideSkills(rightID, skill_element.skill);
    createNewElementRight(topic, rightID, insideHTML, skill_element, 3);
    createNewElementLeft(topic, leftID, skill_element.skill, 0);
    reinitializeSkills();
};
