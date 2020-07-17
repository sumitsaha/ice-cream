import React from 'react';
import classes from './TotalPrice.module.css';

const TotalPrice = ({ price = 0 }) => {
    return (
        <div className={classes.total}>
            <div>Total Price</div>
            <div>{price.toFixed(2)} Tk</div>
        </div>
    );
};

export default TotalPrice;
