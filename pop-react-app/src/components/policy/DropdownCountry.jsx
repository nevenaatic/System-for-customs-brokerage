import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../css/policy/DropdownCountry.css'

export const DropdownCountry = ({ setCountry}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownSelect = (selectedCoutry) => { 
         setDropdownOpen(false);
        setCountry(selectedCoutry);
    };

    return (
        <div className="dropdown-container">
            <Dropdown>
                <Dropdown.Toggle className="custom-toggle">
                </Dropdown.Toggle>
                <Dropdown.Menu show={isDropdownOpen} className="dropdown-menu" onSelect={handleDropdownSelect}>
                    <Dropdown.Item onClick={() => handleDropdownSelect('US')} className='dropdown-item' >US</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownSelect('CA')} >CA</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
