import * as index from "./index.js";


export let languageList = [];
let languageName = document.getElementById("languages-name");
let languageRating = document.getElementById("languages-rating");
export let languageButton = document.getElementById("submit-languages");

function reinitializeLanguages() {
    languageName.value = "";
    languageRating.value = "";
}
export function deleteLanguage(elementArrayId){
languageList = languageList.filter(
    (l) => l.id != elementArrayId
)};
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
    let insideHTML = getLanguagesData(languageName.value);
    index.createNewElementRight(topic, rightID, insideHTML, languageElement);
    index.createNewElementLeft(topic, leftID, languageElement.name, 0);
    reinitializeLanguages();
};