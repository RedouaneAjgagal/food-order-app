import style from './Navbar.module.css';
import Logo from './Logo';
import Cart from './Cart';

const Navbar = () => {
    return (
        <nav className={style.NavbarContainer}>
            <div className={style.Navbar}>
                <Logo />
                <Cart />
            </div>
        </nav>
    )
}
export default Navbar;