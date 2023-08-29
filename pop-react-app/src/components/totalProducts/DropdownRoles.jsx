import React, {useState} from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../css/dashboard/dropdown.css';

const DropdownRoles = (props) => {
    const [selectedOption, setSelectedOption] = useState('ALL');
    const [menuOpen, setMenuOpen] = useState(false); 

    const handleDropdownSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
        setMenuOpen(false); 
        props.onChangeView(selectedOption);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    return (
        <div className="dropdown-container">
        <Dropdown show={menuOpen} onToggle={toggleMenu} onSelect={handleDropdownSelect}>
            <Dropdown.Toggle id="dropdown-basic">
                {selectedOption}
            </Dropdown.Toggle>
            <Dropdown.Menu show className="dropdown-menu">
                {props.items.map((option, index) => (
                    <Dropdown.Item
                        key={index}
                        eventKey={option}
                        className='dropdown-item'
                    >
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}

export default DropdownRoles;
