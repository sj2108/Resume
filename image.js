import * as index from "./index.js";

export let submitImage = document.getElementById("submit-image");
let profileImage = document.getElementsByTagName("img")[0];
let newProfileImage = document.getElementById("profile-image");

export let submitPicture = (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
        profileImage.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(newProfileImage.files[0]);
};
