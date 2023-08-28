import React from 'react';
import TotalProducts from './TotalProducts';

const Card = props => {
    return (
        <div className="card" style={{ border:'1px solid blue'}}>
        <div className="card-body">
            <div><TotalProducts/></div>
        </div>
    </div>
    );
};

export default Card;