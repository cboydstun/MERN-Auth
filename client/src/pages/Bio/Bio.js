import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import picture from './Images/profilePic.jpg'
import linkedIn from './Images/LinkedIn.png'
import gitHub from './Images/Github.png'
import resume from './Boydstun, Chris_Coding Resume_121119.pdf'

import './Bio.css'
class Bio extends React.PureComponent {
  render() {

    var box = {
      margin: '1%',
      marginTop: '3rem', 
      padding: 'auto'
    }

    var styles = {
      width: '100%',
      maxHeight: '33rem',
      margin: '0.33rem',
      padding: 'auto'
    }

  return (
    <div style = {box}>
    <Row style={styles}>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <div id="bioBox">
                            <Row>
                                <Col lg={3} md={6}>
                                    <div >
                                        <img src={ picture } alt='Chris Boydstun' id="bioPic" className="img-fluid d-block m-auto" />
                                    </div>
                                </Col>
                                <Col lg={9} md={6}>
                                    <div>
                                        <p className="bioText">Hey there! My name is Chris Boydstun, a full stack web developer and graduate of Lambda School's Coding Bootcamp. I've worked in education and software development for years as a teacher, manager, and a developer.</p>
                                        <p className="bioText">I'm interested in web development, entrepeneurship, and finding ways to apply technology to help others.</p>
                                        <p className="bioText">You can check out my resum&#233; <a href={resume} target='_blank' rel='noopener noreferrer'>here</a>, and you can reach me at <a href="mailto:chrisboydstun@gmail.com" target='_blank' rel='noopener noreferrer'>chrisboydstun@gmail.com</a>.</p>
                                        <a href="https://www.linkedin.com/in/chris-boydstun-4a990615/" target='_blank' rel='noopener noreferrer' title='LinkedIn Page'>
                                            <img src={linkedIn} alt='Link to LinkedIn Page' className='linkIcon' id='linkedInIcon' />
                                        </a>
                                        <a href="https://github.com/cboydstun" target='_blank' rel='noopener noreferrer' title='GitHub Profile'>
                                            <img src={gitHub} alt='Link to GitHub Page' className='linkIcon' id='gitHubIcon' />
                                        </a>
                                        <a href="mailto:chrisboydstun@gmail.com" target='_blank' rel='noopener noreferrer' title='Email Me'>
                                            <svg className="bi bi-envelope text-dark" width="75px" height="100px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clipRule="evenodd"></path>
                                                <path fillRule="evenodd" d="M2.071 6.243a.5.5 0 01.686-.172L10 10.417l7.243-4.346a.5.5 0 11.514.858L10 11.583 2.243 6.93a.5.5 0 01-.172-.686z" clipRule="evenodd"></path>
                                            </svg></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
  </div>
    );
  }
}

export default Bio;