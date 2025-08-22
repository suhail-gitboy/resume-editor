import React from "react";
import "./modern.css"
const Modern = ({ resumedata }) => {
  return (



    <div class="container">
      <div class="headermodern">
        <div class="full-name">
          <span class="first-name">{resumedata.personalInfo.name}</span>

        </div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">{resumedata.personalInfo.email}</span>
          <span class="separator"></span>
          <span class="phone">Phone: </span>
          <span class="phone-val">{resumedata.personalInfo.phone}</span>
        </div>

        <div class="about">
          <span class="position">{resumedata.experience.role} </span>
          <span class="desc">
            I am a {resumedata.personalInfo.ambition}
          </span>
        </div>
      </div>
      <div class="details">
        <div class="section">
          <div class="section__title">Experience</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">{resumedata.experience.company}</div>
                <div class="addr">{resumedata.experience.role}</div>
                <div class="duration">{resumedata.experience.duration}</div>
              </div>
              <div class="right">
                <div class="name">{resumedata.experience.role}</div>
                <div class="desc">did This and that</div>
              </div>
            </div>

          </div>
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">{resumedata.education.school}</div>

                  <div class="duration">{resumedata.education.duration}</div>
                </div>
                <div class="right">
                  <div class="name">{resumedata.education.degree}</div>

                </div>
              </div>


            </div>

          </div>
          <div class="section">
            <div class="section__title">Projects</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="name">DSP</div>
                <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
              </div>


            </div>
          </div>
          <div class="section">
            <div class="section__title">Skills</div>
            <div class="skills">
              <div class="skills__item">
                <div class="left"><div class="name">
                  {resumedata.skill.skillone}
                </div></div>
                <div class="right">
                  <input id="ck1" type="checkbox" checked />

                  <label for="ck1"></label>
                  <input id="ck2" type="checkbox" checked />

                  <label for="ck2"></label>
                  <input id="ck3" type="checkbox" />

                  <label for="ck3"></label>
                  <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                  <input id="ck5" type="checkbox" />
                  <label for="ck5"></label>

                </div>
              </div>

            </div>
            <div class="skills__item">
              <div class="left"><div class="name">
                {resumedata.skill.skilltwo}</div></div>
              <div class="right">
                <input id="ck1" type="checkbox" checked />

                <label for="ck1"></label>
                <input id="ck2" type="checkbox" checked />

                <label for="ck2"></label>
                <input id="ck3" type="checkbox" />

                <label for="ck3"></label>
                <input id="ck4" type="checkbox" />
                <label for="ck4"></label>
                <input id="ck5" type="checkbox" />
                <label for="ck5"></label>

              </div>
            </div>

          </div>
          <div class="section">
            <div class="section__title">
              Interests
            </div>
            <div class="section__list">
              <div class="section__list-item">
                {resumedata.hobbies.hobbyone}, {resumedata.hobbies.hobbytwo}.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
};

export default Modern;
