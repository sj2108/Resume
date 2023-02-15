let topic=document.getElementById("topic");

let educationList=[];
let degreeName=document.getElementById("degree-name");
let specializationEdu=document.getElementById("specialization");
let collegeName=document.getElementById("college-name");
let dateFromEdu=document.getElementById("date-from-edu");
let dateToEdu=document.getElementById("date-to-edu");
let courseCgpa=document.getElementById("cgpa")
let educationButton=document.getElementById("submit-education");

let lastTopicValue="None";
// console.log(topic.value);
topic.addEventListener("change",()=>{
    if(lastTopicValue!="None")
    document.getElementsByClassName(lastTopicValue+"-form")[0].classList.add("sub-form");
    document.getElementsByClassName(topic.value+"-form")[0].classList.remove("sub-form");
    lastTopicValue=topic.value;

    
    
    
})


            let name=document.getElementById("name");
            let role=document.getElementById("role");
            let description=document.getElementById("desc");
            let buttonIntro=document.getElementById("submit-intro");
            buttonIntro.addEventListener("click",()=>
            {
                
                // console.log(name.value);
                // console.log(description.value);
                let userName=document.querySelector(".intro h1");
                let userRole=document.querySelector(".intro h4");
                let userDescription=document.querySelector(".intro p");
                userName.innerHTML=name.value;
                userRole.innerHTML=role.value;
                userDescription.innerHTML=description.value;
                name.value="";
                role.value="";
                description.value="";

            })
        
            let skillList=[];
            let skillName=document.getElementById("skill-name");
            let skillPercentage=document.getElementById("skill-percentage");
            let buttonSkills=document.getElementById("submit-skills");
            buttonSkills.addEventListener("click",()=>
            {
                let skill_element={skill: skillName.value,percentage: skillPercentage.value };
                skillList.push(skill_element);
                // console.log(skillList);
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi;
                let rightID="right-"+idi;
                let existingDiv = document.getElementById("add-skills");
                let newDiv = document.createElement("div");
                newDiv.className="skills";
                console.log(rightID);
                newDiv.innerHTML="<div class='border-element' id='"+rightID+"'><div class='inside-skills-container'><h4>"+skillName.value+"</h4> </div></div>";
                existingDiv.appendChild(newDiv);
                let insideNewDiv=document.querySelectorAll(".inside-skills-container");
                insideNewDiv[skillList.length-1].style.width=""+skillPercentage.value+"%";
                console.log(leftID);
                let parent_Div=document.querySelector(".skills-form");
                let nextDiv=document.createElement("div");
                nextDiv.class="subform";
                nextDiv.id=leftID;
                parent_Div.appendChild(nextDiv);
                parent_Div=nextDiv;
                let display_Div=document.createElement("div");
                display_Div.innerHTML="<h4>"+skillName.value+"</h4>";

                display_Div.style.border="2px solid black";
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='remove-skills'>X</button>";
                //  let removeButton=document.getElementsByClass("")

                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
                console.log("HELOO");


                skillName.value="";
                skillPercentage.value="";

            })
            // let removeLanguage=document.getElementById("remove-skills");
            let parentDiv=document.getElementsByClassName("form");
            parentDiv[0].addEventListener("click",(e)=> {
                if (e.target.nodeName === 'BUTTON') {
                    if(e.target.textContent==="X")
                    {
                        console.log((e.target).textContent);
                        let parent=(e.target.parentNode).parentNode;
                        console.log(parent);
                        element_id=parent.getAttribute("id");
                        element_id1=element_id.split("-")[1];
                        element_id2=element_id.split("-")[2];
                        console.log(element_id);
                        element_id="right-"+element_id1+"-"+element_id2;
                        parent.remove();

                        let element_remove=document.getElementById(element_id);
                        console.log(element_id);
                        // console.log(element_remove);
                        element_remove.remove();
                    }
                    else
                    {
                        let parent=(e.target.parentNode).parentNode;
                        element_id=parent.getAttribute("id");
                        let element_id1=element_id.split('-')[1];
                        let element_id2=element_id.split('-')[2];
                        element_id=element_id1+"-"+element_id2;
                        console.log(element_id2);
                        if(element_id2==="education")
                        {
                            for(let i=0;i<educationList.length;i++)
                            {
                                // degree: degreeName.value,specialization:specializationEdu.value,college:collegeName.value,From:dateFromEdu.value,dateTo:dateToEdu.value,cgpa:courseCgpa.value,id:idi
                                if(educationList[i].id===element_id)
                                {
                                    degreeName.value=educationList[i].degree;
                                    specializationEdu.value=educationList[i].specialization;
                                    collegeName.value=educationList[i].college;
                                    dateFromEdu.value=educationList[i].dateFrom;
                                    dateToEdu.value=educationList[i].dateTo;
                                    courseCgpa.value=educationList[i].cgpa;
                                    educationList.splice(i,1);
                                    break;
                                }
                            }


                        }
                        else if(element_id2==="project")
                        {
                            let first_desc=document.getElementsByClassName("project-desc");
                            projectName.value="";
                            dateFromProject.value="";
                            dateToProject.value="";
                            descrProject[0].value="";
                            // console.log("hello");
                            for (let i = 1; i < first_desc.length; ) 
                            {
                                // console.log(descrProject[i].className);
                                
                                first_desc[i].remove();
                            }
                            for(let i=0;i<projectList.length;i++)
                            {
                                // degree: degreeName.value,specialization:specializationEdu.value,college:collegeName.value,From:dateFromEdu.value,dateTo:dateToEdu.value,cgpa:courseCgpa.value,id:idi
                                if(projectList[i].id===element_id)
                                {
                                    projectName.value=projectList[i].name;
                                    dateFromProject.value=projectList[i].dateFrom;
                                    dateToProject.value=projectList[i].dateTo;
                                    // courseCgpa.value=educationList[i].cgpa;
                                    
                                    let first_desc=document.getElementsByClassName("project-desc");
                                    // console.log(projectList[i][description[0]]);
                                    first_desc[0].value=projectList[i].description[0];
                                    // console.log(first_desc[0]);
                                    // first_desc[0].innerHTML.textContent=projectList[i].description[0];
                                    for(let j=1;j<projectList[i].description.length;j++)
                                    {
                                        let parentDiv=document.getElementsByClassName("complete-project-desc");
                                        console.log(parentDiv[0]);
                                        let newDesc=document.createElement("textarea");
                                        newDesc.value=projectList[i].description[j];
                                        console.log(newDesc);
                                        newDesc.classList.add("project-desc");
                                        // newDesc.name="description";
                                        newDesc.rows="3";
                                        newDesc.cols="40";
                                        console.log(newDesc);
                                        parentDiv[0].appendChild(newDesc);
                                    }
                                    projectList.splice(i,1);
                                    console.log(projectList);
                                    // let project_element={name: projectName.value,dateFrom:dateFromProject.value,dateTo:dateToProject.value,description:[],id:idi};
                                    break;
                                }
                            }
                        }
                        element_id="right-"+element_id1+"-"+element_id2;
                        parent.remove();

                        let element_remove=document.getElementById(element_id);
                        console.log(element_id);
                        // console.log(element_remove);
                        element_remove.remove();
                        
                    }
                   
                }
            })





            let languageList=[];
            let languageName=document.getElementById("languages-name");
            let languageRating=document.getElementById("languages-rating");
            let buttonLanguage=document.getElementById("submit-languages");
            buttonLanguage.addEventListener("click",()=>
            {
                // console.log()
                let language_element={name: languageName.value,rating: languageRating.value };
                languageList.push(language_element);
                // console.log(languageList);
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi;
                let rightID="right-"+idi;
                
                let existingDiv = document.getElementsByClassName("languages");
                let newDiv = document.createElement("div");
                newDiv.className="inside-languages-container";
                newDiv.id=rightID;
                newDiv.innerHTML="<h4>"+languageName.value+"</h4><div class='place-circles'></div>";
                existingDiv[0].appendChild(newDiv);
                insideNewDiv=document.getElementsByClassName("place-circles");
                for(let i=0;i<languageRating.value;i++)
                {
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML="<i class='fa-solid fa-circle rating'></i>"
                    insideNewDiv[languageList.length-1].appendChild(newDiv);
                }
                for(let i=0;i<(5-languageRating.value);i++)
                {
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML="<i class='fa-regular fa-circle unrate'></i>"
                    insideNewDiv[languageList.length-1].appendChild(newDiv);

                }
                let parent_Div=document.querySelector(".languages-form");
                let nextDiv=document.createElement("div");
                nextDiv.class="subform";
                nextDiv.id=leftID;
                parent_Div.appendChild(nextDiv);
                parent_Div=nextDiv;
                let display_Div=document.createElement("div");
                display_Div.innerHTML="<h4>"+languageName.value+"</h4>";

                display_Div.style.border="2px solid black";
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='remove-languages'>X</button>";
                //  let removeButton=document.getElementsByClass("")

                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
                
                languageName.value="";
                languageRating.value="";

            })
        

        

            let linkedinLink=document.getElementById("linkedin");
            let mailLink=document.getElementById("mail");
            let phoneLink=document.getElementById("phone");
            let placeLink=document.getElementById("place");
            let twitterLink=document.getElementById("twitter");
            let nameLink=document.getElementById("nameHeading");
            let buttonLink=document.getElementById("submit-contact-info");

            buttonLink.addEventListener("click",()=>
            {
                console.log("Hello")
                let user_linkedin=linkedinLink.value;
                let user_email=mailLink.value;
                let user_phone=phoneLink.value;
                let user_place=placeLink.value;
                let user_twitter=twitterLink.value;
                // console.log(user_twitter);
                let userName_twitter=((twitterLink.value).split("/"))[3];

                // console.log(userName_twitter);
                user_name=(nameLink.innerHTML);
                user_name=(user_name.split(" ")[0]).toLowerCase();
                console.log(user_name);
                let parentDiv=document.getElementsByClassName("link-icon");
                if(user_linkedin!="")
                {
                    parentDiv[0].innerHTML= "<div class='align-icon'><i class='fa-brands fa-linkedin icons'></i></div><div class='icon-text'><a href="+user_linkedin+" target='_blank' class='iconic'>linkedin/"+user_name+"</a></div>"
                }
                if(user_email!="")
                {
                    parentDiv[1].innerHTML= "<div class='align-icon'><i class='fa-solid fa-envelope icons'></i></div><div class='icon-text'><a href='mailto: "+user_email+" target='_blank' class='iconic'>"+user_email+"</a></div>"
                }
                if(user_phone!="")
                {
                    parentDiv[2].innerHTML= "<div class='align-icon'><i class='fa-solid fa-mobile icons'></i></div><div class='icon-text'><a href='tel:+"+user_phone+" target='_blank' class='iconic'>"+user_phone+"</a></div>"
                }
                if(user_place!="")
                {
                    parentDiv[3].innerHTML= "<div class='align-icon'><i class='fa-solid fa-location-dot icons'></i></div><div class='icon-text'><a href='' target='_blank' class='iconic'>"+user_place+"</a></div>"
                }
                if(user_twitter!="")
                {
                    parentDiv[4].innerHTML= "<div class='align-icon'><i class='fa-brands fa-square-twitter icons'></i></div><div class='icon-text'><a href="+user_twitter+" target='_blank' class='iconic'>"+userName_twitter+"</a></div>"
                }
                
                linkedinLink.value="";
                mailLink.value="";
                phoneLink.value="";
                placeLink.value="";
                twitterLink.value="";
                


            })

            let workExpList=[];
            let addDescButton=document.getElementById("add-desc");
            let roleName=document.getElementById("role-name");
            let companyName=document.getElementById("company-name");
            let workLocation=document.getElementById("work-location");
            let dateFrom=document.getElementById("date-from");
            let dateTo=document.getElementById("date-to");
            let descr=document.getElementsByClassName("work-exp-desc");
            let workExpButton=document.getElementById("submit-work-exp");
            

            addDescButton.addEventListener("click",()=>
            {
                
                let parentDiv=document.getElementsByClassName("complete-desc");
                console.log(parentDiv[0]);
                let newDesc=document.createElement("textarea");
                console.log(newDesc);
                newDesc.classList.add("work-exp-desc");
                // newDesc.name="description";
                newDesc.rows="3";
                newDesc.cols="40";
                console.log(newDesc);
                parentDiv[0].appendChild(newDesc);
                

            }
            )

            workExpButton.addEventListener("click",()=>
            {
                let workExp_element={role: roleName.value,company: companyName.value,location:workLocation.value,dateFrom:dateFrom.value,dateTo:dateTo.value,description:[]};
                for (var i = 0; i < descr.length; i++) 
                {
                    workExp_element.description.push(descr[i].value);
                }
                mmFrom=dateFrom.value.split("-")[1];
                mmTo=dateTo.value.split("-")[1];
                yyyyTo=dateFrom.value.split("-")[0];
                yyyyFrom=dateTo.value.split("-")[0];
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi;
                let rightID="right-"+idi;
                let parentDiv=document.getElementsByClassName("work-exp-container");
                let newDiv=document.createElement("div");
                newDiv.id=rightID;
                // console.log(roleName);
                newDiv.innerHTML=`
                <h4>${roleName.value}</h4>
                <h4 id="company-name">${companyName.value}</h4>
                <div class="date-place">
                    <div class="date">${mmFrom}-${yyyyFrom} - ${mmTo}-${yyyyTo}</div>
                    <div class="place">${workLocation.value}</div>

                </div>
                `
                let newChildDiv=document.createElement("div");
                let ul=document.createElement("ul");
                ul.classList.add="space-bottom";
                for(let i=0;i<descr.length;i++)
                {
                    let li=document.createElement("li");
                    li.textContent=(descr[i].value);
                    ul.appendChild(li);
                }
                newChildDiv.appendChild(ul);
                newDiv.appendChild(newChildDiv);
                
                
                parentDiv[0].appendChild(newDiv);

                let parent_Div=document.querySelector(".work-exp-form");
                let nextDiv=document.createElement("div");
                nextDiv.class="subform";
                nextDiv.id=leftID;
                parent_Div.appendChild(nextDiv);
                parent_Div=nextDiv;
                let display_Div=document.createElement("div");
                display_Div.innerHTML="<h4>"+companyName.value+"</h4>";

                display_Div.style.border="2px solid black";
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='remove-languages'>X</button>";
                //  let removeButton=document.getElementsByClass("")
                workExpList.push(workExp_element);
                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
                roleName.value="";
                companyName.value="";
                workLocation.value="";
                dateFrom.value="";
                dateTo.value="";
                descr[0].value="";
                // console.log("hello");
                for (let i = 1; i < descrProject.length; ) 
                {
                    // console.log(descrProject[i].className);
                    
                    descr[i].remove();
                }

            })

            let projectList=[];
            let addProjectDescButton=document.getElementById("add-project-desc");
            let projectName=document.getElementById("project-name");
            let dateFromProject=document.getElementById("date-from-project");
            let dateToProject=document.getElementById("date-to-project");
            let descrProject=document.getElementsByClassName("project-desc");
            let projectButton=document.getElementById("submit-project");

            addProjectDescButton.addEventListener("click",()=>
            {
                
                let parentDiv=document.getElementsByClassName("complete-project-desc");
                console.log(parentDiv[0]);
                let newDesc=document.createElement("textarea");
                console.log(newDesc);
                newDesc.classList.add("project-desc");
                // newDesc.name="description";
                newDesc.rows="3";
                newDesc.cols="40";
                console.log(newDesc);
                parentDiv[0].appendChild(newDesc);
                

            }
            )

            projectButton.addEventListener("click",()=>
            {
                mmFrom=dateFromProject.value.split("-")[1];
                mmTo=dateToProject.value.split("-")[1];
                yyyyTo=dateFromProject.value.split("-")[0];
                yyyyFrom=dateToProject.value.split("-")[0];
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi+"-project";
                let rightID="right-"+idi+"-project";
                let type="-project";
                idi=idi+type;
                let project_element={name: projectName.value,dateFrom:dateFromProject.value,dateTo:dateToProject.value,description:[],id:idi};
                for (var i = 0; i < descrProject.length; i++) 
                {
                    console.log(descrProject[i].value);
                    project_element.description.push(descrProject[i].value);
                }
                let parentDiv=document.getElementsByClassName("project-container");
                let newDiv=document.createElement("div");
                newDiv.id=rightID;
                // console.log(roleName);
                newDiv.innerHTML=`
               
                <h4 class="project">${projectName.value}</h4>
                <div class="date-place">
                    <div class="date">${mmFrom}-${yyyyFrom} - ${mmTo}-${yyyyTo} </div>

                </div>
                `
                let newChildDiv=document.createElement("div");
                let ul=document.createElement("ul");
                ul.classList.add="space-bottom";
                for(let i=0;i<descrProject.length;i++)
                {
                    let li=document.createElement("li");
                    li.textContent=(descrProject[i].value);
                    ul.appendChild(li);
                }
                newChildDiv.appendChild(ul);
                newDiv.appendChild(newChildDiv);
                
                
                parentDiv[0].appendChild(newDiv);

                let parent_Div=document.querySelector(".project-form");
                let nextDiv=document.createElement("div");
                nextDiv.class="subform";
                nextDiv.id=leftID;
                parent_Div.appendChild(nextDiv);
                parent_Div=nextDiv;
                let display_Div=document.createElement("div");
                display_Div.innerHTML="<h4>"+projectName.value+"</h4>";

                display_Div.style.border="2px solid black";
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='remove-project'>X</button>";
                //  let removeButton=document.getElementsByClass("")
                projectList.push(project_element);
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='edit-project'>Edit</button>";
                //  let removeButton=document.getElementsByClass("")
                // educationList.push(education_element);
                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
              
                projectName.value="";
                dateFromProject.value="";
                dateToProject.value="";
                descrProject[0].value="";
                // console.log("hello");
                for (let i = 1; i < descrProject.length; ) 
                {
                    // console.log(descrProject[i].className);
                    
                    descrProject[i].remove();
                }
            

            })
            
  


            

            educationButton.addEventListener("click",()=>
            {
                
                
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi+"-education";
                let rightID="right-"+idi+"-education";
                let type="-education"
                idi=idi+type;
                console.log(leftID);
                let education_element={degree: degreeName.value,specialization:specializationEdu.value,college:collegeName.value,dateFrom:dateFromEdu.value,dateTo:dateToEdu.value,cgpa:courseCgpa.value,id:idi};
                mmFrom=dateFromEdu.value.split("-")[1];
                mmTo=dateToEdu.value.split("-")[1];
                yyyyTo=dateFromEdu.value.split("-")[0];
                yyyyFrom=dateToEdu.value.split("-")[0];
                let parentDiv=document.getElementsByClassName("education-container");
                let newDiv=document.createElement("div");
                newDiv.id=rightID;
                // console.log(roleName);
                newDiv.innerHTML=`
                <h4 class="degree">${degreeName.value} in ${specializationEdu.value} </h4>
                <h4>${collegeName.value} </h4>
                <div class="date-place">
                    <div class="date">${mmFrom}-${yyyyFrom} - ${mmTo}-${yyyyTo}</div>
                    <div class="place">CGPA- ${courseCgpa.value}</div>
                </div>
                <br>
                `
                parentDiv[0].appendChild(newDiv);
                let parent_Div=document.querySelector(".education-form");
                let nextDiv=document.createElement("div");
                nextDiv.class="subform";
                nextDiv.id=leftID;
                parent_Div.appendChild(nextDiv);
                parent_Div=nextDiv;
                let display_Div=document.createElement("div");
                display_Div.innerHTML="<h4>"+degreeName.value+"</h4>";

                display_Div.style.border="2px solid black";
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='remove-education'>X</button>";
                //  let removeButton=document.getElementsByClass("")
                educationList.push(education_element);
                parent_Div.appendChild(display_Div);
                display_Div=document.createElement("div");
                display_Div.innerHTML="<button class='edit-education'>Edit</button>";
                //  let removeButton=document.getElementsByClass("")
                // educationList.push(education_element);
                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
              
                degreeName.value="";
                specializationEdu.value="";
                collegeName.value="";
                dateFromEdu.value="";
                dateToEdu.value="";
                courseCgpa.value="";
            })


            


      