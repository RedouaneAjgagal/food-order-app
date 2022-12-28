import style from './Cart.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import CartContainer from '../cart/CartContainer';
import { Fragment, useState, useContext, useEffect } from 'react';
import CartItemData from '../../store/CartItemsData';
const Cart = () => {
    const cartCtx = useContext(CartItemData);
    const totalAmount = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)
    const [isCartOpen, setIsCartOpen] = useState(false);
    const openCartHandler = () => {
        setIsCartOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeCartHandler = () => {
        setIsCartOpen(false);
        document.body.style.overflow = 'visible';
    }
    const [isItemBumbed, setIsItemBumbed] = useState(false);
    useEffect(() => {
        if (cartCtx.items.length) setIsItemBumbed(true);
        const timer = setTimeout(() => {
            setIsItemBumbed(false);
        }, 300);
        return (() => {
            clearTimeout(timer);
        });
    }, [cartCtx.items]);
    const classes = `${style.BtnCart} ${isItemBumbed ? style.bump : ''}`
    return (
        <Fragment>
            <button className={classes} onClick={openCartHandler}><FaShoppingCart /> Your Cart <span className={style.Amount}>{totalAmount}</span></button>
            {isCartOpen ? <CartContainer onClose={closeCartHandler} /> : null}
        </Fragment>
    )
}
export default Cart;