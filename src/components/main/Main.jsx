import style from './Main.module.css';
import Products from './Products';
import Wrapper from '../UI/Wrapper';

const Main = () => {
    return (
        <main className={style.MainSection}>
            <Wrapper className={style.Main}>
                <Products />
            </Wrapper>
        </main>
    )
}
export default Main;