import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import './style.css';

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>Front-end Dev @Besant Technologies.</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a href="https://www.linkedin.com/in/naveen-srinivas-102809341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			<li> 
				<a href="https://github.com/NaveenSrinivas570" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faGithub} /> 
				</a> 
			</li> 
			<li> 
				<a href="https://www.instagram.com/naveensrinivas10?utm_source=qr&igsh=MWRiZGkwemJ5YjdoZQ==" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faInstagram} /> 
				</a> 
			</li> 
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;