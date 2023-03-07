import { TOPIC } from "./index.js";
let introList = [];


let name = document.getElementById("name");
let role = document.getElementById("role");
let description = document.getElementById("desc");
export let buttonIntro = document.getElementById("submit-introduction");

function reinitializeIntro() {
    name.value = "";
    role.value = "";
    description.value = "";
}
export let reassignIntroductionForEdit = () => {
    name.value = (document.querySelector(".intro h1")).innerHTML;
    role.value = (document.querySelector(".intro h4")).innerHTML;
    description.value = (document.querySelector(".intro p")).innerHTML;
};
export let submitIntro = () => {
    let introElement = {
        name: name.value,
        role: role.value,
        description: description.value,
    };
    introList.push(introElement);
    let userName = document.querySelector(".intro h1");
    let userRole = document.querySelector(".intro h4");
    let userDescription = document.querySelector(".intro p");
    userName.innerHTML = name.value;
    userRole.innerHTML = role.value;
    userDescription.innerHTML = description.value;
    reinitializeIntro();
    document
        .getElementsByClassName(TOPIC.INTRODUCTION + "-form")[0]
        .classList.add("sub-form");
};