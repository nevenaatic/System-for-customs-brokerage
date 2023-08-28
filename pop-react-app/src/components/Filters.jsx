
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {Form } from 'livingston-npm-components';
import '../css/Filter.css'
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

const initialFilters = {
    tsiProdId: '',
    stdDesc: '',
    createdDate: null,
    createdBy: '',
    altDesc: '',
    lastModifiedDate: null,
    lastModifiedBy: '',
    dateRange: null,
    endDateCreated: null,
    endDateModified: null
};

const Filters = ({products, applyFilters}) => {
    const [filters, setFilters] = useState(initialFilters);

    const handleFilterChange = (fieldName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [fieldName]: value,
        }));
    };

    const clearFilters = () => {
        setFilters({ ...initialFilters });
        applyFilters(products); 
    };

    const handleSubmit = () => {

        const filteredProducts = products.filter(product => {
            const matchesProductId = !filters.tsiProdId || product.tsiProdId?.toLowerCase().includes(filters.tsiProdId.toLowerCase());
            const matchesDescription = !filters.stdDesc || product.stdDesc?.toLowerCase().includes(filters.stdDesc.toLowerCase());
            const matchesCreatedBy = !filters.createdBy || product.createdBy?.toLowerCase().includes(filters.createdBy.toLowerCase());
            const matchesAlternateDescription = !filters.altDesc || product.altDesc?.toLowerCase().includes(filters.altDesc.toLowerCase());
            
            const createdDateCondition = !filters.createdDate || (
                (new Date(product.createdDate) >= filters.createdDate) &&
                (new Date(product.createdDate) <= filters.endDateCreated)
            );

            const lastModifiedDateCondition = !filters.lastModifiedDate || (
                (new Date(product.lastModifiedDate) >= filters.lastModifiedDate) &&
                (new Date(product.lastModifiedDate) <= filters.endDateModified)
            );
            return (
                matchesProductId &&
                matchesDescription &&
                matchesCreatedBy &&
                matchesAlternateDescription &&
                createdDateCondition &&
                lastModifiedDateCondition
            );
        })

            applyFilters(filteredProducts)
    };

    const handleCreatedDateChange = ([startDate, endDate]) => {
        handleFilterChange('createdDate', startDate);
        handleFilterChange('endDateCreated', endDate);

    };

    const handleLastModifiedDateChange = ([startDate, endDate]) => {
        handleFilterChange('lastModifiedDate', startDate);
        handleFilterChange('endDateModified', endDate);
    };

    return (
        <div className="filters-container bg-gray-200" style={{borderRadius:"10px" ,border:'1px solid #0069D1', margin:20, padding:20}}>
            <FontAwesomeIcon icon={faFilter} className="filters-icon" />
            <div className="filters-form"  style={{ position: 'relative', zIndex: 2 }}>
                <div>
            <label>Product ID:</label>
            <input 
                type="text" 
                className="form-control" 
                name="tsiProdId"
                value={filters.tsiProdId}
                placeholder="Enter Product ID"
                size="large"
                onChange={(event) =>handleFilterChange('tsiProdId', event.target.value)} />
            </div>

            <div>
            <label>Description:</label>
            <input 
                type="text" 
                className="form-control" 
                name="stdDesc"
                value={filters.stdDesc}
                placeholder="Enter Description"
                onChange={(event) => handleFilterChange('stdDesc',  event.target.value)}/>
            </div>

            <div>
            <label>Alternate Description:</label>
            <input 
                type="text" 
                className="form-control"
                name="altDesc"
                value={filters.altDesc}
                label="Alternate Description"
                placeholder="alt desc"
                size="large"
                onChange={(event) => handleFilterChange('altDesc',  event.target.value)}/>
            </div>

            <div>
            <label>Created By:</label>
            <input 
            type="text" 
            className="form-control" 
                name="createdBy"
                value={filters.createdBy}
                placeholder="Enter createdBy"
                size="large"
                onChange={(event) => handleFilterChange('createdBy',  event.target.value)}/>
            </div>

                
                <div >
            <label>Last Modified By:</label>
            <input 
            type="text" 
            className="form-control" 
            name="lastModifiedBy"
            value={filters.lastModifiedBy}
            placeholder="lastModifiedBy"
            onChange={(event) => handleFilterChange('lastModifiedBy',  event.target.value)}/>
            </div>

            <div>
                    <label>Created Date</label>
                    <div className="filters-form  d-flex align-items-center">
                        <DatePicker
                         
                            selected={filters.createdDate}
                            onChange={handleCreatedDateChange}
                            startDate={filters.createdDate}
                            endDate={filters.endDateCreated}
                            selectsRange
                            className="filters-form form-control"
                            
                        />
                    </div>
                </div>

                <div>
                    <label>Last Modified Date</label>
                    <div className="filters-form d-flex align-items-center">
                        <DatePicker
                        
                            selected={filters.lastModifiedDate}
                            onChange={handleLastModifiedDateChange}
                            startDate={filters.lastModifiedDate}
                            endDate={filters.endDateModified}
                            selectsRange
                            className="form-control"
                        />
                    </div>
                </div>
            </div>            
            <div className="filters-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:10, marginRight:15, marginTop:30 }}>
                <div className="card" style={{ border:'1px solid blue', marginRight:20}}>
                    <button className="btn btn-default" onClick={clearFilters}>
                        Clear Filters
                    </button>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default Filters;


