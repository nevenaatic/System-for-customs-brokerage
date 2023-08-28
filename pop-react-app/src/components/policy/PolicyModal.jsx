import React, { useState } from 'react';
import '../../css/policy/PolicyModal.css'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';

export const PolicyModal = ({ showModal, setShowModal, setPolicyName, setRulesShow }) => {
    const [policy, setPolicy] = useState("")
    const [sort, setSort] = useState(false)

    const handleClose = () => {
        setShowModal(false)
        setPolicyName(policy)
        setRulesShow(false)
    }
    const handleSave= () => {
        setShowModal(false)
        setPolicyName(policy)
        setRulesShow(true)
    }
    const handleSorting = () => setSort(!sort);

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Policy ID </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <table className="table table-hover">
                    <thead className="table-divider">
                        <tr>
                            <th className="clickable click-style" onClick={ handleSorting}> Policy name 
                            {
                                sort ? <span className='icons'> <FontAwesomeIcon icon={faArrowDownShortWide} /> </span>: <span className='icons'> <FontAwesomeIcon icon={faArrowDownWideShort} className='icons' /></span>
                            }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='click-style' onClick={() => { setPolicy("Required Rules Policy") }}> <span> Required Rules Policy</span> </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="default" className="btn-cancel" onClick={handleClose}>
                    Close
                </Button>
                <Button  className="btn-save" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    )


}