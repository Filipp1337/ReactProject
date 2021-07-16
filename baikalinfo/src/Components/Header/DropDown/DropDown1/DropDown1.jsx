import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import dd from './../DropDown.module.css'


// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownList1 = () => (
  <Dropdown text = 'Публикации'>
    <Dropdown.Menu>
      <Dropdown.Item text='Ссылка'/>
      <Dropdown.Item text='Ссылка'/>
      <Dropdown.Item text='Ссылка'/>
    </Dropdown.Menu>
  </Dropdown>
)
export default DropdownList1;