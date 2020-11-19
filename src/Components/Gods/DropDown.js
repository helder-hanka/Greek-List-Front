import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './dropdown.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Bardropdown = (props) => {
  const [button, setButton] = useState(false);
  const inverseButton = () => setButton(prevState => !prevState);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className = "button" >
      <h4>Select the skill : </h4>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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

      <Dropdown isOpen={button} toggle={inverseButton}>
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