import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faInfoCircle, faCode, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 
import './style.css'; 

const Header = () => { 
return ( 
	<Navbar bg="dark" expand="lg"
	className="custom-navbar shadow-sm"> 
	<Navbar.Brand as={Link} to="/"
		className="brand-name"> 
		<span className="display-4 text-white ho"> 
		HI! I AM NAVEENKUMAR (Frontend Dev)
		</span> 
	</Navbar.Brand> 
	<button 
		className="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	> 
		<span className="navbar-toggler-icon"></span> 
	</button> 
	<div className="collapse navbar-collapse text-white"
		id="navbarNav"> 
		<Nav className="ml-auto "> 
		<Nav.Link as={Link} to="/"> 
			<span>About</span> 
			<FontAwesomeIcon icon={faInfoCircle} 
			className="ml-2 text-light ho ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/projects"> 
			<span>Projects</span> 
			<FontAwesomeIcon icon={faCode} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/resume"> 
			<span>Resume</span> 
			<FontAwesomeIcon icon={faFileAlt} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		<Nav.Link as={Link} to="/contact"> 
			<span>Contact</span> 
			<FontAwesomeIcon icon={faEnvelope} 
			className="ml-2 text-light ho" /> 
		</Nav.Link> 
		</Nav> 
		<Nav className="ml-auto"> 
		<Nav.Link href="https://www.instagram.com/naveensrinivas10?utm_source=qr&igsh=MWRiZGkwemJ5YjdoZQ=="> 
			<span className="sr-only">Linkedin</span> 
			<FontAwesomeIcon icon={faInstagram} size="lg"
			className='text-light ho' /> 
		</Nav.Link>
		<Nav.Link href="https://github.com/NaveenSrinivas570"> 
			<span className="sr-only">Github</span> 
			<FontAwesomeIcon icon={faGithub} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		<Nav.Link href="https://www.linkedin.com/in/naveen-srinivas-102809341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> 
			<span className="sr-only">Linkedin</span> 
			<FontAwesomeIcon icon={faLinkedin} size="lg"
			className='text-light ho' /> 
		</Nav.Link> 
		</Nav> 
	</div> 
	</Navbar> 
); 
}; 

export default Header;
