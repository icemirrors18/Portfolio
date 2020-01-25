import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at IMA Life <span>2017-present</span></h2>
                        <p>During my undergraduate studies, I interned at IMA Life.  Upon completion of my degree, I was hired to a full-time position.  I utilize my skills in C# and VBA to develop clear, efficient SCADA systems to interface with industrial freezedryers.  I occassionally leverage my skills in Python to develop in-house tools, such as an employee training record tracker and a project setup automation tool. Additionally, I help to design SQL databases and stored proceedures to store historical data and generate FDA audit reports.</p>
                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
					<div className="timeline-entry-inner">
					  <div className="timeline-icon color-4">
					    <i className="icon-pen2" />
					  </div>
					  <div className="timeline-label">
						<h2>Senior Design Project at Northrop Grumman <span>2018-2018</span></h2>
						<p>I had the opportunity to particpate in Northrop Grumman's Senior Design project where I worked with a group of my classmates to develop a standalone application to visualize 3D aircraft models.  During this time, we designed a standalone Python application that allowed 3D models to be viewed and manipulated.  In addition to contributing to coding this project, I was responsible for leading out team meeting with Senior Engineers at Northrop Grumman where I outlined our progress each week and addressed feedback.</p>
					  </div>
					</div>
				  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
					<div className="timeline-entry-inner">
					  <div className="timeline-icon color-2">
					    <i className="icon-pen2" />
					  </div>
					  <div className="timeline-label">
						<h2>Undergraduate at SUNY Univerity at Buffalo<span>2014-2018</span></h2>
						<p>I received my B.S. in Computer Science on June 1st, 2018.  While pursuing my degree, I studied fundamentals of Computer Science such as algorithms, data structures, object-oriented programming, and test driven development.</p>
					  </div>
					</div>
				  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
