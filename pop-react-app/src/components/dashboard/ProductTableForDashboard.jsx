import React, {useEffect, useState} from 'react';
import products from '../../storage/products';
import { format } from 'date-fns';
import '../../css/tsi-ui-refresh.css'
import Filters from './Filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons';
const ProductTableForDashboard = props =>{
    const [productList, setProducts] = useState(products);
    const [showFilters, setShowFilters] = useState(false);
    const [productsFiltered, setProductsFiltered] = useState(products);
    const [sortOrder, setSortOrder] = useState('desc');
    const [sortColumn, setSortColumn] = useState('stdDesc');

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    useEffect(() => {
        const sortedProducts = [...productsFiltered].sort((a, b) => {
            if (sortOrder === 'asc') {
                if (sortColumn === 'stdDesc') {
                    if (!a[sortColumn] && !b[sortColumn]) {
                        return 0;
                    }
                    if (!a[sortColumn]) {
                        return 1;
                    }
                    if (!b[sortColumn]) {
                        return -1;
                    }
                    return a[sortColumn].localeCompare(b[sortColumn]);
                }
                return a[sortColumn] < b[sortColumn] ? -1 : 1;
            } else {
                if (sortColumn === 'stdDesc') {
                    if (!a[sortColumn] && !b[sortColumn]) {
                        return 0;
                    }
                    if (!a[sortColumn]) {
                        return -1;
                    }
                    if (!b[sortColumn]) {
                        return 1;
                    }
                    return b[sortColumn].localeCompare(a[sortColumn]);
                }
                return a[sortColumn] > b[sortColumn] ? -1 : 1;
            }
        })
        setProducts(sortedProducts)
    },[sortOrder, sortColumn, productsFiltered])

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const applyFilters = (filteredResults) => {
        setProductsFiltered(filteredResults)
        setProducts(filteredResults);
    };

return (
    <div style={{ border: '1px solid #0069D1', borderRadius:"10px" }}>
        <div className='d-flex align-items-left justify-content-between' style={{margin:10}}>
            <div>
                <h2 style={{ color: 'darkblue' }}>Total Products: {productList.length}</h2>
                <p>Company: test company</p>
            </div>
                <button className="btn btn-lg" onClick={toggleFilters} style={{ border: '1px solid blue', display: 'flex', alignItems: 'center' }}>
                    {showFilters ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                    {showFilters ? 'Hide filters' : 'Show filters'}
                </button>
        </div>

        {showFilters && <Filters products={products} applyFilters={applyFilters} style={{ zIndex: 2, position: "absolute"  }} />} 
        <div id="product-table-infi-scroll" className="row infinite-scroll-table" style={{margin:10, position: 'relative',  zIndex: 1}}>
            <div className="col-xs-12"> 
                <table className="tableLowerPadding table-hover readonlyTable" style={{  zIndex: 1}}>
                    <thead className="theadFreezing">
                        <tr className="trFreezing">
                            <th className="col-xs-3" onClick={() => handleSort('tsiProdId')}>
                                Product ID
                            </th>
                            <th className="col-xs-4" onClick={() => handleSort('stdDesc')}>
                                Description
                            </th>
                            <th className="col-xs-1" onClick={() => handleSort('createdDate')}>
                                Created Date
                            </th>
                            <th className="col-xs-1" onClick={() => handleSort('createdBy')}>
                                Created By
                            </th>
                            <th className="col-xs-1" onClick={() => handleSort('lastModifiedDate')}>
                                Last Modified Date
                            </th>
                            <th className="col-xs-1" onClick={() => handleSort('lastModifiedBy')}>
                                Last Modified By
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    {product.tsiProdId}
                                </td>
                                <td>{product.stdDesc}</td>
                                <td>{format(new Date(product.createdDate), 'MM/dd/yyyy HH:mm:ss')}</td>
                                <td>{product.createdBy}</td>
                                <td>{format(new Date(product.lastModifiedDate), 'MM/dd/yyyy HH:mm:ss')}</td>
                                <td>{product.lastModifiedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.length === 0 && (
                    <div className="alert alert-warning text-center">
                        No products available.
                    </div>
                )}
            </div>
        </div>

    </div>
);}

export default ProductTableForDashboard;