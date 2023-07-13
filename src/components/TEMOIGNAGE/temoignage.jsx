import React, { useState } from "react";
import styles from "./temoignage.css";
import { Button, Card, Modal, Form } from "react-bootstrap";

function Temoignage() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [functionality, setFunctionality] = useState("");
  const [notes, setNotes] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddTestimonial = () => {
    const newTestimonial = {
      name,
      functionality,
      notes,
    };
    setTestimonials([...testimonials, newTestimonial]);
    handleCloseModal();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setFunctionality("");
    setNotes("");
  };

  const handleDeleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter(
      (_, i) => i !== index
    );
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className={styles.container}>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-lg-4" key={index}>
            <Card>
              <div className="face front-face">
                <img
                  style={{ width: "350px" }}
                  src={testimonial.imageUrl}
                  alt=""
                  className="profile"
                />
                <div className={`pt-3 text-uppercase name ${styles.name}`}>
                  {testimonial.name}
                </div>
                <div
                  className={`designation ${styles.designation}`}
                >
                  {testimonial.functionality}
                </div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div
                  className={`testimonial ${styles.testimonial}`}
                >
                  {testimonial.notes}
                </div>
                <span className="fas fa-quote-right"></span>
                <div className="d-flex justify-content-between mt-3">
                  <Button
                    variant="primary"
                    size="sm"
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteTestimonial(index)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
        <div className="col-lg-4">
          <Card>
            <div className="face front-face">
              <img
                style={{ width: "350px" }}
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt=""
                className="profile"
              />
              <div className={`pt-3 text-uppercase name ${styles.name}`}>
                Robert Garrison
              </div>
              <div
                className={`designation ${styles.designation}`}
              >
                Android Developer
              </div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left"></span>
              <div className={`testimonial ${styles.testimonial}`}>
              J’ai fait le prix d’achat en seulement 48 heures! Merci de l’avoir rendu indolore, agréable.
                Le service était excellent. Je vais référer toutes les personnes que je connais.
              </div>
              <span className="fas fa-quote-right"></span>
              <div className="d-flex justify-content-between mt-3">
                <Button
                  variant="primary"
                  size="sm"
                >
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                >
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card>
            <div className="face front-face">
              <img
                width="350 px"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="profile"
              />
              <div className={`pt-3 text-uppercase name ${styles.name}`}>
                Jeffery Kennan
              </div>
              <div
                className={`designation ${styles.designation}`}
              >
                Full Stack Developer
              </div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left"></span>
              <div className={`testimonial ${styles.testimonial}`}>
              Vraiment bien, vous avez sauvé notre entreprise! J’ai fait le prix d’achat en seulement 48 heures!
                mec, cette chose va de mieux en mieux à mesure que j’en apprends plus à ce sujet.
              </div>
              <span className="fas fa-quote-right"></span>
              <div className="d-flex justify-content-between mt-3">
                <Button
                  variant="primary"
                  size="sm"
                >
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                >
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="text-center mt-4">
        <Button
          variant="primary"
          onClick={handleShowModal}
        >
          Ajouter un témoignage
        </Button>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un témoignage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="functionality">
              <Form.Label>Fonction</Form.Label>
              <Form.Control
                type="text"
                value={functionality}
                onChange={(e) => setFunctionality(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
          >
            Annuler
          </Button>
          <Button
            variant="primary"
            onClick={handleAddTestimonial}
          >
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Temoignage;
