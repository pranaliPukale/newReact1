import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
function LeftHand() {
  return (
    <div>
     
      <ListGroup as="ul">
         <ListGroup.Item as="li" > 
            <Nav.Link href="#pricing">
                React Introduction
             </Nav.Link>
          </ListGroup.Item>
        <ListGroup.Item as="li"> 
          <Nav.Link href="#pricing">
            Component Lifecycle: 
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item as="li" >
           <Nav.Link href="#pricing">
             Class Lifecycle Method:
            </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item as="li">
           <Nav.Link href="#pricing">
             Function Lifecycle Method:
            </Nav.Link>
        </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default LeftHand
