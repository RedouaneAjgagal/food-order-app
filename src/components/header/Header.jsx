import style from './Header.module.css';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';
const Header = () => {
    return (
        <div className={style.Header}>
            <Navbar />
            <HeaderContent />
        </div>
    )
}
export default Header