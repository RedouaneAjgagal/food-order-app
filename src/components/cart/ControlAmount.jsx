import style from './ControlAmount.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa'
const ControlAmount = (props) => {
    return (
        <div className={style.ControlAmount}>
            <button className={style.ControlMinus} onClick={props.onRemove}><FaMinus /></button>
            <button className={style.ControlPlus} onClick={props.onAdd}><FaPlus /></button>
        </div>
    )
}
export default ControlAmount;