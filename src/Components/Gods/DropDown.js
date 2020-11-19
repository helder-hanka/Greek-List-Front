import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import './dropdown.css'

const Godsname = [
  { key: 'af', value: 'af', flag: 'af', text: 'Zeus' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aphrodite' },
  { key: 'al', value: 'al', flag: 'al', text: 'Apollon' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Poséidon' },
  { key: 'as', value: 'as', flag: 'as', text: 'Hestia' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Arès' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Artémis' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Héra' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Athéna' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Héphaïstos' },
  { key: 'am', value: 'am', flag: 'am', text: 'Hermès' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Hadès' },
]

const caracteristiquegods= [
  { key: 'af', value: 'af', flag: 'af', text: 'Zeus' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aphrodite' },
  { key: 'al', value: 'al', flag: 'al', text: 'Apollon' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Poséidon' },
  { key: 'as', value: 'as', flag: 'as', text: 'Hestia' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Arès' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Artémis' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Héra' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Athéna' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Héphaïstos' },
  { key: 'am', value: 'am', flag: 'am', text: 'Hermès' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Hadès' },
]
const Bardropdown = () => {
  return(
    <div className="Dropdown">
        <Dropdown 
        placeholder='All'
        fluid
        search
        selection
        options={Godsname}
      />
      <Dropdown 
        placeholder='All'
        fluid
        search
        selection
        options={caracteristiquegods}
      />
    </div>
)
  }
export default Bardropdown


// import React, { useState } from 'react';
// import { Button } from 'reactstrap';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// const Example = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);

//   return (
//     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Dropdown
//         </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem header>Header</DropdownItem>
//         <DropdownItem>Some Action</DropdownItem>
//         <DropdownItem text>Dropdown Item Text</DropdownItem>
//         <DropdownItem disabled>Action (disabled)</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Foo Action</DropdownItem>
//         <DropdownItem>Bar Action</DropdownItem>
//         <DropdownItem>Quo Action</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// export default Example;