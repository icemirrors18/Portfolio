import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="resume">
		  <div className="colorlib-narrow-content">
			  <div className="row">
				  <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Resume</span>
					<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1RAeHBHsOUNB7leggdNVbTlfbVyCUfw3k/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
				  </div>
			  </div>
		  </div>
		</section>
	  </div>
	);
  };
}