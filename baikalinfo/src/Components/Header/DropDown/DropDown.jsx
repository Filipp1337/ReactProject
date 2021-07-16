import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownList = () => (
  
  <Dropdown text = 'Главная'>
    <Dropdown.Menu>
      <Dropdown.Item text='Ccылка'/>
      <Dropdown.Item text='Ссылка'/>
      <Dropdown.Item text='Ссылка'/>
    </Dropdown.Menu>
  </Dropdown>
)
export default DropdownList;