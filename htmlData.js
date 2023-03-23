export function getWorkexpData(workExpElement, dates) {
    return ` 
            <div class="change-inside-workexp">
            <h4>${workExpElement.name}</h4>
            <div class="edit-icons">
            <div class="inside-workexp-class" id="edit-inside-workexp-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
            <div class="inside-workexp-class" id="remove-inside-workexp-button"><i class="fa-solid fa-trash edit-image"></i></div>
            </div>
            </div>
            <h4 id="company-name">${workExpElement.company}</h4>
            <div class="date-place">
                <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                <div class="place">${workExpElement.location}</div>
            </div>
        `;
}
export function getProjectData(projectElement, dates) {
    return `

    <div class="change-inside-project">
    <h4 class="project">${projectElement.projectName}</h4>
    <div class="edit-icons">
    <div class="inside-project-class" id="edit-inside-project-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
    <div class="inside-project-class" id="remove-inside-project-button"><i class="fa-solid fa-trash edit-image"></i></div>
    </div>
    </div>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]} </div>

                </div>`;
}

export function getSkillsData(rightID, text, percentage) {
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
    </div>`;
}

export function getEducationData(educationElement, dates) {
    return `
                <div class="change-inside-education">
                <h4 class="degree">${educationElement.degree} in ${educationElement.specialization} </h4>
                <div class="edit-icons">
                <div class="inside-education-class" id="edit-inside-education-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
                <div class="inside-education-class" id="remove-inside-education-button"><i class="fa-solid fa-trash edit-image"></i></div>
                </div>
                </div>
                <h4>${educationElement.college} </h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">CGPA- ${educationElement.cgpa}</div>
                </div>
                <br>
                `;
}

export function getLanguagesData(text) {
    return `
        
        <div class="change-inside-languages">
        <h4>${text}</h4>
        <div class="inside-languages-class" id="remove-inside-languages-button"><i class="fa-solid fa-trash edit-image"></i></div>
        </div>
        <div class='place-circles'></div>
        `;
}

// Adding Linkedin
export function getLinkedinData(parentDiv, userLinkedin) {
        if (userLinkedin != "") {
            parentDiv[0].innerHTML =
                "<div class='align-icon'><i class='fa-brands fa-linkedin icons'></i></div><div class='icon-text'><a href=" +
                userLinkedin +
                " target='_blank' class='iconic'>" +
                userLinkedin +
                "</a></div>";
        }
}
    
// Adding Email ID
export function getEmailData(parentDiv, userEmail) {
        if (userEmail != "") {
            parentDiv[1].innerHTML =
                "<div class='align-icon'><i class='fa-solid fa-envelope icons'></i></div><div class='icon-text'><a href='mailto: " +
                userEmail +
                " target='_blank' class='iconic'>" +
                userEmail +
                "</a></div>";
        }
}
    
// Adding Phone Number
export function getPhoneData(parentDiv, userPhone) {
        if (userPhone != "") {
            parentDiv[2].innerHTML =
                "<div class='align-icon'><i class='fa-solid fa-mobile icons'></i></div><div class='icon-text'><a href='tel:+" +
                userPhone +
                " target='_blank' class='iconic'>" +
                userPhone +
                "</a></div>";
        }
}

    
// Adding Location
export function getPlaceData(parentDiv, userPlace) {
        if (userPlace != "") {
            parentDiv[3].innerHTML =
                "<div class='align-icon'><i class='fa-solid fa-location-dot icons'></i></div><div class='icon-text'><a href='' target='_blank' class='iconic'>" +
                userPlace +
                "</a></div>";
        }
}

    
// Adding Twitter link
export function getTwitterData(parentDiv, userTwitter) {
        if (userTwitter != "") {
            let userNameTwitter = userTwitter.split("/")[3];
            parentDiv[4].innerHTML =
                "<div class='align-icon'><i class='fa-brands fa-square-twitter icons'></i></div><div class='icon-text'><a href=" +
                userTwitter +
                " target='_blank' class='iconic'>" +
                userNameTwitter +
                "</a></div>";
        }
}