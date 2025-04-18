import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import Skills from './Skills'; 
import './style.css'; 

const Resume = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Contact', to: '/contact' } 
		]; 

	return ( 
		<section id="resume"
			className="container text-center">  
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<div className="row justify-content-center align-items-center"> 
				<div className="col-md-8"> 
					<h2 className="section-title"> 
						<FontAwesomeIcon icon={faFileDownload} 
							className="mr-2" /> 
						Resume 
					</h2> 
					<p className="section-description"> 
						Download my resume to learn more 
						about my professional experience and skills. 
					</p> 
					<a href="C:\Users\hemavathy\Downloads\NAVEENKUMAR B.E CSE Resume.pdf"
						className="resume-download-btn" download> 
						Download Resume 
					</a> 
					<Skills /> 
				</div> 
			</div> 
		</section> 
	); 
}; 

export default Resume;
