import '../../css/header-and-footer/Header.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { DropdownRoles } from './DropdownRoles';

export const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [currentRole, setCurrentRole] = useState('Super user ');

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='example bg-secondary p-3 mb-2'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex align-items-left heading'>
                            <a href='/#' className='company-role' onClick={toggleDropdown}>
                                <span className='company-role-text'>Company - Role: <span className="company-description">nevena-company Nevena's test company - {currentRole} </span></span>
                            </a>
                            {isDropdownOpen && <DropdownRoles setCurrentRole={setCurrentRole} toggleDropdown={toggleDropdown} />}
                            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-start justify-content-md-between flex-fill right-content'>
                                <h1 className='mb-1 mb-md-0'></h1>
                                <div className='d-flex justify-content-center align-items-center company-description'>
                                    <div className='mr-1 company-description'>
                                        <div className='right-content'>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff !important", }} className='components-style' />
                                            <FontAwesomeIcon icon={faUser} style={{ color: "white !important", }} className='name-style' />
                                            <span className='name-style'>Nevena Atic</span>
                                            <FontAwesomeIcon icon={faQuestion} className='question-style' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
