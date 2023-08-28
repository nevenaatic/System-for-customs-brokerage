import React, { useState } from 'react';
import { FormLabel, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../css/policy/PolicyAdministration.css'
import { PolicyModal } from './PolicyModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faChevronRight, faChevronLeft, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import {Rules} from "./Rules"
export const PolicyAdministration = ({ country }) => {

    const [showModal, setShowModal] = useState(false);
    const [policyName, setPolicyName] = useState('');
    const [rulesShow, setRulesShow] = useState(false);
    return (

        <div className="container-fluid" >
            <div className="d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center flex-wrap mb-3">
                <button type="button" className="btn btn-tertiary save-btn">Save</button>
                <button type="button" className="btn btn-tertiary" disabled>Save As</button>
                <button type="button" className="btn btn-tertiary">New</button>
                <button type="button" className="btn btn-tertiary" disabled>Delete</button>
            </div>

            <div className="well">
                <h3 className='h3'> POLICY ADMINISTRATION</h3>
                <div className="row">
                    <div className="col-sm-2">
                        <p> <span> Country code: </span>
                            <b>{(country === "US") ? <span>US </span> : <span> CA</span>}</b>
                        </p>
                        <p> <span> Country name:</span>
                            <b> {(country === "US") ? <span>UNITED STATES </span> : <span> CANADA </span>}</b>
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <FormLabel>Policy name</FormLabel>
                            <div className="input-group">
                                <input type="text" className="form-control" value={policyName} onChange={(e) => setPolicyName(e.target.value)} />
                                <span className="input-group-btn">
                                    <button type="checkbox" className="btn btn-default" title="Click to select policy" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faUpRightFromSquare} /></button>

                                </span>
                            </div>
                        </div>
                    </div>
                    {showModal ? <PolicyModal showModal={showModal} setShowModal={setShowModal} setPolicyName={setPolicyName} setRulesShow={setRulesShow} /> : ""}
                    {rulesShow ? <div className="col-sm-2">
                        <div className="form-group">
                            <FormLabel>Default policy</FormLabel>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <input type="checkbox" checked />
                                </span>
                            </div>
                        </div>
                    </div> : ""}
                </div>
                {rulesShow ? <Rules> </Rules>    : ""}
            </div>
        </div>
    )
}