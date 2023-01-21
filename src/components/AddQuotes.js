import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function AddQuotes() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Button className="addQuotes" onClick={handleShow}>
        Add Quotes
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Quotes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddQuotes