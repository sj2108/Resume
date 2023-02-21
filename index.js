let topic = document.getElementById("topic");

let educationList = [];
let degreeName = document.getElementById("degree-name");
let specializationEdu = document.getElementById("specialization");
let collegeName = document.getElementById("college-name");
let dateFromEdu = document.getElementById("date-from-edu");
let dateToEdu = document.getElementById("date-to-edu");
let courseCgpa = document.getElementById("cgpa");
let educationButton = document.getElementById("submit-education");


let projectList = [];
let addProjectDescButton = document.getElementById("add-project-desc");
let projectName = document.getElementById("project-name");
let dateFromProject = document.getElementById("date-from-project");
let dateToProject = document.getElementById("date-to-project");
let descrProject = document.getElementsByClassName("project-desc");
let projectButton = document.getElementById("submit-project");


let workExpList = [];
let addDescButton = document.getElementById("add-desc");
let roleName = document.getElementById("role-name");
let companyName = document.getElementById("company-name");
let workLocation = document.getElementById("work-location");
let dateFrom = document.getElementById("date-from");
let dateTo = document.getElementById("date-to");
let descr = document.getElementsByClassName("workexp-desc");
let workExpButton = document.getElementById("submit-workexp");


let skillList = [];
let skillName = document.getElementById("skill-name");
let skillPercentage = document.getElementById("skill-percentage");
let buttonSkills = document.getElementById("submit-skills");


let languageList = [];
let languageName = document.getElementById("languages-name");
let languageRating = document.getElementById("languages-rating");
let buttonLanguage = document.getElementById("submit-languages");


let cancelProjectButton = document.getElementById("cancel-project");
let confirmProjectButton = document.getElementById("confirm-project");
let submitProjectButton = document.getElementById("submit-project");
let cancelWorkexpButton = document.getElementById("cancel-workexp");
let confirmWorkexpButton = document.getElementById("confirm-workexp");
let submitWorkexpButton = document.getElementById("submit-workexp");
let cancelEducationButton = document.getElementById("cancel-education");
let confirmEducationButton = document.getElementById("confirm-education");
let submitEducationButton = document.getElementById("submit-education");
let projectIndex = -1;
let eduIndex = -1;
let workexpIndex = -1;
let parent_Div = "";


let name = document.getElementById("name");
let role = document.getElementById("role");
let description = document.getElementById("desc");
let buttonIntro = document.getElementById("submit-intro");


let linkedinLink = document.getElementById("linkedin");
let mailLink = document.getElementById("mail");
let phoneLink = document.getElementById("phone");
let placeLink = document.getElementById("place");
let twitterLink = document.getElementById("twitter");
let nameLink = document.getElementById("nameHeading");
let buttonLink = document.getElementById("submit-contact-info");

let previewButton = document.getElementById("preview-resume");
let goBackButton = document.getElementsByClassName("back-to-form");
previewButton.addEventListener("click", () => {
    goBackButton[0].style.display = "block";
    previewButton.style.display = "none";
    let hideForm = document.getElementsByClassName("form");
    let previewResume = document.getElementsByClassName("layout");
    hideForm[0].style.display = "none";
    previewResume[0].style.width = "65%";
    previewResume[0].style.margin = "auto";
});
goBackButton[0].addEventListener("click", () => {
    goBackButton[0].style.display = "none";
    previewButton.style.display = "block";
    let hideForm = document.getElementsByClassName("form");
    let previewResume = document.getElementsByClassName("layout");
    hideForm[0].style.display = "block";
    previewResume[0].style.width = "48%";
    previewResume[0].style.margin = "20px";
});

let lastTopicValue = "None";
// console.log(topic.value);
topic.addEventListener("change", () => {
    if (lastTopicValue != "None")
        document
            .getElementsByClassName(lastTopicValue + "-form")[0]
            .classList.add("sub-form");
    document
        .getElementsByClassName(topic.value + "-form")[0]
        .classList.remove("sub-form");
    lastTopicValue = topic.value;
});







