import * as index from "./index.js";


export let languageList = [];
let languageName = document.getElementById("languages-name");
let languageRating = document.getElementById("languages-rating");
export let languageButton = document.getElementById("submit-languages");

export function assignLanguagesValue(completeLanguagesData) {
    if (completeLanguagesData) {
        languageList = completeLanguagesData;
        // console.log(skillList);
        for (const element in completeLanguagesData) {
            // console.log(completeSkillsData.dateFrom);

            let rightID = "right-" + completeLanguagesData[element].id;
            let leftID = "left-" + completeLanguagesData[element].id;
            let insideHTML = getLanguagesData(
                completeLanguagesData[element].name
            );
            index.createNewElementRight(
                index.TOPIC.LANGUAGE,
                rightID,
                insideHTML,
                completeLanguagesData[element]
            );
            index.createNewElementLeft(
                index.TOPIC.LANGUAGE,
                leftID,
                completeLanguagesData[element].name
            );
        }
    }
}
function reinitializeLanguages() {
    languageName.value = "";
    languageRating.value = "";
}
export function deleteLanguage(elementArrayId){
languageList=index.completeLanguagesData;
languageList = languageList.filter(
    (l) => l.id != elementArrayId
)
localStorage.setItem("languageList", JSON.stringify(languageList));
};
function getLanguagesData(text) {
    return "<h4>" + text + "</h4><div class='place-circles'></div>";
}


export let submitLanguages = () => {
    const topic = index.TOPIC.LANGUAGE;
    let ID = index.createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let languageElement = {
        name: languageName.value,
        rating: languageRating.value,
        id: ID,
    };
    languageList.push(languageElement);
    localStorage.setItem("languageList", JSON.stringify(languageList));
    let insideHTML = getLanguagesData(languageName.value);
    index.createNewElementRight(topic, rightID, insideHTML, languageElement);
    index.createNewElementLeft(topic, leftID, languageElement.name);
    reinitializeLanguages();
};