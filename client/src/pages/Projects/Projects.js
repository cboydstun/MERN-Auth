import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { MDBIcon, MDBView } from "mdbreact";

import expat from './Images/expatjournal.png'
import nasa from './Images/NASA.png'
import sauti from './Images/sauti.png'

import './Projects.css'

class Projects extends React.PureComponent {
  render() {

    var box = {
      margin: '1%'
    }
    
    var styles = {
      display: 'inline-flex',
      width: '18rem',
      minHeight: '33rem', 
      margin: '0.33rem',
      marginTop: '3rem'
    }

    return (
      <React.Fragment style = {box}>
        <Card style={styles}>
          <MDBView hover zoom>
            <img
              src={expat}
              className="img-fluid"
              alt="Expat Journal"
            />
          </MDBView>
          <Card.Body>
            <Card.Title>Expat Journal</Card.Title>
            <Card.Text>
              Web application featuring pictures and information about people's global travels.
            </Card.Text>
            <div>
              <MDBIcon id="projectIcons" fab icon="html5" size="2x" />
              <MDBIcon id="projectIcons" fab icon="css3-alt" size="2x" />
              <MDBIcon id="projectIcons" fab icon="react" size="2x" />
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Created marketing website to highlight features of the project.</ListGroupItem>
            <ListGroupItem>Linked React application to marketing site.</ListGroupItem>
            <ListGroupItem>Created dynamic graphics for social media.</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://expat-marketing-cb.netlify.com/">Deployed Link</Card.Link>
            <Card.Link href="https://github.com/ExpatJournal/Marketing-Page-Christopher-Boydstun">GitHub Link</Card.Link>
          </Card.Body>
        </Card>

        <Card style={styles}>
          <MDBView hover zoom>
            <img
              src={nasa}
              className="img-fluid"
              alt="NASA"
            />
          </MDBView>        
          <Card.Body>
          <Card.Title>NASA Data Science</Card.Title>
          <Card.Text>
            Live daily link to the NASA database of celestial bodies.
          </Card.Text>
          <div>
            <MDBIcon id="projectIcons" fab icon="html5" size="2x" />
            <MDBIcon id="projectIcons" fab icon="css3-alt" size="2x" />
            <MDBIcon id="projectIcons" fab icon="react" size="2x" />
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Created a web based React application from scratch.</ListGroupItem>
          <ListGroupItem>Used a live unqiue API key to fetch data from NASA's daily update of celestial bodies.</ListGroupItem>
          <ListGroupItem>Styled data and installed a selector to allow for easy navigation.</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://nasa-axios-api.netlify.com/">Deployed Link</Card.Link>
          <Card.Link href="https://github.com/cboydstun/nasa-photo-of-the-day">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={styles}>
        <MDBView hover zoom>
          <img
            src={sauti}
            className="img-fluid"
            alt="NASA"
          />
        </MDBView>
        <Card.Body>
          <Card.Title>Sauti Databank</Card.Title>
          <Card.Text>
            Sauti Databank collects information in Southeast Africa and distributes it for humintarian purposes.
          </Card.Text>
        </Card.Body>
        <div>
          <MDBIcon id="projectIcons" fab icon="html5" size="2x" />
          <MDBIcon id="projectIcons" fab icon="css3-alt" size="2x" />
          <MDBIcon id="projectIcons" fab icon="react" size="2x" />
        </div>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Converted backend from a Restful API to GraphQL Apollo standards.</ListGroupItem>
          <ListGroupItem>Created more filtrations and graphics to present information.</ListGroupItem>
          <ListGroupItem>Integrated an export componenent so that data may be used outside the site.</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="http://sautiafrica.org/">Site Link</Card.Link>
          <Card.Link href="https://github.com/sauti-databank">GitHub Link</Card.Link>
        </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Projects;