import {  NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {
    return <nav>   
          <ul className={styles.ul}>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? styles.active : undefined}>
                    Acceuil
                </NavLink>
            </li>
            <li>
                <NavLink to='projetJeuLabyrintheTank' className={({isActive}) => isActive ? styles.active : undefined}>
                    Projet 1
                </NavLink>
            </li>
            <li>
                <NavLink to='projetJeu' className={({isActive}) => isActive ? styles.active : undefined}>
                    Projet 2
                </NavLink>
            </li>

            <li>
                <NavLink to='formulaire' className={({isActive}) => isActive ? styles.active : undefined}>
                    Contact
                </NavLink>
            </li>
            
            <li>
                <NavLink to='temoignage' className={({isActive}) => isActive ? styles.active : undefined}>
                    temoignage
                </NavLink>
            </li>
        </ul>
    </nav>
}