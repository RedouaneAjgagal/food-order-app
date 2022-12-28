import style from './Wrapper.module.css';
const Wrapper = (props) => {
    const classes = `${style.Wrapper} ${props.className}`;
    return (
        <div className={classes}>{props.children}</div>
    )
}
export default Wrapper;