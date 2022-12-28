import style from './CartItem.module.css';
import ControlAmount from './ControlAmount'
import CartItemDetails from './CartItemDetails'
const CartItem = (props) => {
    return (
        <li className={style.CartItem}>
            <CartItemDetails itemData={props.itemData} />
            <ControlAmount onRemove={props.onRemove} onAdd={props.onAdd} />
        </li>
    )
}
export default CartItem;