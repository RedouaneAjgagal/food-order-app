import style from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import InsideCartItemData from './store/InsideCartItemData';

function App() {
  return (
    <InsideCartItemData>
      <div className={style.App}>
        <Header />
        <Main />
      </div>
    </InsideCartItemData>
  );
}

export default App;
