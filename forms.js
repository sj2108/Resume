let educationForm = ` 
            <div class="education-form">
            <h1>EDUCATION</h1>
            <br />
            <div>
              <label for="degree-name">Degree</label>
              <input type="text" id="degree-name" />
            </div>

            <br />
            <div>
              <label for="specialization">Specialization</label>
              <input type="text" id="specialization" />
            </div>
            <br />
            <div>
              <label for="college-name">Institute Name</label>
              <input type="text" id="college-name" />
            </div>
            <br />
            <div>
              <label for="date-from-edu">Date from (mm/yyyy)</label>
              <input type="month" id="date-from-edu" />
            </div>
            <br />
            <div>
              <label for="date-to-edu">Date to (mm/yyyy)</label>
              <input type="month" id="date-to-edu" />
            </div>
            <br />
            <div>
              <label for="cgpa">CGPA</label>
              <input type="text" id="cgpa" />
            </div>
            <br />

            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-education" />
            <input onclick="confirmEditInsideSection(event)" type="button" value="confirm" id="confirm-education" />
            <br />
            <input onclick="cancelEditInsideSection(event)"type="button" value="cancel" id="cancel-education" />
            <br />
            </div>
`;
let projectForm = ` 
            <div class="project-form">
            <h1>PROJECT</h1>
            <br />
            <div>
              <label for="project-name">Project Title</label>
              <input type="text" id="project-name" />
            </div>

            <br />
            <div>
              <label for="date-from">Date form (mm/yyyy)</label>
              <input type="month" id="date-from-project" />
            </div>
            <br />
            <div>
              <label for="date-to">Date to (mm/yyyy)</label>
              <input type="month" id="date-to-project" />
            </div>
            <br />
            <div class="complete-project-desc">
              <label for="project-desc">Description(Enter pointwise)</label>
              <textarea
                class="project-desc"
                name="description-project"
                rows="3"
                cols="40"
              ></textarea>
            </div>
            <br />
            
            <input onclick="addDescriptionRows(event)" type="button" value="Add description" id="add-project-desc" />
            <br>
            <br>
            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-project" class="submit-button" />
            <input onclick="confirmEditInsideSection(event)" type="button" value="confirm" id="confirm-project" class="confirm-button" onclick="" />
            <br />
            <input onclick="cancelEditInsideSection(event)" type="button" value="cancel" id="cancel-project" class="cancel-button" />
            
          </div>
`;

let workexpForm = `
<div class="workexp-form ">
            <br />
            <div>
              <label for="role-name">Role</label>
              <input type="text" id="role-name" />
            </div>
            <br />
            <div>
              <label for="company-name">Company Name</label>
              <input type="text" id="company-name" />
            </div>
            <br />
            <div>
              <label for="work-location">Location</label>
              <input type="text" id="work-location" />
            </div>
            <br />
            <div>
              <label for="date-from">Date form (mm/yyyy)</label>
              <input type="month" id="date-from" />
            </div>
            <br />
            <div>
              <label for="date-to">Date to (mm/yyyy)</label>
              <input type="month" id="date-to" />
            </div>
            <br />
            <div class="complete-desc">
              <label for="workexp-desc">Description(Enter pointwise)</label>
              <textarea
                class="workexp-desc"
                name="description"
                rows="3"
                cols="40"
              ></textarea>
            </div>
            <br />
           
            <input onclick="addDescriptionRows(event)" type="button" value="Add description" id="add-workexp-desc" />
            <br>
            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-workexp" />
            <input onclick="confirmEditInsideSection(event)" type="button" value="confirm" id="confirm-workexp" />
            <br />
            <input onclick="cancelEditInsideSection(event)" type="button" value="cancel" id="cancel-workexp" />
          </div>`; 
let noForm='';
let introForm = `<div class="intro-form">
            <br />
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" />
            </div>
            <br />
            <div>
              <label for="role">Role</label>
              <input type="text" id="role" />
            </div>
            <br />
            <div>
              <label for="desc">Description</label>
              <textarea
                id="desc"
                name="description"
                rows="4"
                cols="40"
              ></textarea>
              <br>
            </div>
            <br />
            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-intro" class="submit-button" />
            <input type="button" value="confirm" id="confirm-introduction" class="confirm-button" onclick="" />
            <br />
            <input type="button" value="cancel" id="cancel-introduction" class="cancel-button" />
          </div>`;

let imageForm = `<div class="image-form ">
            <input type="file" id="profile-image" name="filename">
            <br />
            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-image" />
          </div>`;

let skillsForm = `          
            <div class="skills-form">
            <br />
            <div>
              <label for="skill-name">Skill-Name</label>
              <input type="text" id="skill-name" />
            </div>
            <br />
            <div>
              <label for="skill-percentage">Percentage</label>
              <input type="text" id="skill-percentage" />
            </div>
            <br />

            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-skills" />
          </div>
          `;

let languagesForm = `
<div class="languages-form">
            <br />
            <div>
              <label for="languages-name">Language Name</label>
              <input type="text" id="languages-name" />
            </div>
            <br />
            <div>
              <label for="languages-rating">Rating(out of 5)</label>
              <input type="text" id="languages-rating" />
            </div>
            <br />

            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-languages" />
          </div>

`;
let weblinksForm = `
            <div class="weblinks-form">
            <br />

            <div>
              <label for="linkedin">LinkedIN</label>
              <input type="text" id="linkedin" />
            </div>
            <br />
            <div>
              <label for="mail">Email Id</label>
              <input type="text" id="mail" />
            </div>
            <br />
            <div>
              <label for="phone">Phone Number</label>
              <input type="text" id="phone" />
            </div>
            <br />
            <div>
              <label for="place">Location</label>
              <input type="text" id="place" />
            </div>
            <br />
            <div>
              <label for="twitter">Twitter</label>
              <input type="text" id="twitter" />
            </div>
            <br />

            <input onclick="submitFormButton(event)" type="button" value="submit" id="submit-weblinks" />
          </div>
`;

export let formData =
{
    "education" : educationForm,
    "none" : noForm,
    "project" : projectForm,
    "workexp" : workexpForm,
    "skills" : skillsForm,
    "languages" : languagesForm,
    "intro" : introForm,
    "image" : imageForm,
    "weblinks" : weblinksForm
}