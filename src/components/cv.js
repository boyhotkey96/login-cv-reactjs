import React from 'react';
import './../css/style.css';
import avatar from '../images/avt.JPG';
import Baitap from './baitap.js';

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.link = this.link.bind(this);
    }
    link() {
        this.setState({
            isShow: true
        })
    }
    render() {
        if (this.state.isShow) {
            return <Baitap />
        }
        return (
            <div className="wrapper">
                {/* Start Left */}
                <div id="left" ref="left">
                  {/* Avatar */}
                  <div className="left-top">
                    <div className="avatar2">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="intro">
                      <p>Phùng Bá Dự</p>
                      <span>Front-end Programming</span>
                    </div>
                  </div>
                  <div className="left-bot">
                    {/* Gioithieu */}
                    <div className="left-bot-content">
                      <div className="title">
                        <i className="fa fa-calendar-alt" />
                        <span>Jan 16, 1996</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-male" />
                        <span>Male</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-phone" />
                        <span>0974.230.141</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-envelope" />
                        <span>boyhotkey96@gmail.com</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-address-book" />
                        <span>566/105/70 Nguyen Thai Son, Ward 5, Go Vap District, Ho Chi  Minh City</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-info" />
                        <span>https://www.facebook.com/boyhotkey96</span>
                      </div>
                    </div>
                    {/* OBJECTIVE */}
                    <div className="left-bot-objective">
                      <p>OBJECTIVE</p>
                      <span>Find a job in a professional environment, respect each other. Where is the recognized and rewarded work performance.</span>
                    </div>
                    {/* SKILLS */}
                    <div className="skill">
                      <div className="skill-title">
                        <p>SKILLS</p>
                      </div>
                      <div className="skills">
                        <p>Java</p>
                        <progress value={60} max={100} />
                      </div>
                      <div className="skills">
                        <p>Android</p>
                        <progress value={80} max={100} />
                      </div>
                      <div className="skills">
                        <p>React Native</p>
                        <progress value={60} max={100} />
                      </div>
                      <div className="skills">
                        <p>HTML &amp; CSS</p>
                        <progress value={80} max={100} />
                      </div>
                      <div className="skills">
                        <p>Bootstrap</p>
                        <progress value={60} max={100} />
                      </div>
                      <div className="skills">
                        <p>Javascript <a onClick={this.link}>Link</a></p>
                        <progress value={40} max={100} />
                      </div>
                      <div className="skills">
                        <p>Git</p>
                        <progress value={60} max={80} />
                      </div>
                      <div className="skills">
                        <p>Seo</p>
                        <progress value={60} max={80} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Left */}
                {/* Start Right */}
                <div id="right" ref="right">
                  {/* EDUCATION */}
                  <div className="right-education">
                    <div className="education-content">
                      <i className="fa fa-graduation-cap" />
                      <span className="title-skill">EDUCATION</span>
                    </div>
                    <div className="cc-left">
                      <p className="cc-left-p">FPT: POLYTECHNIC</p>
                      <span>Major: Mobile Programing</span>
                    </div>
                    <div className="cc-right">
                      <p>SEP 2015 - 2019</p>
                    </div>
                    <div className="clear" />
                  </div>
                  {/* EXPERIENCE */}
                  <div className="right-experience">
                    <div className="experience-content">
                      <i className="fa fa-briefcase" />
                      <span className="title-skill">WORK EXPERIENCE</span>
                    </div>
                    <div>
                      <div className="ex-left">
                        <p className="ex-left-p">FPT POLYTECHNIC</p>
                        <span>Student</span>
                        <div className="subtitle">
                          <p>- Web design with Dreamweaver.</p>
                          <p>- Java, Android.</p>
                          <p>- HTML &amp; CSS, Bootstrap</p>
                          <p>- Javascript (Javascript, React Native).</p>
                          <p>- Database &amp; MYSQL.</p>
                          <p>- Domain &amp; Hosting.</p>
                          <p>- Seo Marketing.</p>
                          <p>- Github.</p>
                        </div>
                      </div>
                      <div className="ex-right">
                        <p>SEP 2015 - 2019</p>
                      </div>
                      <div className="clear" />
                      {/* COMPANY EWAY.VN */}
                      <div className="ex-left">
                        <p className="ex-left-p">COMPANY EWAY.VN</p>
                        <span>Member at Eway</span>
                        <div className="subtitle">
                          <p>- Mod game.</p>
                          <p>- Advertising game.</p>
                          <p>- Attach SMS payment for Java/Android application.</p>
                          <p>- Attach adflex ads.</p>
                        </div>
                      </div>
                      <div className="ex-right">
                        <p>MAR 2011 - MAY 2014</p>
                      </div>
                      <div className="clear" />
                      {/* COMPANY MWORK.VN */}
                      <div className="ex-left">
                        <p className="ex-left-p">COMPANY MWORK.VN</p>
                        <span>Member at Mwork</span>
                        <div className="subtitle">
                          <p>- Application advertising.</p>
                          <p>- Advertising games.</p>
                          <p>- Mod Application.</p>
                        </div>
                      </div>
                      <div className="ex-right">
                        <p>MAR 2011 - MAY 2014</p>
                      </div>
                      <div className="clear" />
                    </div>
                    {/* Start ACTIVITIES */}
                    <div className="right-activities">
                      <div className="activities-content">
                        <i className="fa fa-users" />
                        <span className="title-skill">ACTIVITIES</span>
                      </div>
                      <div className="cc-left">
                        <p className="cc-left-p">FRONT-END PROGRAMMING GROUP</p>
                        <span>Member</span>
                        <div className="subtitle">
                          <p>One of the experiences I received was to regularly view posts and comment on programming groups on facebook.</p>
                        </div>
                      </div>
                      <div className="cc-right">
                        <p>JUN 2016 - PRESENT</p>
                      </div>
                      <div className="clear" />
                    </div>
                    {/* End Activity */}
                    {/* Start CERTIFICATIONS */}
                    <div className="right-certifications">
                      <div className="certifications-content">
                        <i className="fa fa-users" />
                        <span className="title-skill">CERTIFICATIONS</span>
                      </div>
                      <div className="cc-left">
                        <div className="subtitle">
                          <p>Android Basic certificate, Android Advanced is granted by Nhat Nghe Information Technology Training Center.</p>
                        </div>
                      </div>
                      <div className="cc-right">
                        <p>2018</p>
                      </div>
                      <div className="clear" />
                    </div>
                    {/* End CERTIFICATIONS */}
                    {/* Start REFERENCES */}
                    <div className="right-references">
                      <div className="references-content">
                        <i className="fa fa-external-link-square-alt" />
                        <span className="title-skill">REFERENCES</span>
                      </div>
                      <div className="cc-left">
                        <div className="subtitle">
                          <p>- Participated in internship at Spider Company.</p>
                          <p>- Some products have been completed during the learning process: <i>https://boyhotkey96.github.io/</i></p>
                          <p>- Admin at website: http://giaitrihit.com &amp; http://ongphung.com</p>
                        </div>
                      </div>
                      <div className="cc-right">  
                      </div>
                      <div className="clear" />
                    </div>
                    <div className="cc-left">
                    </div>
                    <div className="cc-right">
                      <p className="topcv">© topcv.vn</p>
                    </div>
                    <div className="clear" />

                    {/* End REFERENCES */}
                  </div>
                </div>
                <div className="clear" />
                {/* End Right */}
            </div>
        );
    }
}

export default Cv;