import style from './Button.module.css';

const Button = (props) => {
    const classes = `${props.className} ${style.Button}`
    return (
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button;