import {
    createNewElementRight,
    TOPIC,
    createID,
    completeLanguagesData,
    addForm,
    changeTopicButtons,
    changeInsideTopicButtons
} from "./index.js";

export let languageList = [];
let languageName = document.getElementById("languages-name");
let languageRating = document.getElementById("languages-rating");
export let languageButton = document.getElementById("submit-languages");
export let editLanguagesButton = document.getElementById(
    "edit-languages-button"
);
export let addLanguagesButton = document.getElementById("add-languages-button");
export let editInsideLanguagesButton = document.getElementById(
    "languages-information"
);

export function addInsideLanguages(newDiv, parentDiv, elementData, rightID)
{
    newDiv.id = rightID;
    newDiv.className = "inside-" + topicName + "-container";
    console.log(newDiv.childNodes[1]);
    for (let i = 0; i < elementData.rating; i++) {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = "<i class='fa-solid fa-circle rating'></i>";
        newDiv.childNodes[1].appendChild(tempDiv);
    }
    for (let i = 0; i < 5 - elementData.rating; i++) {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
        newDiv.childNodes[1].appendChild(tempDiv);
    }
    parentDiv[0].appendChild(newDiv);
}

export function editLanguagesInfo()
{
    changeTopicButtons("none");
    changeInsideTopicButtons(TOPIC.LANGUAGE, "block");
}
export function addLanguagesInfo() {
    changeTopicButtons("none");
    changeForm(TOPIC.LANGUAGE);
}
export function editInsideLanguagesInfo(e) {
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

export function assignLanguagesValue(completeLanguagesData) {
    if (completeLanguagesData) {
        languageList = completeLanguagesData;
        // console.log(skillList);
        for (const element in completeLanguagesData) {
            let rightID = "right-" + completeLanguagesData[element].id;
            // let leftID = "left-" + completeLanguagesData[element].id;
            let insideHTML = getLanguagesData(
                completeLanguagesData[element].name
            );
            createNewElementRight(
                TOPIC.LANGUAGE,
                rightID,
                insideHTML,
                completeLanguagesData[element]
            );
           
        }
    }
}
function reinitializeLanguages() {
    languageName.value = "";
    languageRating.value = "";
}
export function deleteLanguage(elementArrayId) {
    languageList = completeLanguagesData;
    languageList = languageList.filter((l) => l.id != elementArrayId);
    localStorage.setItem("languageList", JSON.stringify(languageList));
}
function getLanguagesData(text) {
    return `<h4>${text}</h4><div class='place-circles'></div>`;
}

export let submitLanguages = () => {
    const topic = TOPIC.LANGUAGE;
    let ID = createID(topic);
    // let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let languageElement = {
        name: languageName.value,
        rating: languageRating.value,
        id: ID,
    };
    languageList.push(languageElement);
    localStorage.setItem("languageList", JSON.stringify(languageList));
    let insideHTML = getLanguagesData(languageName.value);
    createNewElementRight(topic, rightID, insideHTML, languageElement);
    reinitializeLanguages();
    addForm("languages");
    // let insideButton = document.getElementsByClassName("inside-languages-class");
    // for (let i = 0; i < insideButton.length; i++)
    //     insideButton[i].style.display = "none";
    changeTopicButtons("block");
};
