import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Bardropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        All gods skills
        </DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem header>Header</DropdownItem>
        <DropdownItem>War</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider /> */}
        <DropdownItem>Art</DropdownItem>
        <DropdownItem>Beauty</DropdownItem>
        <DropdownItem>Love</DropdownItem>
        <DropdownItem>War</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Bardropdown;