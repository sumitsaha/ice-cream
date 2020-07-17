import { countBy } from 'lodash';
import React from 'react';
import classes from './Item.module.css';

const Item = ({ name, add, remove, scoops = {} }) => {
    const scoopsByCount = countBy(scoops);
    return (
        <li className={classes.item}>
            <span>{name}</span>
            {scoopsByCount[name] >= 0 ? (
                <span className={classes.quantity}>{scoopsByCount[name]}</span>
            ) : null}
            <div className="right">
                <button
                    onClick={add.bind(this, name)}
                    type="button"
                    className={[classes.plus, 'rounded'].join(' ')}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={remove.bind(this, name)}
                    className={[classes.minus, 'rounded'].join(' ')}
                >
                    -
                </button>
            </div>
        </li>
    );
};

export default Item;