function changeButtons(flag,topic)
{
    let confirmButton = document.getElementById("confirm-"+topic);
    let cancelButton = document.getElementById("cancel-"+topic);
    let submitButton = document.getElementById("submit-"+topic);
    if(flag==1){
        cancelButton.style.display = "none";
        confirmButton.style.display = "none";
        submitButton.style.display = "block";
    }
    else{
        cancelButton.style.display = "block";
        confirmButton.style.display = "block";
        submitButton.style.display = "none";

    }
}
function getElementIDRight(element_id) {
    let element_id1 = element_id.split("-")[1];
    let element_id2 = element_id.split("-")[2];
    return "right-" + element_id1 + "-" + element_id2;
}
confirmProjectButton.addEventListener("click", () => {
    projectList.splice(projectIndex, 1);
    let element_id = parent_Div.getAttribute("id");
    parent_Div.remove();
    let element_id_right = getElementIDRight(element_id);
    let element_remove = document.getElementById(element_id_right);
    element_remove.remove();
    submitProject();
    changeButtons(1,"project");
});
confirmWorkexpButton.addEventListener("click", () => {
    workExpList.splice(projectIndex, 1);
    let element_id = parent_Div.getAttribute("id");
    parent_Div.remove();
    let element_id_right = getElementIDRight(element_id);
    let element_remove = document.getElementById(element_id_right);
    element_remove.remove();
    submitWorkExp();
    changeButtons(1, "workexp");
});

confirmEducationButton.addEventListener("click", () => {
    educationList.splice(eduIndex, 1);
    let element_id = parent_Div.getAttribute("id");
    parent_Div.remove();
    let element_id_right = getElementIDRight(element_id);
    let element_remove = document.getElementById(element_id_right);
    element_remove.remove();
    submitEducation();
    changeButtons(1, "education");
});
cancelProjectButton.addEventListener("click", () => {
    changeButtons(1, "project");
    reinitializeProject();
});
cancelEducationButton.addEventListener("click", () => {
    changeButtons(1, "education");
    reinitializeEducation();
});

cancelWorkexpButton.addEventListener("click", () => {
    changeButtons(1, "workexp");
    reinitializeWorkexp();
});

