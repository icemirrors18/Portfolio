import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
		<section className="colorlib-work" data-section="projects">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta">My Work</span>
						<h2 className="colorlib-heading animate-box">Recent Projects</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
						<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/icemirrors18/Shifter">Shifter</a></h3>
									<span>An arcade style game where you control an spaceship with the ability to shift polarity to pass through an oncoming barrage of colored lasers!</span>
									<p className="icon">
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
						<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/icemirrors18/Minish-Cap-Autosplitter">Minish Cap Autosplitter</a></h3>
									<span>A configurable lua script that automatically controls a timer for The Legend of Zelda: The Minish Cap speedrunning</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
						<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/NG-Development/ngdevelopment">3D Aircraft Visualizer</a></h3>
									<span>A python application that allows users to view 3D models and attach antennas to view their area of coverage.  Developed in combination with Northrop Grumman.</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
						<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/icemirrors18/DCAS">DCAS</a></h3>
									<span>A school project to simulate the concurrent movement of drones and avoid collisions</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
						<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/icemirrors18/Goldsplit">Goldsplit</a></h3>
									<span>A React.js webapp that graphs and analyzes Livesplit data</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
						<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
							<div className="desc">
								<div className="con">
									<h3><a href="https://github.com/icemirrors18/randomizer">Minish Cap Randomizer Fork</a></h3>
									<span>Creates randomized versions of The Legend of Zelda: The Minish Cap ROMs where items, music, colors, and other aspects have been randomly placed.  Forked from the orginal to work on supplemental features.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </div>
    )
  }
}
