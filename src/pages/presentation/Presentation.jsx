import styles from './Presentation.module.css'
import Me from '../../resources/img/me.jpg'
import { Helmet } from 'react-helmet-async';
//import { useNavigate } from 'react-router-dom';

const Presentation = () => {
  /*const navigate = useNavigate();
  const uneFonction = () =>{
    navigate('Presentation');
  }
  <button onClick={uneFonction}>Click me!</button>*/
  return <main>
     <Helmet>
       <meta name="description" content="Ma présentation"/>
       <title>Presentation - Portfolio</title>
    </Helmet>
    <div className={styles.i}>
      <div className={styles.left}>
        <div className={styles.leftwrapper}>
          <p className={styles.intro}>Bonjour, Je m'appelle</p>
          <p className={styles.name}>Gueu Armel Aristide Baba</p>
          <div className={styles.title}>
            <div className={styles.titlewrapper}>
            <div className={styles.titleitem}>java Programmer</div>
              <div className={styles.titleitem}>Web Developper</div>
              <div className={styles.titleitem}>UI/UX Designer</div>
              <div className={styles.titleitem}>C# Programmer</div>
            </div>
          </div>
          <p className={styles.desc}>
      
              Étudiant à la Cité collégiale à ma derniere session en programmation informatique.
              J’ai pu démontrer pendant cette formation un état esprit extraordinaire, en réalisant des projets de développement
              d’application desktop et mobile.
       
          </p>
          
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.infobg}>
          <img src={Me} alt="" className={styles.infoimg} /></div>
      </div>
    </div>
  </main>;
}

export default Presentation;