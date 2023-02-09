let topic=document.getElementById("topic");



let lastTopicValue="None";
// console.log(topic.value);
topic.addEventListener("change",()=>{
    if(lastTopicValue!="None")
    document.getElementsByClassName(lastTopicValue+"-form")[0].classList.add("sub-form");
    document.getElementsByClassName(topic.value+"-form")[0].classList.remove("sub-form");

    // if(lastTopicValue!=topic.value)
    // {
        
    //     if(topic.value==="intro")
    //     {
    //         let name=document.getElementById("name");
    //         let role=document.getElementById("role");
    //         let description=document.getElementById("desc");
    //         let button=document.getElementById("submit-btn");
    //         button.addEventListener("click",()=>
    //         {
                
    //             console.log(name.value);
    //             console.log(description.value);
    //             let userName=document.querySelector(".intro h1");
    //             let userRole=document.querySelector(".intro h4");
    //             let userDescription=document.querySelector(".intro p");
    //             userName.innerHTML=name.value;
    //             userRole.innerHTML=role.value;
    //             userDescription.innerHTML=description.value;
    //             name.value="";
    //             role.value="";
    //             description.value="";

    //         })
    //     }
    //     else if(topic.value==="skills")
    //     {
    //         let skillName=document.getElementById("skill-name");
    //         let skillPercentage=document.getElementById("skill-percentage");
    //         let button=document.getElementById("skills-btn");
    //         button.addEventListener("click",()=>
    //         {
                
                

    //         })
    //     }

        
        lastTopicValue=topic.value;
    // }
    
    
    
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
                
                let existingDiv = document.getElementById("add-skills");
                let newDiv = document.createElement("div");
                newDiv.className="skills";
                newDiv.innerHTML="<div class='border-element'><div class='inside-skills-container'><h4>"+skillName.value+"</h4> </div></div>";
                existingDiv.appendChild(newDiv);
                let insideNewDiv=document.querySelectorAll(".inside-skills-container");
                insideNewDiv[skillList.length-1].style.width=""+skillPercentage.value+"%";
                
                let parent_Div=document.querySelector(".form");
                let nextDiv=document.createElement("div");
                newDiv.class="subform";
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
            let removeLanguage=document.getElementById("remove-skills");
            let parentDiv=document.getElementsByClassName("form");
            parentDiv[0].addEventListener("click",(e)=> {
                if (e.target.nodeName === 'BUTTON') {
                    console.log(e.target.nodeName);

                    let parent=(e.target.parentNode).parentNode;
                    let child=(parent.children[0]).children[0];
                    let name=child.innerHTML;
                    let removeValue;
                    for(let i=0;i<skillList.length;i++)
                    {
                        if(skillList[i].skill===name)
                        {
                            
                            removeValue=skillList[i];
                            
                            break;
                        }
                    }
                    skillList = skillList.filter(item => item !== removeValue)
                    console.log(skillList);
                    let skill_remove=document.querySelectorAll(".inside-skills-container");
                    for (let i = 0; i < skill_remove.length; i++) {
                        var check_value=skill_remove[i].firstElementChild.innerHTML;
                        // console.log(check_value);
                        // console.log("Hello");
                        // console.log(removeValue);
                        if(check_value===removeValue.skill)
                        {
                            // console.log(check_value);
                            // console.log("ho");
                            (skill_remove[i].parentNode).remove();
                            break;
                        }
                    }

                    // skillList.remove(removeValue);
                    console.log(child.innerHTML);
                    console.log(parent);
                    parent.remove();
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
                
                let existingDiv = document.getElementsByClassName("languages");
                let newDiv = document.createElement("div");
                newDiv.className="inside-languages-container";
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
                
                languageName.value="";
                languageRating.value="";

            })
        

        
    
