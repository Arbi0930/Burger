
import styles from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerBuilder  from "../Burgerbuilder";
function App() {
  return <div>
    <Toolbar />
    <main className={styles.Content}><BurgerBuilder/></main>
  </div>
}

export default App;
