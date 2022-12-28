import style from './AddToCart.module.css';
import React, { useContext, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../UI/Button';
import { itemData } from './Products';
import CartItemData from '../../store/CartItemsData';
const AddToCart = (props) => {
    const inputRef = useRef();
    const { titles, price, id } = useContext(itemData);
    const generateId = `amount_${id}`
    const addTocartHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim() === '' || enteredAmountNumber < 1 || enteredAmountNumber > 5) return;
        props.getAmount(enteredAmountNumber);
    }
    return (
        <form className={style.AddToCartContainer} onSubmit={addTocartHandler}>
            <div className={style.AddToCartAmount}>
                <label className={style.AddToCartLabel} htmlFor={generateId}>Amount</label>
                <input id={generateId} type="number" className={style.AddToCartInput} min={1} max={5} defaultValue={1} ref={inputRef} />
            </div>
            <Button className={style.AddToCartBtn} ><FaPlus className={style.AddToCartIcon} /> Add</Button>
        </form>

    )
}
export default AddToCart;