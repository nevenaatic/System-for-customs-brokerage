import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/policy/Policy.css'
import { DropdownCountry } from './DropdownCountry';
import { Tabs } from '../policy/Tabs';

export const Policy = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [country, setCountry] = useState('US');

    return (
        <div className="container-fluid">
            <span className="policy-router"> <a href='/'> Dashboard </a> <FontAwesomeIcon icon={faCaretRight} /> Administration <FontAwesomeIcon icon={faCaretRight} /> Policy</span>
            <div className="row">
                <div className="col">
                    <div className='d-flex align-items-left'>
                        <h1> POLICY</h1>
                        <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-start justify-content-md-between flex-fill'>
                            <h1 className='mb-1 mb-md-0'></h1>
                            <div className='powered-by d-flex justify-content-center align-items-center '>
                                <div className='mr-1 '>
                                    <div className='form-inline pull-right form-group'>
                                        <span>Country:
                                            <span>
                                                <div className="input-container col-lg-5 col-sm-5 pull-right">
                                                    <input type="text" className="custom-input" value={country} onChange={(e) => setCountry(e.target.value)} disabled />
                                                <DropdownCountry setCountry={setCountry} /> </div>
                                               
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs country={country}></Tabs>
        </div>
    )
}