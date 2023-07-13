import styles from './AboutSecondApp.module.css';
import sun from "../../resources/img/sun.png";
import App2 from "../../resources/img/menuCon.png";
import commande from "../../resources/img/commande.png";
import { Helmet } from 'react-helmet-async';
//import Perdre from "../../resources/img/perdre.png"; 
import menuCon1 from "../../resources/img/menuCon1.png";

const About = () => {

  return <main>
    <Helmet>
      <meta name="description" content="Présentation de mon projet web" />
      <title>Projet 1 - Portfolio</title>
    </Helmet>
    <div className={styles.a}>
      <div className={styles.left}>

        <div className={styles.card}>
          <img src={App2} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 >About this App</h1>

        <p className={styles.desc}>
          Le Jeu est conçue en application Web avec la technologie handlebars et NodeJs.<br></br>
          
          • Si le véhicule tombe sur une case de trésor, il gagne 1000 points<br></br>
          • Pour chaque case vide sur laquelle le véhicule avance, il perd 15 points<br></br>  
          • Pour chaque tir du véhicule qui abîme ou détruit un bloc, il perd 10 points<br></br>
          <br></br>

          1. Une tuile vide<br></br>
          2. Une tuile avec un bloc fragile (se brise en un seul tir)<br></br>
          3. Une tuile avec un bloc moyen (se brise en deux tirs)<br></br>
          4. Une tuile avec un bloc solide (se brise en trois tirs)<br></br>
          <br></br>

          Le labyrinthe doit contenir 20 trésors
          Deux trésors ne peuvent pas être généré au même endroit.
          Un trésor ne peut pas être généré sur la tuile de départ du véhicule
          Si le véhicule avance sur une tuile de trésor, cette tuile deviendra une tuile vide
        </p>
        <div className={styles.sun}>
          <img src={sun} alt="" className={styles.sunimg} />
          <div className={styles.suntexts}>
            <p className={styles.suntitle}>Compétence</p>
            <p className={styles.sundesc}>
              Durant ma formation academique, j'ai reçu une bonne connaissance dans mes cours tels que le Web, la base de donnée, le test logiciel ansi en C# qu'en java.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <div className={styles.contenu}>
    <img src={menuCon1} alt="" className={styles.img1} />
    <img src={commande} alt="" className={styles.img1} />
    </div>
  </main>;
}

export default About;