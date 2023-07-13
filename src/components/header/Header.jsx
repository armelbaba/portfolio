import Menu from '../menu/Menu';
import styles from './Header.module.css';

export default function Header() {
    return <header className={styles.header}>
        

        <p className={styles.portfolio}>Portfolio</p>
       <Menu />
    </header>
}


    
     