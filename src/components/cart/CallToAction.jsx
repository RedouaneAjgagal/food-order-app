import style from './CallToAction.module.css';
import Button from '../UI/Button';
import CartItemData from '../../store/CartItemsData';
import React, {useContext} from 'react';
const CallToAction = (props) => {
    const cartCtx = useContext(CartItemData);
    return (
        <div className={style.CallToAction}>
            <Button className={style.Close} onClick={props.onClose}>Close</Button>
            {cartCtx.items.length ? <Button className={style.Order}>Order</Button> : null}
        </div>
    )
}
export default CallToAction;