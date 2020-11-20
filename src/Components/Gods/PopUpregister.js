import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './popup.css';
const PopUpregister = (props) => {
  
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>More Info</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody className = "alignement" >
          <img className = "imagemodal"  src="https://i.pinimg.com/originals/f2/89/84/f28984a535b6738c11fd7547c90ae142.jpg" alt="Athéna" />
          <p className = "border" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </ModalBody>
        <ModalBody className = "buttonmodal" >
          <p>Register to rent a god</p>
          <button className="button1" >Sign in</button>
          <button>register</button>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Send a request</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PopUpregister;