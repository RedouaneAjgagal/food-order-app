import style from './TotalAmount.module.css';
import CartItemData from '../../store/CartItemsData';
import React, { useContext } from 'react';
const TotalAmount = () => {
    const cartCtx = useContext(CartItemData);
    return (
        <div className={style.TotalAmount}>
            <h3>Total Amount</h3>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
    )
}
export default TotalAmount;