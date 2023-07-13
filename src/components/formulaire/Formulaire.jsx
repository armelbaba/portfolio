import { useState } from "react";
import styles from "./Formulaire.module.css";
import emailValidator from 'email-validator';

function Formulaire() {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (formValues.email !== '' && emailValidator.validate(formValues.email) 
                                && formValues.message.length>=4
                                && formValues.username.length>1) {
      console.log(formValues.username);
      console.log(formValues.email);
      console.log(formValues.message) ;
      formValues.message='';
      formValues.email = '';
      formValues.username='';
    }
    
  };

  
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Nom utilisateur Obligatoire!";
    }
    if (!values.email) {
      errors.email = "Email est requit!";
    } else if (!emailValidator.validate(values.email)) {
      errors.email = "Ce format Email est non valide!";
    }
    if (!values.message) {
      errors.message = "message obligatoire";
    } else if (values.message.length < 4) {
      errors.message = "le message doit contenir au moins  4 characteres";
    } else if (values.message.length > 50) {
      errors.message = "le message ne doit pas depasser plus de 50 characteres";
    }
    return errors;
  };

  return (
    <div className={styles.container}>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="ui message success">Message envoyé avec succès</div>
      )
      }

      <form onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <div>
          <div className={styles.field}>

            <label htmlFor="nom">Username</label>
            <input
            id="nom"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>

          <p className={styles.erreur}>{formErrors.username}</p>
          <div className={styles.field}>
            <label htmlFor="mail">Email</label>
            <input
            id="mail"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />

          </div>

          <p className={styles.erreur}>{formErrors.email}</p>
          <div className={styles.field}>
          <label htmlFor="mes">Message</label>
          <textarea  
           id="mes" name="message" placeholder="Ecrivez votre message"  value={formValues.message}  onChange={handleChange} className={styles.taille}></textarea>
            
          </div>
          <p className={styles.erreur}>{formErrors.message}</p>
          <button >Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
