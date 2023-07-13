import styles from './About.module.css';
import Afficher from "../../resources/img/affichage.png";
import Perdre from "../../resources/img/perdre.png";
import Gagner from "../../resources/img/gagner.png";
import { Helmet } from 'react-helmet-async';

const About = () => {

  return (<main>
     <Helmet>
       <meta name="description" content="Présentation de mon projet android"/>
       <title>Projet 2 - Portfolio</title>
      </Helmet>  
     <section className={styles.titre}>
      <h1>Application de jeux mobile</h1>
     </section>
    
    <section className={styles.page1}>
      <div className={styles.contenu}>
          <img src={Afficher} alt="" className={styles.img}/>
            <p>
             Cette application est realisée sous android  le but est de chercher le
             super hero correspondant au nom afficher en haut dans la liste de tout
             les heros.
            </p>
      </div>

      <div className={styles.contenu}>
        <div>
        <p>La couleur de l'interface de l'application change de couleur est devient rouge
          si nous sousissons le mauvais hero et nous avons la possibilité de rejouer en cliquant 
          sur le boutton recommencher se situant en haut à droit.
        </p>
        </div>
           
          <img src={Perdre} alt="" className={styles.img} />
      </div>

      <div className={styles.contenu}>
            
          <img src={Gagner} alt=""  className={styles.img}/>
          <p>
              en fin si nous trouvons le super hero correspondant au nom rechercher,
              la couleur de l'interface devient verte.
            </p>
      </div>
    </section>

  </main>

  );
}

export default About;