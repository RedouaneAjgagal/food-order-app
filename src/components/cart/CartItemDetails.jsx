import style from './CartItemDetails.module.css';
const CartItemDetails = (props) => {
    return (
        <div className={style.CartItemDetails}>
            <h2 className={style.ItemCartTitle}>{props.itemData.title}</h2>
            <div className={style.ItemPriceDetails}>
                <span className={style.ItemCartPrice}>${props.itemData.price.toFixed(2)}</span>
                <span className={style.ItemCartAmount}>x{props.itemData.amount}</span>
            </div>
        </div>
    )
}
export default CartItemDetails;