import {addForm,changeTopicButtons,changeForm} from "./index.js";

export let submitImage = document.getElementById("submit-image");
let profileImage = document.getElementsByTagName("img")[0];
let newProfileImage = document.getElementById("profile-image");
export let editImageButton = document.getElementById("edit-image-button");

export function editImageInfo() {
    changeForm("image");
    changeTopicButtons("none")
}

export let submitPicture = (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
        profileImage.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(newProfileImage.files[0]);
    addForm("image");
    changeTopicButtons("block");
};
