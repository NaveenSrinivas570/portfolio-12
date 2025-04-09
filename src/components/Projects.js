import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Projects = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Resume', to: '/resume' } 
		]; 

	return ( 
		<section id="projects"
			className="container text-center"> 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Projects 
			</h2> 
			<div className="row">  
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
                                Smart India Hackathon 2024 
							</h5> 
							<p className="card-text"> 
								Designed the UI and implemented 
								CSS styling for the website, 
								optimizing performance and design across 
								all pages. 
							</p> 
						</div> 
					</div> 
				</div> 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Training and Placement 
								Cell Website Official 
							</h5> 
							<p className="card-text"> 
								Designed and developed the official 
								Placement Website for the university using 
								HTML, CSS, JavaScript, jQuery, and Bootstrap. 
							</p> 
						</div> 
					</div> 
				</div>  
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								Social Media Dashboard 
							</h5> 
							<p className="card-text"> 
								Developed a social media dashboard 
								that allows users to view and manage 
								their social media accounts in one place, 
								integrating with APIs from major platforms. 
							</p> 
						</div> 
					</div> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default Projects;
