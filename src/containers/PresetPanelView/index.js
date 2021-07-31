import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

// TODO: Plug this into canvas maybe to align with canvas

const PresetView = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Presets</DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='thunderbird'
        >
          {' '}
          Thunderbird
        </DropdownItem>

        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='quad_thunderbird'
        >
          {' '}
          Quad Thunderbird
        </DropdownItem>

        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='infinite'
        >
          {' '}
          Infinite
        </DropdownItem>

        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='gospers_glider_gun'
        >
          {' '}
          Gospers Glider Gun
        </DropdownItem>

        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='mash_up'
        >
          {' '}
          Mash Up
        </DropdownItem>

        <DropdownItem
          as='button'
          className='preset-button'
          onClick={props.handlePresets}
          value='random'
        >
          {' '}
          Random
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default PresetView;
