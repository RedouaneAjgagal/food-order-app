import style from './CartProducts.module.css';
import CartItem from './CartItem';
import CartItemData from '../../store/CartItemsData';
import React, {useContext} from 'react';

const CartProducts = () => {
    const cartCtx = useContext(CartItemData);
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }
    const meal = cartCtx.items.map((item) => {
        return <CartItem key={item.id} itemData={item} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
    });
    return (
        <ul className={style.CartProducts}>
            {meal}
        </ul>
    )
}
export default CartProducts;