import React, { useState } from 'react';
import '../../css/policy/PolicyAdministration.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight, faChevronLeft, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export const Rules = () => {

    const [availableRules, setAvailableRules] = useState([
        { id: 5, name: 'AMSRule' },
        { id: 2, name: 'APHISLACEYRule' },
        { id: 3, name: 'EPAPesticideValidationRule' },
        { id: 4, name: 'HSValidationRule' },
        { id: 6, name: 'UOMConversionRule' }]);

    const [selectedRules, setSelectedRules] = useState([{ id: 0, name: 'PrimaryHSValidationRule' },]);

    const handleAddSelectedRules = () => {
        const selectedRulesToAdd = availableRules.filter(rule => rule.selected);
        const updatedSelectedRules = [...selectedRules, ...selectedRulesToAdd];
        const updatedAvailableRules = availableRules.filter(rule => !rule.selected);

        setSelectedRules(updatedSelectedRules);
        setAvailableRules(updatedAvailableRules);
    };

    const handleRemoveSelectedRules = () => {
        const selectedRulesToRemove = selectedRules.filter(rule => rule.selected);
        const updatedAvailableRules = [...availableRules, ...selectedRulesToRemove];
        const updatedSelectedRules = selectedRules.filter(rule => !rule.selected);

        setSelectedRules(updatedSelectedRules);
        setAvailableRules(updatedAvailableRules);
    }
    const handleAddAllRules = () => {
        const updatedSelectedRules = [...selectedRules, ...availableRules.map(rule => ({ ...rule, selected: false }))]; // Resetuj oznake
        setSelectedRules(updatedSelectedRules);
        setAvailableRules([]);
    };

    const handleRemoveAllRules = () => {
        const updatedAvailableRules = [...availableRules, ...selectedRules.map(rule => ({ ...rule, selected: false }))]; // Resetuj oznake
        setSelectedRules([]);
        setAvailableRules(updatedAvailableRules);
    };
    return (
        <div className='row'>
        <hr style={{ borderTop: '2px solid #033d77', width: '98%' }} />

        <div className="col-sm-4">
            <h3 className='h3'> Available rules </h3>
            <div className="list-group">

                <div className="list-group">
                    {availableRules
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(rule => (
                            <div className="list-group-item" key={rule.id}>
                                <label className="d-flex justify-content-between align-items-center">

                                    <span> {rule.name}   </span>
                                    <input
                                        type="checkbox"
                                        checked={rule.selected}
                                        onChange={() => {
                                            const updatedAvailableRules = availableRules.map(r => r.id === rule.id ? { ...r, selected: !r.selected } : r);
                                            setAvailableRules(updatedAvailableRules);
                                        }}
                                    />
                                </label>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
            <h3> &nbsp;</h3>
            <button type="button" className='btn btn-default btn-block' onClick={handleAddSelectedRules}> Add Selected <FontAwesomeIcon icon={faChevronRight} /> </button>
            <br />
            <button type="button" className='btn btn-default btn-block' onClick={handleRemoveSelectedRules}><FontAwesomeIcon icon={faChevronLeft} /> Remove Selected  </button>
            <br />
            <br />
            <button type="button" className='btn btn-default btn-block' onClick={handleAddAllRules}> Add All Rules <FontAwesomeIcon icon={faAnglesRight} /></button>
            <button type="button" className='btn btn-default btn-block' onClick={handleRemoveAllRules}> <FontAwesomeIcon icon={faAnglesLeft} /> Remove All Rules  </button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-4">
            <h3 className='h3'> Selected rules </h3>
            <div className="list-group">
                {selectedRules.map(rule => (
                    <div className="list-group-item" key={rule.id}>
                        <label className="d-flex justify-content-between align-items-center">
                            <span> {rule.name}   </span>
                            <input
                                type="checkbox"
                                checked={rule.selected}
                                onChange={() => {
                                    const updatedSelectedRules = selectedRules.map(r => r.id === rule.id ? { ...r, selected: !r.selected } : r);
                                    setSelectedRules(updatedSelectedRules);
                                }}
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}