// let removeLanguage=document.getElementById("remove-skills");
let parentDiv = document.getElementsByClassName("form");
parentDiv[0].addEventListener("click", (e) => {
    //  e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        if (e.target.textContent === "Edit") {
            // console.log(e);
            e.preventDefault();
            let parent = e.target.parentNode.parentNode;
            parent_Div=parent;
            let element_id = parent.getAttribute("id");
            let element_id1 = element_id.split("-")[1];
            let element_id2 = element_id.split("-")[2];
            element_id = element_id1 + "-" + element_id2;
            console.log(element_id2);
            // let cancelButton = document.getElementById("cancel-" + element_id2);
            // let confirmButton = document.getElementById(
            //     "confirm-" + element_id2
            // );
            changeButtons(0, element_id2);

            if (element_id2 === "education") {
                e.preventDefault();
                // let eduIndex = -1;
                for (let i = 0; i < educationList.length; i++) {
                    // degree: degreeName.value,specialization:specializationEdu.value,college:collegeName.value,From:dateFromEdu.value,dateTo:dateToEdu.value,cgpa:courseCgpa.value,id:idi
                    if (educationList[i].id === element_id) {
                        degreeName.value = educationList[i].degree;
                        specializationEdu.value =
                        educationList[i].specialization;
                        collegeName.value = educationList[i].college;
                        dateFromEdu.value = educationList[i].dateFrom;
                        dateToEdu.value = educationList[i].dateTo;
                        courseCgpa.value = educationList[i].cgpa;
                        eduIndex = i;

                        break;
                    }
                }
                
            } else if (element_id2 === "project") {
                e.preventDefault();
                reinitializeProject();
                for (let i = 0; i < projectList.length; i++) {
                    if (projectList[i].id === element_id) {
                        projectIndex = i;
                        projectName.value = projectList[i].name;
                        dateFromProject.value = projectList[i].dateFrom;
                        dateToProject.value = projectList[i].dateTo;
                        // courseCgpa.value=educationList[i].cgpa;

                        let first_desc =
                            document.getElementsByClassName("project-desc");
                        // console.log(projectList[i][description[0]]);
                        first_desc[0].value = projectList[i].description[0];
                        // console.log(first_desc[0]);
                        // first_desc[0].innerHTML.textContent=projectList[i].description[0];
                        for (let j = 1;j < projectList[i].description.length;j++) {
                            let parentDiv = document.getElementsByClassName(
                                "complete-project-desc"
                            );
                            console.log(parentDiv[0]);
                            let newDesc = document.createElement("textarea");
                            newDesc.value = projectList[i].description[j];
                            console.log(newDesc);
                            newDesc.classList.add("project-desc");
                            // newDesc.name="description";
                            newDesc.rows = "3";
                            newDesc.cols = "40";
                            console.log(newDesc);
                            parentDiv[0].appendChild(newDesc);
                        }

                        console.log(projectList);
                        // let project_element={name: projectName.value,dateFrom:dateFromProject.value,dateTo:dateToProject.value,description:[],id:idi};
                        break;
                    }
                }
                
                
            } else if (element_id2 === "workexp") {
                e.preventDefault();
                let first_desc =
                    document.getElementsByClassName("workexp-desc");
                reinitializeWorkexp();
                // let workexpIndex = -1;
                for (let i = 0; i < workExpList.length; i++) {
                    if (workExpList[i].id === element_id) {
                        workexpIndex = i;
                        roleName.value = workExpList[i].role;
                        companyName.value = workExpList[i].company;
                        workLocation.value = workExpList[i].location;
                        dateFrom.value = workExpList[i].dateFrom;
                        dateTo.value = workExpList[i].dateTo;
                        // courseCgpa.value=educationList[i].cgpa;

                        let first_desc =
                            document.getElementsByClassName("workexp-desc");
                        // console.log(projectList[i][description[0]]);
                        first_desc[0].value = workExpList[i].description[0];
                        // console.log(first_desc[0]);
                        // first_desc[0].innerHTML.textContent=projectList[i].description[0];
                        for (
                            let j = 1;
                            j < workExpList[i].description.length;
                            j++
                        ) {
                            let parentDiv =
                                document.getElementsByClassName(
                                    "complete-desc"
                                );
                            console.log(parentDiv[0]);
                            let newDesc = document.createElement("textarea");
                            newDesc.value = workExpList[i].description[j];
                            console.log(newDesc);
                            newDesc.classList.add("workexp-desc");
                            // newDesc.name="description";
                            newDesc.rows = "3";
                            newDesc.cols = "40";
                            console.log(newDesc);
                            parentDiv[0].appendChild(newDesc);
                        }

                        console.log(workExpList);
                        // let project_element={name: projectName.value,dateFrom:dateFromProject.value,dateTo:dateToProject.value,description:[],id:idi};
                        break;
                    }
                }
                
            }
            
        } else if (e.target.textContent === "X") {
            console.log(e.target.textContent);
            let parent = e.target.parentNode.parentNode;
            // console.log(parent);
            element_id = parent.getAttribute("id");
            element_id1 = element_id.split("-")[1];
            element_id2 = element_id.split("-")[2];

            console.log(element_id);
            element_id = "right-" + element_id1 + "-" + element_id2;
            elementArrayId = element_id1 + "-" + element_id2;

            parent.remove();

            let element_remove = document.getElementById(element_id);
            console.log(element_id);
            // console.log(element_remove);

            element_remove.remove();
            if (element_id2 === "languages") {
                languageList = languageList.filter(
                    (l) => l.id != elementArrayId
                );
                console.log(languageList);
            } else if (element_id2 === "skills") {
                skillList = skillList.filter((l) => l.id != elementArrayId);
                console.log(skillList);
            } else if (element_id2 === "workexp") {
                workExpList = workExpList.filter((l) => l.id != elementArrayId);
                console.log(workExpList);
            } else if (element_id2 === "project") {
                projectList = projectList.filter((l) => l.id != elementArrayId);
                console.log(projectList);
            } else if (element_id2 === "education") {
                educationList = educationList.filter(
                    (l) => l.id != elementArrayId
                );
                console.log(educationList);
            }
        }
    }
});


let submitImage = document.getElementById("submit-image");
let profileImage = document.getElementsByTagName("img")[0];
let newProfileImage = document.getElementById("profile-image");
submitImage.addEventListener("click", (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
        profileImage.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(newProfileImage.files[0]);
});



function createNewElementRight( topicName,rightID,insideHTML,element_data,flag = 0) {
    let parentDiv = document.getElementsByClassName(topicName + "-container");
    let newDiv = document.createElement("div");
    
    // console.log(roleName);

    newDiv.innerHTML = insideHTML;
    if (flag===1)  /// work experience and projects
    {
        newDiv.id = rightID;
        let newChildDiv = document.createElement("div");
        let ul = document.createElement("ul");
        ul.classList.add = "space-bottom";
        for (let i = 0; i < element_data.description.length; i++) {
            let li = document.createElement("li");
            li.textContent = element_data.description[i];
            ul.appendChild(li);
        }
        newChildDiv.appendChild(ul);
        newDiv.appendChild(newChildDiv);
        parentDiv[0].appendChild(newDiv);
    }
    else if(flag===2) // languages
    {
        newDiv.id = rightID;
        newDiv.className = "inside-"+topicName+"-container";
        parentDiv[0].appendChild(newDiv);
        let insideNewDiv = document.getElementsByClassName("place-circles");
        for (let i = 0; i < element_data.rating; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<i class='fa-solid fa-circle rating'></i>";
            insideNewDiv[languageList.length - 1].appendChild(newDiv);
        }
        for (let i = 0; i < 5 - element_data.rating; i++) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
            insideNewDiv[languageList.length - 1].appendChild(newDiv);
        }
    }
    else if(flag===3)
    {
        newDiv.className = "skills";
        parentDiv[0].appendChild(newDiv);
        let insideNewDiv = document.querySelectorAll(".inside-skills-container");
        insideNewDiv[skillList.length - 1].style.width =  "" + element_data.percentage + "%";
    }
    else
    {
        newDiv.id = rightID;
        parentDiv[0].appendChild(newDiv);
    }
    
}
function insideSkills(rightID,text) {
    return `<div class='border-element' id= 
            ${rightID} 
            ><div class='inside-skills-container'><h4>
            ${text} 
            </h4> </div></div>`;
}
function insideLanguages(text)
{
    return "<h4>" + text + "</h4><div class='place-circles'></div>";   
}



function createNewElementLeft(topicName, leftID, value,flag=1) {
    let parent_Div = document.querySelector("." + topicName + "-" + "form");
    let nextDiv = document.createElement("div");
    nextDiv.class = "subform";
    nextDiv.id = leftID;
    parent_Div.appendChild(nextDiv);
    parent_Div = nextDiv;

    let display_Div = document.createElement("div");
    display_Div.innerHTML = "<h4>" + value + "</h4>";
    display_Div.style.border = "2px solid black";
    parent_Div.appendChild(display_Div);
    createButton("X", parent_Div, topicName);
    if(flag===1){
        createButton("Edit", parent_Div, topicName);
    }
    parent_Div.style.display = "flex";
}
function reinitializeLanguages()
{
    languageName.value = "";
    languageRating.value = "";
};
function reinitializeSkills()
{
    skillName.value = "";
    skillPercentage.value = "";
}

function addLinkedin(parentDiv,user_linkedin)
{
    if (user_linkedin != "") {
        parentDiv[0].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-linkedin icons'></i></div><div class='icon-text'><a href=" +
            user_linkedin +
            " target='_blank' class='iconic'>"+
            user_linkedin +
            "</a></div>";
    }
}
function addEmail(parentDiv,user_email)
{
    if (user_email != "") {
        parentDiv[1].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-envelope icons'></i></div><div class='icon-text'><a href='mailto: " +
            user_email +
            " target='_blank' class='iconic'>" +
            user_email +
            "</a></div>";
    }
}
function addPhone(parentDiv,user_phone)
{
    if (user_phone != "") {
        parentDiv[2].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-mobile icons'></i></div><div class='icon-text'><a href='tel:+" +
            user_phone +
            " target='_blank' class='iconic'>" +
            user_phone +
            "</a></div>";
    }
}
function addPlace(parentDiv,user_place)
{
    if (user_place != "") {
        parentDiv[3].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-location-dot icons'></i></div><div class='icon-text'><a href='' target='_blank' class='iconic'>" +
            user_place +
            "</a></div>";
    }
}
function addTwitter(parentDiv,user_twitter)
{
    if (user_twitter != "") {
        let userName_twitter = user_twitter.split("/")[3];
        user_name = nameLink.innerHTML;
        user_name = user_name.split(" ")[0].toLowerCase();
        parentDiv[4].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-square-twitter icons'></i></div><div class='icon-text'><a href=" +
            user_twitter +
            " target='_blank' class='iconic'>" +
            userName_twitter +
            "</a></div>";
    }
}




function reinitializeContactInfo()
{
    linkedinLink.value = "";
    mailLink.value = "";
    phoneLink.value = "";
    placeLink.value = "";
    twitterLink.value = "";
}



function insideWorkexp(workExp_element, dates) {
    return ` 
                <h4>${workExp_element.role}</h4>
                <h4 id="company-name">${workExp_element.company}</h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">${workExp_element.location}</div>
                </div>
            `;
}

