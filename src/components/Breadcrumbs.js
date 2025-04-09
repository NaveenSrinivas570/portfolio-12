import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

const Breadcrumbs = ({ paths }) => { 
	return ( 
		<nav aria-label="breadcrumb"> 
			<ul className="breadcrumb bg-light p-3 rounded"> 
				<li className="breadcrumb-item"> 
					<Link to="/"> 
						<FontAwesomeIcon icon={faHome} 
							className="mr-2" />
					</Link> 
				</li> 
				{paths.map((path, index) => ( 
					<li key={index} 
						className={ 
							`breadcrumb-item${index === paths.length  ? 
								' active' : ''}` 
						}> 
						{index !== paths.length ? ( 
							<Link to={path.to}> 
								{path.title} 
							</Link> 
						) : ( 
							<span>{path.title}</span> 
						)} 
					</li> 
				))} 
			</ul> 
		</nav> 
	); 
}; 

export default Breadcrumbs;
