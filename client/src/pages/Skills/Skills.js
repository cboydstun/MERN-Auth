import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import HTMLIcon from './Images/HTML5.png'
import CSSIcon from './Images/CSS3.png'
import JSIcon from './Images/Javascript.png'
import NodeIcon from './Images/Node.png'
import ReactIcon from './Images/React.png'
import BootIcon from './Images/Bootstrap.png'
import RouterIcon from './Images/ReactRouter.png'
import FontAwesomeIcon from './Images/FontAwesome.png'
import OpenGraphIcon from './Images/OpenGraph.png'

import './Skills.css'

class Skills extends React.PureComponent {
  render() {

    var box = {
      margin: '1%',
      marginTop: '3rem'
    }

    var styles = {
      width: '100%',
      height: '33rem',
      margin: '0.33rem'
    }

    return (
      <Row style = {box}>
            <Col></Col>
            <Col md={10} style = {styles}>
                <Row>
                    <Col>
                        <div className="skillBox">
                            <Row>
                                <Col>
                                    <Image className="icon" src={HTMLIcon} fluid title="HTML5" />
                                </Col>
                                <Col>
                                    <Image className="icon" src={CSSIcon} fluid title="CSS3" />
                                </Col>
                                <Col>
                                    <Image className="icon" src={JSIcon} fluid title="JavaScript" />
                                </Col>
                                <Col>
                                    <Image className="icon" src={ReactIcon} fluid title="React"/>
                                </Col>
                                <Col>
                                    <Image className="icon" src={NodeIcon} fluid title="Node.js" />
                                </Col>
                                <Col>
                                    <Image className="icon" src={BootIcon} fluid title="Bootstrap"/>
                                </Col>
                                <Col>
                                    <Image className="icon" src={RouterIcon} fluid title="React Router"/>
                                </Col>
                                <Col>
                                    <Image className="icon" src={FontAwesomeIcon} fluid title="Font Awesome"/>
                                </Col>
                                <Col>
                                    <Image className="icon" src={OpenGraphIcon} fluid title="Open Graph"/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row >
    );
  }
}

export default Skills;