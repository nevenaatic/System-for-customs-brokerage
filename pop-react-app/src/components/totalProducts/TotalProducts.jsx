import initialProducts from '../../store/products';
import initialMessages from '../../store/messages';
import React, {useState, useEffect} from 'react';
import { Grid, GridColumn as Column} from '@progress/kendo-react-grid';
import DropdownRoles from './DropdownRoles';
import PieChart from './PieChart'
import '../../css/dashboard/TotalProducts.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TotalProducts = props => {
    const [products, setProducts] = useState(initialProducts);
    const [messages, setMessages] = useState(initialMessages);
    const [filterMessages, setFilterMessages] = useState(initialMessages);
    const countryOptions = ['ALL ', 'US', 'Canada'];
    const stateOptons = ['ALL','INITIAL', 'NOT_READY', 'READY', 'SENT'];
    const [selectedCountry, setSelectedCountry] = useState('ALL ');
    const [selectedStatus, setSelectedStatus] = useState('ALL'); 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        checkCountryAndStatus(selectedCountry, selectedStatus);
    }, [selectedCountry, selectedStatus]);

    const changeView = (selectedOption) => {
        if (countryOptions.includes(selectedOption)) {
            setSelectedCountry(selectedOption);            
        }else{
            setSelectedStatus(selectedOption);
        }
    }

    const checkCountryAndStatus = (selectedCountry, selectedStatus) => {
        var filteredProductsByCountry = [];
        var filteredProductsByStatus = [];
        if (selectedCountry === 'ALL ' || selectedStatus === 'ALL') {
            filteredProductsByCountry = initialProducts;
        }
        if (selectedCountry === 'ALL ' || selectedCountry === '') {
            filteredProductsByCountry = initialProducts;
        }
        else{
            filteredProductsByCountry = initialProducts.filter((product) => {
                return product.ctryCode === selectedCountry.trim();
            });
        }
        if (selectedStatus === '' || selectedStatus === 'ALL') {
            setProducts(filteredProductsByCountry);  
        }
        else {
            filteredProductsByStatus = filteredProductsByCountry.filter((product) => {
                return product.stateType === selectedStatus.trim();
            });
            setProducts(filteredProductsByStatus);
        }
    }

    const statusStyling = (props) => {
        const status = props.dataItem.stateType;
        let badge = null;
        if (status === 'INITIAL') {
            badge = <span className='badge badge-pill badge-info' style={{backgroundColor:'#B5BAC0', color:'white'}}>Initial</span>;
        } else if (status === 'NOT_READY') {
            badge = <span className='badge badge-pill badge-warning' style={{backgroundColor:'#FF6813', color:'white'}} >Not Ready</span>;
        } else if (status === 'READY') {
            badge = <span className='badge badge-pill badge-neutral' style={{backgroundColor:'#2B80C2', color:'white'}} >Ready</span>;
        } else if (status === 'SENT') {
            badge = <span className='badge badge-pill badge-success' style={{backgroundColor:'#004E9C', color:'white'}} >Sent</span>;
        }
        return <td>{badge}</td>;
    };

    const showPriceColumn = (productId) => {
        const filteredMessages = messages.filter((mess) => {
            const string = mess.message;
            const regex = /\(([^)]+)\)/;
            const matches = string.match(regex);
            const extractedContent = matches ? matches[1] : null;
            return productId === extractedContent;
        });
        return filteredMessages.length > 0 ? filteredMessages : null;
    };


    const viewMessage = (rowData) => {
        const isExists = showPriceColumn(rowData.dataItem.tsiProdId);
        if (isExists) {
            return<td className={'centered-text'} onClick={handleShow}>View message</td>;
        }  else {
            return <td className={'centered-text'}></td>;
        }
    };

    
    return (
        <div>
                    <div className='d-flex align-items-left'>
                        <div>
                            <h2 style={{ color: 'darkblue' }}>Total Products | {selectedCountry} | Status {selectedStatus} : {products.length}</h2>
                            <p>Company:test company</p>
                        </div>
                        <div className='ml-auto d-flex'>
                            <div className='mr-3'>
                                <p>Country:</p>
                                <DropdownRoles items={countryOptions} onChangeView={changeView}/>
                            </div>
                            <div>
                                <p>Status:</p>
                                <DropdownRoles items={stateOptons} onChangeView={changeView}/>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', width:'100%' }}>
                    <div style={{ width: '100%'}}> 
                        <Grid
                            className='custom-grid-l'
                            data={products}
                            total={products.length}
                            sortable={true}
                            style={{ width: '100%'}}
                        >
                            <Column field='tsiProdId' title='Product ID'  style={{ width: '10rem !important'}}/>
                            <Column field='stdDesc' title='Description' />
                            <Column field='ctryCode' title='Country' />
                            <Column field='stateType' title='Status' cell={statusStyling}/>
                            <Column field='message' title='Message' cell={viewMessage}/>
                        </Grid>
                    </div>
                    <div className="rounded-border">
                        <PieChart listOfProduct={products}/>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} style={{ maxWidth: "1900px" }}>
                    <Modal.Header closeButton>
                    <Modal.Title>Product Analysis Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='custom-grid-l'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Message Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterMessages.map((message) => (
                                    <tr key={message.messageId}>
                                        <td>{message.messageId}</td>
                                        <td>{message.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                    </Modal.Footer>
                </Modal>
        </div>             
    );
};

export default TotalProducts;