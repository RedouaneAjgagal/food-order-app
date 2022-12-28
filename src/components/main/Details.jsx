import style from './Details.module.css';

const Details = (props) => {
    return (
        <div className={style.Details}>
            <h2>{props.details.title}</h2>
            <p>{props.details.description}</p>
            <span className={style.DetailsPrice}>${props.details.price.toFixed(2)}</span>
        </div>
    )
}
export default Details;