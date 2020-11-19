import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './dropdown.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Bardropdown = (props) => {
  
  const [listgod, setListgod] = useState(false);
  const togglelistgod = () => setListgod(prevState => !prevState);
  
  const [competency, setCompetency] = useState(false);
  const togglelistcompetency = () => setCompetency(prevState => !prevState);
  return (
    <div className = "button" >
      <h4>Select the skill : </h4>
    <Dropdown isOpen={listgod} toggle={togglelistgod}>
      <DropdownToggle caret>
        All gods 
        </DropdownToggle>
      <DropdownMenu >
        <DropdownItem header>list gods</DropdownItem>
        <DropdownItem>Aphrodite</DropdownItem>
        <DropdownItem>Apollon</DropdownItem>
        <DropdownItem>Athéna</DropdownItem>
        <DropdownItem>Hadès</DropdownItem>
        <DropdownItem>Zeus</DropdownItem>
      </DropdownMenu>
    </Dropdown>

      <Dropdown isOpen={competency} toggle={togglelistcompetency}>
        <DropdownToggle caret>
          competency gods
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>competency</DropdownItem>
          <DropdownItem>amour</DropdownItem>
          <DropdownItem>guerre</DropdownItem>
          <DropdownItem>fete</DropdownItem>
          <DropdownItem>ivresse</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Bardropdown;