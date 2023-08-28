import React from 'react';
import ProductTableForDashboard from './ProductTableForDashboard';
import '../css/Dashboard.css'

export const Dashboard = () => {

    const Card = props => {
        return (
            <div className="card" style={{ border:'1px solid #0069D1', margin:20}}>
                <ProductTableForDashboard/>
            </div>
        );
    };
   
    const title = () => {
        return (
            <div className='container-fluid my-4'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='mb-0'>Dashboard</h1>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='dashboard-container'>
            {title()}
            {Card()}
         {/* <Policy> </Policy> */}
        </div>
    );
}










