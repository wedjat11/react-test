import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
export function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" size="sm" className="text-center button_modal" onClick={handleShow}>
          Salir
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmar acción</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          ¿Desea salir del proyecto? 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Aceptar
            </Button>
            <Button variant="primary">cancelar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }