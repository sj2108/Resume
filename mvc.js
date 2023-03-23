import { formData } from "./forms.js";
import {
    getEducationData,
    getSkillsData,
    getProjectData,
    getWorkexpData,
    getLanguagesData,
    getTwitterData,
    getLinkedinData,
    getPhoneData,
    getEmailData,
    getPlaceData,
} from "./htmlData.js";
// import { changeButtons } from "./index.js";

class Model {
    constructor() {
        this.completeData = {};
    }

    addElement(elementName, elementData) {
        if (!this.completeData[elementName]) {
            this.completeData[elementName] = [];
        }
        if (
            elementName === "intro" ||
            elementName === "weblinks" ||
            elementName === "image"
        ) {
            this.completeData[elementName] = [];
        }
        this.completeData[elementName].push(elementData);
        this.changeResume(elementName, this.completeData);

        console.log(this.completeData);
    }
    changeInsideResume(handler) {
        this.changeResume = handler;
    }

    removeElement(elementName, elementID) {
        this.completeData[elementName] = this.completeData[elementName].filter(
            (element) => element.id != elementID
        );
        this.changeResume(elementName, this.completeData);
    }
    editElement(elementName, elementID, newElementData) {
        this.completeData[elementName] = this.completeData[elementName].map(
            (element) => {
                console.log(newElementData);
                console.log(element);
                console.log(element.id);
                console.log(elementID);
                if (element.id === elementID) {
                    element = { ...newElementData };
                }
                console.log(element);
                return element;
            }
        );
        this.changeResume(elementName, this.completeData);
    }
    getData(elementName, elementID) {
        let tempData = this.completeData[elementName].filter(
            (element) => element.id === elementID
        );
        console.log(tempData[0]);
        return tempData[0];
        // this.changeResume(elementName, this.completeData);
    }
}

class View {
    constructor() {
        this.previewEditButton = document.getElementById("preview-resume");

        this.previewEditButtonEvent();
        // this.addEducationButtonEvent();
        // this.editInsideEducationButtonEvent();
        this.submitButton = {};

        this.formElements = {};

        this.editResume = {
            education: {
                editButton: document.getElementById("edit-education-button"),
                addButton: document.getElementById("add-education-button"),
                insideEditButton: document.getElementById(
                    "education-information"
                ),
            },
            project: {
                editButton: document.getElementById("edit-project-button"),
                addButton: document.getElementById("add-project-button"),
                insideEditButton: document.getElementById(
                    "project-information"
                ),
            },
            workexp: {
                editButton: document.getElementById("edit-workexp-button"),
                addButton: document.getElementById("add-workexp-button"),
                insideEditButton: document.getElementById(
                    "workexp-information"
                ),
            },
        };

        this.TOPIC = {
            PROJECT: "project",
            EDUCATION: "education",
            WORKEXP: "workexp",
            SKILL: "skills",
            LANGUAGE: "languages",
            INTRODUCTION: "intro",
            IMAGE: "image",
            WEBLINKS: "weblinks",
        };
    }
    changeForm(topic) {
        console.log(topic);
        console.log(topic);
        const formElement = document.getElementsByClassName("form");
        console.log(formElement[0].firstElementChild);
        formElement[0].firstElementChild.innerHTML = formData[topic];
        if (topic != "none") {
            this.submitButton[topic] = document.getElementById(
                "submit-" + topic
            );
            this.formElements["education"] = {
                degree: document.getElementById("degree-name"),
                specialization: document.getElementById("specialization"),
                college: document.getElementById("college-name"),
                dateFrom: document.getElementById("date-from-edu"),
                dateTo: document.getElementById("date-to-edu"),
                cgpa: document.getElementById("cgpa"),
            };
            this.formElements["project"] = {
                projectName: document.getElementById("project-name"),
                dateFrom: document.getElementById("date-from-project"),
                dateTo: document.getElementById("date-to-project"),
                descrProject: document.getElementsByClassName("project-desc"),
            };
            this.formElements["workexp"] = {
                name: document.getElementById("role-name"),
                company: document.getElementById("company-name"),
                location: document.getElementById("work-location"),
                dateFrom: document.getElementById("date-from"),
                dateTo: document.getElementById("date-to"),
                descr: document.getElementsByClassName("workexp-desc"),
            };
            this.formElements["image"] = {
                newProfileImage: document.getElementById("profile-image"),
            };
            this.formElements["intro"] = {
                name: document.getElementById("name"),
                role: document.getElementById("role"),
                description: document.getElementById("desc"),
            };
            this.formElements["weblinks"] = {
                linkedinLink: document.getElementById("linkedin"),
                mailLink: document.getElementById("mail"),
                phoneLink: document.getElementById("phone"),
                placeLink: document.getElementById("place"),
                twitterLink: document.getElementById("twitter"),
            };
            this.formElements["skills"] = {
                skill: document.getElementById("skill-name"),
                percentage: document.getElementById("skill-percentage"),
            };
            this.formElements["languages"] = {
                name: document.getElementById("languages-name"),
                rating: document.getElementById("languages-rating"),
            };
        }
        // education: document.getElementById("submit-education"),
    }

    submitElementData = {
        intro: this.submitIntro.bind(this),
        image: this.submitImage.bind(this),
        education: this.submitEducation.bind(this),
        skills: this.submitSkills.bind(this),
        languages: this.submitLanguages.bind(this),
        project: this.submitProject.bind(this),
        workexp: this.submitWorkExp.bind(this),
        weblinks: this.submitWeblinks.bind(this),
    };
    sectionDOM = {
        intro: document.getElementsByClassName("intro")[0],
        // image: this.submitImage,
        education: document.getElementById("education-information"),
        skills: document.getElementsByClassName("skills-container")[0],
        languages: document.getElementsByClassName("languages-container")[0],
        project: document.getElementById("project-information"),
        workexp: document.getElementById("workexp-information"),
        weblinks: document.getElementsByClassName("links")[0],
    };
    displayResume(elementName, completeData) {
        if (
            elementName != this.TOPIC.INTRODUCTION &&
            elementName != this.TOPIC.IMAGE &&
            elementName != this.TOPIC.WEBLINKS
        ) {
            while (this.sectionDOM[elementName].firstChild) {
                this.sectionDOM[elementName].removeChild(
                    this.sectionDOM[elementName].firstChild
                );
            }
        }
        console.log(completeData);
        completeData[elementName].forEach(addInsideResume.bind(this));
        function addInsideResume(item) {
            return this.submitElementData[elementName](item);
        }
    }

    addInsideLanguages(newDiv, parentDiv, elementData, rightID) {
        console.log(parentDiv);
        newDiv.id = rightID;
        newDiv.className = "inside-languages-container";
        parentDiv[0].appendChild(newDiv);
        console.log(newDiv);
        console.log(newDiv.children[1]);
        // console.log(newDiv.childNodes[2]);
        for (let i = 0; i < elementData.rating; i++) {
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = "<i class='fa-solid fa-circle rating'></i>";
            newDiv.children[1].appendChild(tempDiv);
        }
        for (let i = 0; i < 5 - elementData.rating; i++) {
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = "<i class='fa-regular fa-circle unrate'></i>";
            newDiv.children[1].appendChild(tempDiv);
        }
    }

    submitLanguages(elementData) {
        ///console.log(elementData);
        const topic = this.TOPIC.LANGUAGE;
        let rightID = "right-" + elementData.id;
        let languageElement = elementData;
        let insideHTML = getLanguagesData(elementData.name);
        console.log(insideHTML);
        this.createNewElementRight(topic, rightID, insideHTML, languageElement);
        this.changeForm(topic);
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }

    submitSkills(elementData) {
        const topic = this.TOPIC.SKILL;
        let rightID = "right-" + elementData.id;
        let skillElement = elementData;
        let insideHTML = getSkillsData(
            rightID,
            skillElement.skill,
            skillElement.percentage
        );
        this.createNewElementRight(topic, rightID, insideHTML, skillElement);
        this.changeForm(topic);
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }
    submitWeblinks(elementData) {
        const topic = this.TOPIC.WEBLINKS;
        let userLinkedin = elementData.linkedinLink;
        let userEmail = elementData.mailLink;
        let userPhone = elementData.phoneLink;
        let userPlace = elementData.placeLink;
        let userTwitter = elementData.twitterLink;

        let parentDiv = document.getElementsByClassName("link-icon");
        getLinkedinData(parentDiv, userLinkedin);
        getEmailData(parentDiv, userEmail);
        getPhoneData(parentDiv, userPhone);
        getPlaceData(parentDiv, userPlace);
        getTwitterData(parentDiv, userTwitter);
        this.changeForm("none");
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }

    submitImage(elementData) {
        let profileImage = document.getElementsByTagName("img")[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            profileImage.setAttribute("src", e.target.result);
            // x=e.target.result;
        };
        reader.readAsDataURL(elementData.newProfileImage.files[0]);
        this.changeForm("none");
        this.changeInsideTopicButtons(this.TOPIC.IMAGE, "none");
        this.changeTopicButtons("block");
    }

    submitIntro(elementData) {
        let topic = this.TOPIC.INTRODUCTION;
        let introElement = elementData;
        let userName = document.querySelector(".intro h1");
        let userRole = document.querySelector(".intro h4");
        let userDescription = document.querySelector(".intro p");
        userName.innerHTML = introElement.name;
        userRole.innerHTML = introElement.role;
        userDescription.innerHTML = introElement.description;
        this.changeForm("none");
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }
    submitEducation(elementData) {
        const topic = this.TOPIC.EDUCATION;
        let rightID = "right-" + elementData.id;
        let educationElement = elementData;
        let dates = this.setDate(elementData.dateFrom, elementData.dateTo);
        let insideHTML = getEducationData(educationElement, dates);
        this.createNewElementRight(
            topic,
            rightID,
            insideHTML,
            educationElement
        );
        // this.reinitializeEducation();
        this.changeForm("none");
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }
    submitProject(elementData) {
        const topic = this.TOPIC.PROJECT;
        let rightID = "right-" + elementData.id;
        let projectElement = elementData;
        let dates = this.setDate(elementData.dateFrom, elementData.dateTo);
        let insideHTML = getProjectData(projectElement, dates);
        this.createNewElementRight(topic, rightID, insideHTML, projectElement);
        this.changeForm("none");
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }
    submitWorkExp(elementData) {
        const topic = this.TOPIC.WORKEXP;
        let rightID = "right-" + elementData.id;
        let workexpElement = elementData;
        let dates = this.setDate(elementData.dateFrom, elementData.dateTo);
        let insideHTML = getWorkexpData(workexpElement, dates);
        this.createNewElementRight(topic, rightID, insideHTML, workexpElement);
        this.changeForm("none");
        this.changeInsideTopicButtons(topic, "none");
        this.changeTopicButtons("block");
    }

    changeTopicButtons(displayType) {
        let makeHeadingButtonInvisible =
            document.getElementsByClassName("topic-button");
        for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
            makeHeadingButtonInvisible[i].style.display = displayType;
    }
    changeInsideTopicButtons(topicName, displayType) {
        let insideButton = document.getElementsByClassName(
            "inside-" + topicName + "-class"
        );
        for (let i = 0; i < insideButton.length; i++)
            insideButton[i].style.display = displayType;
    }

    addInsideSkills(newDiv, parentDiv) {
        // console.log(skillList);
        newDiv.className = this.TOPIC.SKILL;
        parentDiv[0].appendChild(newDiv);
        // console.log(skillList.length);
    }

    createID(topic) {
        return Math.random().toString(16).slice(2) + "-" + topic;
    }

    // Arranges date mm/yyyy manner
    setDate(dateFrom, dateTo) {
        console.log(dateFrom);
        let mmFrom = dateFrom.split("-")[1];
        let mmTo = dateTo.split("-")[1];
        let yyyyFrom = dateFrom.split("-")[0];
        let yyyyTo = dateTo.split("-")[0];
        return [mmFrom, yyyyFrom, mmTo, yyyyTo];
    }

    createNewElementRight(topicName, rightID, insideHTML, elementData) {
        let parentDiv = document.getElementsByClassName(
            topicName + "-container"
        );
        let newDiv = document.createElement("div");
        newDiv.innerHTML = insideHTML;
        console.log(insideHTML);
        if (topicName === this.TOPIC.PROJECT) {
            this.addInsideProject(newDiv, parentDiv, elementData, rightID);
        } else if (topicName === this.TOPIC.WORKEXP) {
            this.addInsideWorkexp(newDiv, parentDiv, elementData, rightID);
        } else if (topicName === this.TOPIC.LANGUAGE) {
            this.addInsideLanguages(newDiv, parentDiv, elementData, rightID);
        } else if (topicName === this.TOPIC.SKILL) {
            this.addInsideSkills(newDiv, parentDiv);
        } else {
            this.addInsideSection(newDiv, parentDiv, rightID);
        }
    }
    addInsideSection(newDiv, parentDiv, rightID) {
        newDiv.id = rightID;
        parentDiv[0].appendChild(newDiv);
    }

    previewEditButtonEvent() {
        this.previewEditButton.addEventListener("click", (e) =>
            this.changeLayout(e)
        );
    }

    changeLayout(e) {
        console.log(e.target.value);
        if (e.target.value === "Edit Resume") {
            e.target.value = "Preview";
            this.previewEditButtonChanges({
                formDisplay: "block",
                resumeWidth: "54%",
                // resumeMargin: "1.5%",
                rightWidth: "60%",
                leftWidth: "40%",
                buttonDisplay: "block",
            });
        } else {
            e.target.value = "Edit Resume";
            this.previewEditButtonChanges({
                formDisplay: "none",
                resumeWidth: "54%",
                resumeMargin: "auto",
                rightWidth: "75%",
                leftWidth: "25%",
                buttonDisplay: "none",
                // leftWidth:
            });
        }
    }

    previewEditButtonChanges({
        formDisplay,
        resumeWidth,
        resumeMargin,
        rightWidth,
        leftWidth,
        buttonDisplay,
    }) {
        let hideForm = document.getElementsByClassName("form");
        let previewResume = document.getElementsByClassName("layout");
        let leftSideWidth = document.getElementsByClassName("left");
        let rightSideWidth = document.getElementsByClassName("right");
        hideForm[0].style.display = formDisplay;
        previewResume[0].style.width = resumeWidth;
        // previewResume[0].style.margin = resumeMargin;
        rightSideWidth[0].style.width = rightWidth;
        leftSideWidth[0].style.width = leftWidth;
        let makeHeadingButtonInvisible =
            document.getElementsByClassName("topic-button");
        for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
            makeHeadingButtonInvisible[i].style.display = buttonDisplay;
    }

    addFormButtonEvent(sectionName) {
        this.changeTopicButtons("none");
        this.changeForm(sectionName);
    }

    editSectionButtonEvent(sectionName) {
        this.changeTopicButtons("none");
        this.changeInsideTopicButtons(sectionName, "block");
    }

    editInsideEducationButtonEvent(e, deleteHandler, getDataHandler) {
        this.editInsideEducationInfo(e, deleteHandler, getDataHandler);
    }
    editInsideProjectButtonEvent(e, deleteHandler, getDataHandler) {
        this.editInsideProjectInfo(e, deleteHandler, getDataHandler);
    }
    editInsideWorkexpButtonEvent(e, deleteHandler, getDataHandler) {
        this.editInsideWorkexpInfo(e, deleteHandler, getDataHandler);
    }

    editInsideSkillsButtonEvent(e, deleteHandler, getDataHandler) {
        this.editInsideSkillsInfo(e, deleteHandler, getDataHandler);
    }
    editInsideLanguagesButtonEvent(e, deleteHandler, getDataHandler) {
        this.editInsideLanguagesInfo(e, deleteHandler, getDataHandler);
    }

    editInsideLanguagesInfo(e, deleteHandler, getDataHandler) {
        // console.log(e.target.parentNode.parentNode.parentNode);
        let parentDiv = e.target.parentNode.parentNode.parentNode;

        let elementID = e.target.parentNode.getAttribute("id");
        if (elementID === "remove-inside-languages-button") {
            let rightID = parentDiv.getAttribute("id");
            let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
            this.deleteLanguages(deleteHandler, elementID);
        }
    }

    editInsideSkillsInfo(e, deleteHandler, getDataHandler) {
        console.log(e.target.parentNode);
        let parentDiv = e.target.parentNode.parentNode.parentNode;
        let insideParent = parentDiv.firstElementChild;
        parentDiv = parentDiv.parentNode;
        console.log(parentDiv);
        let elementID = e.target.parentNode.getAttribute("id");
        if (elementID === "remove-inside-skills-button") {
            let rightID = insideParent.getAttribute("id");
            let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
            this.deleteSkills(deleteHandler, elementID);
        }
    }

    deleteLanguages(deleteHandler, elementID) {
        deleteHandler(this.TOPIC.LANGUAGE, elementID);
        this.changeInsideTopicButtons(this.TOPIC.LANGUAGE, "none");
        this.changeTopicButtons("block");
    }

    editInsideEducationInfo(e, deleteHandler, getDataHandler) {
        let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
        let ID = e.target.parentNode.getAttribute("id");
        let rightID = parentDiv.getAttribute("id");
        let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];

        if (ID === "edit-inside-education-button") {
            this.changeForm("education");
            this.changeButtons(false, this.TOPIC.EDUCATION);
            let confirmEduButton = document.getElementById("confirm-education");
            console.log(confirmEduButton);
            confirmEduButton.educationID = elementID;
            let elementData = getDataHandler(this.TOPIC.EDUCATION, elementID);
            // console.log(elementID);
            console.log(elementData);
            this.reassignEducationForEdit(elementData);

            // data.parentDiv = parentDiv;
        } else {
            this.deleteEducation(deleteHandler, elementID);
        }
    }

    editInsideProjectInfo(e, deleteHandler, getDataHandler) {
        let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
        let ID = e.target.parentNode.getAttribute("id");
        let rightID = parentDiv.getAttribute("id");
        let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
        if (ID === "edit-inside-project-button") {
            this.changeForm("project");
            this.changeButtons(false, this.TOPIC.PROJECT);
            let confirmProjectButton =
                document.getElementById("confirm-project");
            confirmProjectButton.projectID = elementID;
            let elementData = getDataHandler(this.TOPIC.PROJECT, elementID);
            this.reassignProjectForEdit(elementData);
        } else {
            this.deleteProject(deleteHandler, elementID);
        }
    }

    editInsideWorkexpInfo(e, deleteHandler, getDataHandler) {
        let parentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
        let ID = e.target.parentNode.getAttribute("id");
        let rightID = parentDiv.getAttribute("id");
        let elementID = rightID.split("-")[1] + "-" + rightID.split("-")[2];
        if (ID === "edit-inside-workexp-button") {
            this.changeForm("workexp");
            this.changeButtons(false, this.TOPIC.WORKEXP);
            let confirmWorkexpButton =
                document.getElementById("confirm-workexp");
            confirmWorkexpButton.workexpID = elementID;
            let elementData = getDataHandler(this.TOPIC.WORKEXP, elementID);
            this.reassignWorkexpForEdit(elementData);
        } else {
            this.deleteWorkexp(deleteHandler, elementID);
        }
    }

    deleteWorkexp(deleteHandler, elementID) {
        deleteHandler(this.TOPIC.WORKEXP, elementID);
        this.changeInsideTopicButtons(this.TOPIC.WORKEXP, "none");
        this.changeTopicButtons("block");
    }
    addWorkexpDesc() {
        let parentDiv = document.getElementsByClassName("complete-desc");
        let newDesc = document.createElement("textarea");
        console.log(newDesc);
        newDesc.classList.add("workexp-desc");
        // newDesc.name="description";
        newDesc.rows = "3";
        newDesc.cols = "40";
        console.log(newDesc);
        parentDiv[0].appendChild(newDesc);
    }

    deleteProject(deleteHandler, elementID) {
        deleteHandler(this.TOPIC.PROJECT, elementID);
        this.changeInsideTopicButtons(this.TOPIC.PROJECT, "none");
        this.changeTopicButtons("block");
    }
    addDescription(description, topicName, parentDiv) {
        let newDesc = document.createElement("textarea");
        newDesc.value = description;
        console.log(newDesc);
        newDesc.classList.add(topicName + "-desc");
        newDesc.rows = "3";
        newDesc.cols = "40";
        console.log(newDesc);
        parentDiv.appendChild(newDesc);
    }
    reassignProjectForEdit(projectArray) {
        this.formElements.project.projectName.value = projectArray.projectName;
        this.formElements.project.dateFrom.value = projectArray.dateFrom;
        this.formElements.project.dateTo.value = projectArray.dateTo;
        this.formElements.project.descrProject[0].value =
            projectArray.descrProject[0];
        for (let j = 1; j < projectArray.descrProject.length; j++) {
            let parentDiv = document.getElementsByClassName(
                "complete-project-desc"
            );
            console.log(parentDiv[0]);
            this.addDescription(
                projectArray.descrProject[j],
                this.TOPIC.PROJECT,
                parentDiv[0]
            );
        }
    }
    reassignWorkexpForEdit(workexpArray) {
        this.formElements.workexp.name.value = workexpArray.name;
        this.formElements.workexp.company.value = workexpArray.company;
        this.formElements.workexp.location.value = workexpArray.location;
        this.formElements.workexp.dateFrom.value = workexpArray.dateFrom;
        this.formElements.workexp.dateTo.value = workexpArray.dateTo;
        // let first_desc = document.getElementsByClassName("workexp-desc");
        this.formElements.workexp.descr[0].value = workexpArray.descr[0];
        for (let j = 1; j < workexpArray.descr.length; j++) {
            let parentDiv = document.getElementsByClassName("complete-desc");
            console.log(parentDiv[0]);
            this.addDescription(
                workexpArray.descr[j],
                this.TOPIC.WORKEXP,
                parentDiv[0]
            );
        }
    }
    reassignEducationForEdit(educationArray) {
        this.formElements.education.degree.value = educationArray.degree;
        this.formElements.education.specialization.value =
            educationArray.specialization;
        this.formElements.education.college.value = educationArray.college;
        this.formElements.education.dateFrom.value = educationArray.dateFrom;
        this.formElements.education.dateTo.value = educationArray.dateTo;
        this.formElements.education.cgpa.value = educationArray.cgpa;
    }
    confirmEducation(educationID, editHandler) {
        let ID = this.createID(this.TOPIC.EDUCATION);
        let elementData = {
            degree: this.formElements.education.degree.value,
            specialization: this.formElements.education.specialization.value,
            college: this.formElements.education.college.value,
            dateFrom: this.formElements.education.dateFrom.value,
            dateTo: this.formElements.education.dateTo.value,
            cgpa: this.formElements.education.cgpa.value,
            id: ID,
        };
        console.log(elementData);
        editHandler(this.TOPIC.EDUCATION, educationID, elementData);
    }
    confirmProject(projectID, editHandler) {
        let ID = this.createID(this.TOPIC.PROJECT);
        let elementData = {
            projectName: this.formElements.project.projectName.value,
            dateFrom: this.formElements.project.dateFrom.value,
            dateTo: this.formElements.project.dateTo.value,
            descrProject: [...this.formElements.project.descrProject].map(
                (element) => element.value
            ),
            id: ID,
        };
        // console.log(elementData);
        editHandler(this.TOPIC.PROJECT, projectID, elementData);
    }
    confirmWorkexp(workexpID, editHandler) {
        let ID = this.createID(this.TOPIC.WORKEXP);
        let elementData = {
            name: this.formElements.workexp.name.value,
            company: this.formElements.workexp.company.value,
            location: this.formElements.workexp.location.value,
            dateFrom: this.formElements.workexp.dateFrom.value,
            dateTo: this.formElements.workexp.dateTo.value,
            descr: [...this.formElements.workexp.descr].map(
                (element) => element.value
            ),
            id: ID,
        };
        // console.log(elementData);
        editHandler(this.TOPIC.WORKEXP, workexpID, elementData);
    }
    cancelWorkexp() {
        this.changeForm("none");
        this.changeInsideTopicButtons(this.TOPIC.WORKEXP, "none");
        this.changeTopicButtons("block");
    }
    cancelEducation() {
        this.changeForm("none");
        this.changeInsideTopicButtons(this.TOPIC.EDUCATION, "none");
        this.changeTopicButtons("block");
    }
    cancelProject() {
        this.changeForm("none");
        this.changeInsideTopicButtons(this.TOPIC.PROJECT, "none");
        this.changeTopicButtons("block");
    }
    deleteEducation(deleteHandler, elementID) {
        deleteHandler(this.TOPIC.EDUCATION, elementID);
        this.changeInsideTopicButtons(this.TOPIC.EDUCATION, "none");
        this.changeTopicButtons("block");
    }
    deleteSkills(deleteHandler, elementID) {
        deleteHandler(this.TOPIC.SKILL, elementID);
        this.changeInsideTopicButtons(this.TOPIC.SKILL, "none");
        this.changeTopicButtons("block");
    }
    changeButtons(showSubmitButton, topic) {
        let confirmButton = document.getElementById("confirm-" + topic);
        let cancelButton = document.getElementById("cancel-" + topic);
        let submitButton = document.getElementById("submit-" + topic);
        if (showSubmitButton) {
            cancelButton.style.display = "none";
            confirmButton.style.display = "none";
            submitButton.style.display = "block";
        } else {
            cancelButton.style.display = "block";
            confirmButton.style.display = "block";
            submitButton.style.display = "none";
        }
    }

    getSkillsRefs = () => {
        let ID = this.createID(this.TOPIC.SKILL);
        return {
            skill: this.formElements.skills.skill.value,
            percentage: this.formElements.skills.percentage.value,
            id: ID,
        };
    };
    getLanguagesRefs = () => {
        let ID = this.createID(this.TOPIC.LANGUAGE);
        return {
            name: this.formElements.languages.name.value,
            rating: this.formElements.languages.rating.value,
            id: ID,
        };
    };
    getImageRefs = () => {
        let ID = this.createID(this.TOPIC.IMAGE);
        return {
            newProfileImage: this.formElements.image.newProfileImage,
            id: ID,
        };
    };
    getWeblinksRefs = () => {
        let ID = this.createID(this.TOPIC.WEBLINKS);
        return {
            linkedinLink: this.formElements.weblinks.linkedinLink.value,
            mailLink: this.formElements.weblinks.mailLink.value,
            phoneLink: this.formElements.weblinks.phoneLink.value,
            placeLink: this.formElements.weblinks.placeLink.value,
            twitterLink: this.formElements.weblinks.twitterLink.value,
            id: ID,
        };
    };
    getIntroRefs = () => {
        let ID = this.createID(this.TOPIC.INTRODUCTION);
        return {
            name: this.formElements.intro.name.value,
            role: this.formElements.intro.role.value,
            description: this.formElements.intro.description.value,
            id: ID,
        };
    };

    getEducationRefs = () => {
        let ID = this.createID(this.TOPIC.EDUCATION);
        return {
            degree: this.formElements.education.degree.value,
            specialization: this.formElements.education.specialization.value,
            college: this.formElements.education.college.value,
            dateFrom: this.formElements.education.dateFrom.value,
            dateTo: this.formElements.education.dateTo.value,
            cgpa: this.formElements.education.cgpa.value,
            id: ID,
        };
    };
    getProjectRefs = () => {
        let ID = this.createID(this.TOPIC.PROJECT);

        return {
            projectName: this.formElements.project.projectName.value,
            dateFrom: this.formElements.project.dateFrom.value,
            dateTo: this.formElements.project.dateTo.value,
            descrProject: [...this.formElements.project.descrProject].map(
                (element) => element.value
            ),
            id: ID,
        };
    };
    getWorkexpRefs = () => {
        let ID = this.createID(this.TOPIC.PROJECT);

        return {
            name: this.formElements.workexp.name.value,
            company: this.formElements.workexp.company.value,
            location: this.formElements.workexp.location.value,
            dateFrom: this.formElements.workexp.dateFrom.value,
            dateTo: this.formElements.workexp.dateTo.value,
            descr: [...this.formElements.workexp.descr].map(
                (element) => element.value
            ),
            id: ID,
        };
    };

    addInsideWorkexp(newDiv, parentDiv, elementData, rightID) {
        newDiv.id = rightID;
        let newChildDiv = document.createElement("div");
        let ul = document.createElement("ul");
        ul.classList.add = "space-bottom";
        for (let i = 0; i < elementData.descr.length; i++) {
            let li = document.createElement("li");
            li.textContent = elementData.descr[i];
            ul.appendChild(li);
        }
        newChildDiv.appendChild(ul);
        newDiv.appendChild(newChildDiv);
        parentDiv[0].appendChild(newDiv);
    }
    addInsideProject(newDiv, parentDiv, elementData, rightID) {
        newDiv.id = rightID;
        let newChildDiv = document.createElement("div");
        let ul = document.createElement("ul");
        ul.classList.add = "space-bottom";
        for (let i = 0; i < elementData.descrProject.length; i++) {
            let li = document.createElement("li");
            li.textContent = elementData.descrProject[i];
            ul.appendChild(li);
        }
        newChildDiv.appendChild(ul);
        newDiv.appendChild(newChildDiv);
        parentDiv[0].appendChild(newDiv);
    }

    bindSubmitButton(sectionName, handler) {
        // console.log(this.submitButton.education);
        let random = {
            education: this.getEducationRefs,
            project: this.getProjectRefs,
            workexp: this.getWorkexpRefs,
            skills: this.getSkillsRefs,
            languages: this.getLanguagesRefs,
            image: this.getImageRefs,
            intro: this.getIntroRefs,
            weblinks: this.getWeblinksRefs,
        };
        let elementData = random[sectionName]();
        handler(sectionName, elementData);
        this.changeForm("none");
    }
    addProjectDesc() {
        let parentDiv = document.getElementsByClassName(
            "complete-project-desc"
        );
        let newDesc = document.createElement("textarea");
        console.log(newDesc);
        newDesc.classList.add("project-desc");
        newDesc.rows = "3";
        newDesc.cols = "40";
        console.log(newDesc);
        parentDiv[0].appendChild(newDesc);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.changeInsideResume(this.onDisplayChange);
        // this.view.bindSubmitEducationButton(this.submitHandler)
    }
    onDisplayChange = (topic, data) => {
        this.view.displayResume(topic, data);
    };
    addDataHandler = (topic, data) => {
        this.model.addElement(topic, data);
    };
    editDataHandler = (elementName, elementID, newElementData) => {
        this.model.editElement(elementName, elementID, newElementData);
    };
    deleteDataHandler = (topic, id) => {
        this.model.removeElement(topic, id);
    };
    getDataHandler = (topic, id) => {
        return this.model.getData(topic, id);
    };
}

const app = new Controller(new Model(), new View());

window.addDataInsideSection = function (event) {
    let sectionName = event.target.parentNode.id.split("-")[1];
    let addForm = app.view.addFormButtonEvent.bind(app.view);
    addForm(sectionName);
};

window.addDescriptionRows = function (event) {
    let sectionName = event.target.id.split("-")[1];
    console.log(sectionName);
    if (sectionName === "project") app.view.addProjectDesc();
    else app.view.addWorkexpDesc();
};
window.submitFormButton = function (event) {
    // console.log(event.target.id);
    let sectionName = event.target.id.split("-")[1];
    console.log(sectionName);
    let call = app.view.bindSubmitButton.bind(app.view);
    call(sectionName, app.addDataHandler);
};
window.editDataSection = function (event) {
    let sectionName = event.target.parentNode.id.split("-")[1];
    let editSection = app.view.editSectionButtonEvent.bind(app.view);
    editSection(sectionName);
};
window.editInsideSection = function (event) {
    let sectionName = event.target.parentNode.id.split("-")[2];
    let editInsideSectionData = {
        education: app.view.editInsideEducationButtonEvent.bind(app.view),
        project: app.view.editInsideProjectButtonEvent.bind(app.view),
        workexp: app.view.editInsideWorkexpButtonEvent.bind(app.view),
        skills: app.view.editInsideSkillsButtonEvent.bind(app.view),
        languages: app.view.editInsideLanguagesButtonEvent.bind(app.view),
    };
    editInsideSectionData[sectionName](
        event,
        app.deleteDataHandler,
        app.getDataHandler
    );
};
window.confirmEditInsideSection = function (event) {
    let sectionName = event.target.id.split("-")[1];
    let confirmEditInsideSectionData = {
        education: app.view.confirmEducation.bind(app.view),
        project: app.view.confirmProject.bind(app.view),
        workexp: app.view.confirmWorkexp.bind(app.view),
    };
    confirmEditInsideSectionData[sectionName](
        event.target["" + sectionName + "ID"],
        app.editDataHandler
    );
    // app.view.confirmEducation(event.target.educationID,app.editDataHandler);
};
window.cancelEditInsideSection = function (event) {
    let sectionName = event.target.id.split("-")[1];
    let cancelEditInsideSectionData = {
        education: app.view.cancelEducation.bind(app.view),
        project: app.view.cancelProject.bind(app.view),
        workexp: app.view.cancelWorkexp.bind(app.view),
    };
    cancelEditInsideSectionData[sectionName]();
};