function reinitializeWorkexp() {
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

function createID(topic) {
    return Math.random().toString(16).slice(2) + "-" + topic;
}
function setDate(dateFrom, dateTo) {
    mmFrom = dateFrom.split("-")[1];
    mmTo = dateTo.split("-")[1];
    yyyyFrom = dateFrom.split("-")[0];
    yyyyTo = dateTo.split("-")[0];
    return [mmFrom, yyyyFrom, mmTo, yyyyTo];
}

function createButton(text, parent_Div, topicName) {
    let display_Div = document.createElement("div");
    let className = "";
    if (text == "Edit") className = "remove-" + topicName;
    else className = "edit-" + topicName;
    display_Div.innerHTML =
        "<button class=" + className + ">" + text + "</button>";
    parent_Div.appendChild(display_Div);
}

function reinitializeEducation() {
    degreeName.value = "";
    specializationEdu.value = "";
    collegeName.value = "";
    dateFromEdu.value = "";
    dateToEdu.value = "";
    courseCgpa.value = "";
}


function insideEducation(education_element, dates) {
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
function insideProject(project_element, dates) {
    return `<h4 class="project">${project_element.name}</h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]} </div>

                </div>`;
}

function reinitializeProject() {
    projectName.value = "";
    dateFromProject.value = "";
    dateToProject.value = "";
    descrProject[0].value = "";
    // console.log("hello");
    for (let i = 1; i < descrProject.length; ) {
        // console.log(descrProject[i].className);

        descrProject[i].remove();
    }
}

addDescButton.addEventListener("click", () => {
    let parentDiv = document.getElementsByClassName("complete-desc");
    console.log(parentDiv[0]);
    let newDesc = document.createElement("textarea");
    console.log(newDesc);
    newDesc.classList.add("workexp-desc");
    // newDesc.name="description";
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv[0].appendChild(newDesc);
});

addProjectDescButton.addEventListener("click", () => {
    let parentDiv = document.getElementsByClassName("complete-project-desc");
    console.log(parentDiv[0]);
    let newDesc = document.createElement("textarea");
    console.log(newDesc);
    newDesc.classList.add("project-desc");
    // newDesc.name="description";
    newDesc.rows = "3";
    newDesc.cols = "40";
    console.log(newDesc);
    parentDiv[0].appendChild(newDesc);
});


submitWorkExp = () => {
    const topic = "workexp";
    let idi = createID(topic);
    let leftID = "left-" + idi;
    let rightID = "right-" + idi;
    let workExp_element = {
        role: roleName.value,
        company: companyName.value,
        location: workLocation.value,
        dateFrom: dateFrom.value,
        dateTo: dateTo.value,
        description: [],
        id: idi,
    };
    let dates = setDate(dateFrom.value, dateTo.value);
    for (var i = 0; i < descr.length; i++) {
        workExp_element.description.push(descr[i].value);
    }
    let insideHTML = insideWorkexp(workExp_element, dates);
    createNewElementRight(topic, rightID, insideHTML, workExp_element, 1);
    createNewElementLeft(topic, leftID, companyName.value, 1);
    workExpList.push(workExp_element);
    console.log(workExpList);
    reinitializeWorkexp();
};
workExpButton.addEventListener("click", submitWorkExp);

submitProject = () => {
    const topic = "project";
    let idi = createID(topic);
    let leftID = "left-" + idi;
    let rightID = "right-" + idi;
    let project_element = {
        name: projectName.value,
        dateFrom: dateFromProject.value,
        dateTo: dateToProject.value,
        description: [],
        id: idi,
    };
    let dates = setDate(dateFromProject.value, dateToProject.value);
    for (var i = 0; i < descrProject.length; i++) {
        project_element.description.push(descrProject[i].value);
    }
    let insideHTML = insideProject(project_element, dates);
    createNewElementRight(topic, rightID, insideHTML, project_element, 1);
    createNewElementLeft(topic, leftID, project_element.name,1);
    projectList.push(project_element);
    console.log(projectList);
    reinitializeProject();
};
projectButton.addEventListener("click", submitProject);

submitEducation = () => {
    const topic = "education";
    let idi = createID(topic);
    let leftID = "left-" + idi;
    let rightID = "right-" + idi;
    let education_element = {
        degree: degreeName.value,
        specialization: specializationEdu.value,
        college: collegeName.value,
        dateFrom: dateFromEdu.value,
        dateTo: dateToEdu.value,
        cgpa: courseCgpa.value,
        id: idi,
    };
    let dates = setDate(dateFromEdu.value, dateToEdu.value);
    let insideHTML = insideEducation(education_element, dates);
    createNewElementRight(topic, rightID, insideHTML, education_element);
    createNewElementLeft(topic, leftID, education_element.degree,1);
    educationList.push(education_element);
    console.log(educationList);
    reinitializeEducation();
};
educationButton.addEventListener("click", submitEducation);

submitLanguages = () => {
    const topic = "languages";
    let idi = createID(topic);
    let leftID = "left-" + idi;
    let rightID = "right-" + idi;
    let language_element = {
        name: languageName.value,
        rating: languageRating.value,
        id: idi,
    };
    languageList.push(language_element);
    let insideHTML = insideLanguages(languageName.value);
    createNewElementRight(topic, rightID, insideHTML, language_element, 2);
    createNewElementLeft(topic, leftID, language_element.name, 0);
    reinitializeLanguages();
};
buttonLanguage.addEventListener("click", submitLanguages);

submitSkills = () => {
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
buttonSkills.addEventListener("click", submitSkills);

submitIntro = () => {
    let userName = document.querySelector(".intro h1");
    let userRole = document.querySelector(".intro h4");
    let userDescription = document.querySelector(".intro p");
    userName.innerHTML = name.value;
    userRole.innerHTML = role.value;
    userDescription.innerHTML = description.value;
    name.value = "";
    role.value = "";
    description.value = "";
};
buttonIntro.addEventListener("click", submitIntro);

submitContactInfo= () => {
    let user_linkedin = linkedinLink.value;
    let user_email = mailLink.value;
    let user_phone = phoneLink.value;
    let user_place = placeLink.value;
    let user_twitter = twitterLink.value;
    let parentDiv = document.getElementsByClassName("link-icon");
    addLinkedin(parentDiv, user_linkedin);
    addEmail(parentDiv, user_email);
    addPhone(parentDiv, user_phone);
    addPlace(parentDiv, user_place);
    addTwitter(parentDiv, user_twitter);
    reinitializeContactInfo();
};
buttonLink.addEventListener("click", submitContactInfo);