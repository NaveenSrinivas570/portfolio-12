import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">

                        <h2 className="section-title">
                            <h2 className="section-title">
                                <FontAwesomeIcon icon={faUser} 
                                className="d-block mx-auto mb-2 text-primary" size="4x" />
                            </h2>
                        </h2>
                    </div>
                    <p className="section-description mt-4">
                        I am a skilled Internship Trainee with over 6 months of
                        hands-on experience in Front-end web development. My
                        expertise includes using technologies such as ReactJS,
                        HTML, CSS, and Bootstrap. As a problem solver,
                        I have successfully designed and developed user-friendly,
                        responsive web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
