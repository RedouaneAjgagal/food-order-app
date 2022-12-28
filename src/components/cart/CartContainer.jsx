import style from './CartContainer.module.css';
import CartProducts from './CartProducts';
import TotalAmount from './TotalAmount';
import CallToAction from './CallToAction';
import Wrapper from '../UI/Wrapper';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
const CartContainer = (props) => {
    return (
        ReactDOM.createPortal(
            <Fragment>
                <div className={style.Overlay} onClick={props.onClose}></div>
                <div className={style.CartContainer}>
                    <Wrapper className={style.Cart}>
                        <CartProducts />
                        <TotalAmount />
                        <CallToAction onClose={props.onClose} />
                    </Wrapper>
                </div>
            </Fragment>, document.getElementById('overlay')
        )
    )
}
export default CartContainer;