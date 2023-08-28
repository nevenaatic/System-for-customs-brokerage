import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../css/DropdownRoles.css'

export const DropdownRoles = ({ setCurrentRole, toggleDropdown }) => {

    const handleDropdownSelect = (selectedRole) => {
        setCurrentRole(selectedRole);
        toggleDropdown();
    };

    return (
        <div className="dropdown-container">
            <Dropdown.Menu show className="dropdown-menu" onSelect={handleDropdownSelect}>
                <Dropdown.Item className='dropdown-item' onClick={() => handleDropdownSelect('Admin')}>Admin</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownSelect('Company Admin')}>Company Admin</Dropdown.Item>
                <Dropdown.Item onClick={() => handleDropdownSelect('Super user')}>Super user</Dropdown.Item>
            </Dropdown.Menu></div>
    )
}