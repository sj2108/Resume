let topic=document.getElementById("topic");



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
                


                skillName.value="";
                skillPercentage.value="";

            })
            // let removeLanguage=document.getElementById("remove-skills");
            let parentDiv=document.getElementsByClassName("form");
            parentDiv[0].addEventListener("click",(e)=> {
                if (e.target.nodeName === 'BUTTON') {
                    // console.log(e.target);
                    // let value=(e.target).getAttribute('id')
                    // console.log(value);

                    let parent=(e.target.parentNode).parentNode;
                    console.log(parent);
                    element_id=parent.getAttribute("id");
                    element_id=element_id.split("-")[1];
                    element_id="right-"+element_id;
                    parent.remove();

                    let element_remove=document.getElementById(element_id);
                    // console.log(element_remove);
                    element_remove.remove();
                   
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
                // <div class="link-icon">
                // <div class="align-icon"><i class="fa-solid fa-envelope icons"></i></div>
                // <div class="icon-text"><a href="mailto: s2108j@gmail.com" target="_blank" class="iconic">s2108j@gmail.com</a></div>
                // </div>
                // <div class="link-icon">
                // <div class="align-icon"><i class="fa-solid fa-mobile icons"></i></div>
                // <div class="icon-text" ><a href="tel:+9638749427" target="_blank" class="iconic">9638749427</a></div>
                // </div>
                // <div class="link-icon">
                // <div class="align-icon"><i class="fa-solid fa-location-dot icons"></i></div>
                // <div class="icon-text"><a href="https://goo.gl/maps/UQarQysp7au5hPoXA" target="_blank" class="iconic">Ahmedabad</a></div>
                // </div>
                // <div class="link-icon">
                // <div class="align-icon"><i class="fa-brands fa-square-twitter icons"></i></div>
                // <div class="icon-text"><a href="https://twitter.com/shreyansh_2108" target="_blank" class="iconic">shreyansh_2108</a></div>
                // </div>
                // <div class="link-icon">
                // <div class="align-icon"><i class="fa-brands fa-linkedin icons"></i></div>
                // <div class="icon-text"><a href="https://linkedin.com/in/shreyansh-jain-695320192/" target="_blank" class="iconic">linkedin/shreyanshjain</a></div>
                // </div>
                
                // let language_element={name: languageName.value,rating: languageRating.value };
                // languageList.push(language_element);
                // // console.log(languageList);
                // let idi = "id" + Math.random().toString(16).slice(2);
                // let leftID="left-"+idi;
                // let rightID="right-"+idi;
                
                // let existingDiv = document.getElementsByClassName("languages");
                // let newDiv = document.createElement("div");
                // newDiv.className="inside-languages-container";
                // newDiv.id=rightID;
                // newDiv.innerHTML="<h4>"+languageName.value+"</h4><div class='place-circles'></div>";
                // existingDiv[0].appendChild(newDiv);
                // insideNewDiv=document.getElementsByClassName("place-circles");
                // for(let i=0;i<languageRating.value;i++)
                // {
                //     let newDiv = document.createElement("div");
                //     newDiv.innerHTML="<i class='fa-solid fa-circle rating'></i>"
                //     insideNewDiv[languageList.length-1].appendChild(newDiv);
                // }
                // for(let i=0;i<(5-languageRating.value);i++)
                // {
                //     let newDiv = document.createElement("div");
                //     newDiv.innerHTML="<i class='fa-regular fa-circle unrate'></i>"
                //     insideNewDiv[languageList.length-1].appendChild(newDiv);

                // }
                // let parent_Div=document.querySelector(".languages-form");
                // let nextDiv=document.createElement("div");
                // nextDiv.class="subform";
                // nextDiv.id=leftID;
                // parent_Div.appendChild(nextDiv);
                // parent_Div=nextDiv;
                // let display_Div=document.createElement("div");
                // display_Div.innerHTML="<h4>"+languageName.value+"</h4>";

                // display_Div.style.border="2px solid black";
                // parent_Div.appendChild(display_Div);
                // display_Div=document.createElement("div");
                // display_Div.innerHTML="<button class='remove-languages'>X</button>";
                // //  let removeButton=document.getElementsByClass("")

                // parent_Div.appendChild(display_Div);
                // parent_Div.style.display="flex";
                
                // languageName.value="";
                // languageRating.value="";
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
            // <div class="complete-desc">
            //     <label for="work-exp-desc" >Description(Enter pointwise)</label>
            //     <textarea id="work-exp-desc" name="description" rows="3" cols="40"></textarea>
            // </div>
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
                    workExp_element.description.push(descr[i]);
                }
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
                    <div class="date">${dateFrom.value} - ${dateTo.value}</div>
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
                for (let i = 0; i < descr.length; i++) 
                {
                    descr[i].value="";
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
                let project_element={name: projectName.value,dateFrom:dateFromProject.value,dateTo:dateToProject.value,description:[]};
                for (var i = 0; i < descrProject.length; i++) 
                {
                    project_element.description.push(descrProject[i]);
                }
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi;
                let rightID="right-"+idi;
                let parentDiv=document.getElementsByClassName("project-container");
                let newDiv=document.createElement("div");
                newDiv.id=rightID;
                // console.log(roleName);
                newDiv.innerHTML=`
               
                <h4 class="project">${projectName.value}</h4>
                <div class="date-place">
                    <div class="date">${dateFromProject.value} - ${dateToProject.value}</div>

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
                display_Div.innerHTML="<button class='remove-languages'>X</button>";
                //  let removeButton=document.getElementsByClass("")
                projectList.push(project_element);
                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
              
                projectName.value="";
                dateFromProject="";
                dateToProject="";
                for (let i = 0; i < descr.length; i++) 
                {
                    descrProject[i].value="";
                }

            })
            
  


            let educationList=[];
            let degreeName=document.getElementById("degree-name");
            let specializationEdu=document.getElementById("specialization");
            let collegeName=document.getElementById("college-name");
            let dateFromEdu=document.getElementById("date-from-edu");
            let dateToEdu=document.getElementById("date-to-edu");
            let courseCgpa=document.getElementById("cgpa")
            let educationButton=document.getElementById("submit-education");

            educationButton.addEventListener("click",()=>
            {
                let education_element={degree: degreeName.value,specialization:specializationEdu.value,college:collegeName.value,From:dateFromEdu.value,dateTo:dateToEdu.value,cgpa:courseCgpa.value};
                
                let idi = "id" + Math.random().toString(16).slice(2);
                let leftID="left-"+idi;
                let rightID="right-"+idi;
                let parentDiv=document.getElementsByClassName("education-container");
                let newDiv=document.createElement("div");
                newDiv.id=rightID;
                // console.log(roleName);
                newDiv.innerHTML=`
                <h4 class="degree">${degreeName.value} in ${specializationEdu.value} </h4>
                <h4>${collegeName.value} </h4>
                <div class="date-place">
                    <div class="date">${dateFromEdu.value} - ${dateToEdu.value}</div>
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
                display_Div.innerHTML="<button class='remove-languages'>X</button>";
                //  let removeButton=document.getElementsByClass("")
                educationList.push(education_element);
                parent_Div.appendChild(display_Div);
                parent_Div.style.display="flex";
              
                degreeName.value="";
                specializationEdu.value="";
                collegeName.value="";
                dateFromEdu.value="";
                dateToEdu.value="";
                courseCgpa="";
            })


            


        //     <div class="education-form sub-form">
                        
        //                 <br>
        //                 <div>
        //                 <label for="degree-name" >Degree</label>
        //                 <input type="text" id="degree-name">
        //                 </div>
                        
        //                 <br>
        //                 <div>
        //                     <label for="specialization" >Specialization</label>
        //                     <input type="text" id="specialization">
        //                 </div>
        //                 <br>
        //                 <br>
        //                 <div>
        //                     <label for="college-name" >Institute Name</label>
        //                     <input type="text" id="college-name">
        //                 </div>
        //                 <br>
        //                 <div>
        //                     <label for="date-from-edu" >Date from (mm/yyyy)</label>
        //                     <input type="text" id="date-from-edu">
        //                 </div>
        //                 <div>
        //                     <label for="date-to-edu" >Date to (mm/yyyy)</label>
        //                     <input type="text" id="date-to-edu">
        //                 </div>
        //                 <br>
                        
        //                 <input type="button" value="submit" id="submit-education">
        //             </div>

              
        //     <div class="education-container"></div>
            
        //     <h4 class="degree">B.Tech in Computer Science </h4>
        //     <h4>The LNM Institute of Information Technology </h4>
        //     <div class="date-place">
        //         <div class="date">08/2019 - 08/2023</div>
        //         <div class="place">CGPA - 7.17</div>
        //     </div>
        // </div>