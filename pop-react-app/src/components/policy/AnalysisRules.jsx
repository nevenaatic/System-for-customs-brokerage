import React, { useState } from 'react';
import '../../css/policy/PolicyAdministration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSave, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export const AnalysisRules = ({ country }) => {

    const [allRules, setAllRules] = useState([
        { id: 1, ruleId: 'org.livingston.tsing.service.rules.impl.UOMConversionRule', ruleName: 'UOMConversionRule', ruleDescription: 'UOMConversionRule ' },
        { id: 2, ruleId: 'org.livingston.tsing.service.rules.impl.HSDataSubpullRule', ruleName: 'HSDataSubpullRule', ruleDescription: 'Subpull Rule ' },
        { id: 3, ruleId: 'org.livingston.tsing.service.rules.impl.HSValidationRule ', ruleName: 'HSValidationRule', ruleDescription: '' },
        { id: 4, ruleId: 'org.livingston.tsing.service.rules.impl.MissingPrimaryHSRule', ruleName: 'MissingPrimaryHSRule', ruleDescription: '' }]);


    const [editedRules, setEditedRules] = useState({});

    const handleEdit = (ruleId) => {
        setEditedRules({ ...editedRules, [ruleId]: allRules.find(rule => rule.id === ruleId) });
    };

    const handleSave = (ruleId) => {
        if (editedRules[ruleId]) {
            const updatedRules = allRules.map(rule =>
                rule.id === ruleId
                    ? { ...rule, ...editedRules[ruleId] }
                    : rule
            );
            setAllRules(updatedRules);
            setEditedRules({ ...editedRules, [ruleId]: null });
        }
    };

    const handleInputChange = (ruleId, field, value) => {
        setEditedRules({
            ...editedRules,
            [ruleId]: { ...editedRules[ruleId], [field]: value }
        });
    };

    const handleCancel = (ruleId) => {
        setEditedRules({ ...editedRules, [ruleId]: null });
    };

    return (
        <div className="container-fluid" >
            <div className="well">
                <h3 className='h3'> RULE MANAGEMENT</h3>
                <div className="row">
                    <div className="col-sm-2">
                        <p> <span> Country code: </span>
                            <b>{(country === "US") ? <span>US </span> : <span> CA</span>}</b>
                        </p>
                        <p> <span> Country name:</span>
                            <b> {(country === "US") ? <span>UNITED STATES </span> : <span> CANADA </span>}</b>
                        </p>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead className="table-divider">
                        <tr>
                            <th className="clickable click-style" > Rule ID
                            </th>
                            <th className="clickable click-style" > Rule Name
                            </th>
                            <th className="clickable click-style" > Description
                            </th>
                            <th className="clickable click-style" >
                            </th>
                            <th className="clickable click-style" >
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRules.map(rule => (
                            <tr key={rule.id} >
                                <td className='click-style'> <span>{rule.ruleId}</span> </td>
                                <td className={editedRules[rule.id] ? 'editable-cell' : 'click-style'}>
                                    {editedRules[rule.id] ? (
                                        <input
                                            type="text"
                                            className="custom-input"
                                            value={editedRules[rule.id].ruleName}
                                            onChange={(e) => handleInputChange(rule.id, 'ruleName', e.target.value)}
                                        />
                                    ) : (
                                        <span>{rule.ruleName}</span>
                                    )}
                                </td>
                                <td className={editedRules[rule.id] ? 'editable-cell' : 'click-style'}>
                                    {editedRules[rule.id] ? (
                                        <input
                                            type="text"
                                            className="custom-input"
                                            value={editedRules[rule.id].ruleDescription}
                                            onChange={(e) => handleInputChange(rule.id, 'ruleDescription', e.target.value)}
                                        />
                                    ) : (
                                        <span>{rule.ruleDescription}</span>
                                    )}
                                </td>
                                <td>
                                    {editedRules[rule.id] ? (
                                        <button className="btn btn-default" onClick={() => handleSave(rule.id)}>
                                            <FontAwesomeIcon icon={faSave} />
                                        </button>
                                    ) : (
                                        <button className="btn btn-default" onClick={() => handleEdit(rule.id)}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {editedRules[rule.id] && (
                                        <button className="btn btn-default" onClick={() => handleCancel(rule.id)}>
                                            <FontAwesomeIcon icon={faRotateLeft} />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}