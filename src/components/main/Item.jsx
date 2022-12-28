import style from './Item.module.css';
import Details from './Details';
import AddToCart from './AddToCart';
import CartItemData from '../../store/CartItemsData';
import React, {useContext} from 'react';
import { itemData } from './Products';
const Item = () => {
    const itemCtx = useContext(itemData);
    const cartCtx = useContext(CartItemData);
    const AddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: itemCtx.id,
            title: itemCtx.title,
            price: itemCtx.price,
            amount: amount
        })
    }
    return (
        <li className={style.Item}>
            <Details details={itemCtx} />
            <AddToCart getAmount={AddToCartHandler} />
        </li>
    )
}
export default Item;