import React from 'react';
import ProductTableForDashboard from './ProductTableForDashboard';
import '../../css/dashboard/Dashboard.css'

export const Dashboard = () => {


    return (
        <div className='dashboard-container'>

            <div className='container-fluid my-4'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='mb-0'>Dashboard</h1>
                    </div>
                </div>
            </div>
            <div className="card" style={{ border: '1px solid #0069D1', margin: 20 }}>
                <ProductTableForDashboard />
            </div>
            {/* <Policy> </Policy> */}
        </div>
    );
}










