import { Modal, Container, Col, Row } from "react-bootstrap";

const ModalDetalles = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Detalles domicilio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <p className="fw-bold">Información Solicitante</p>
                                <p>Nombre: {props.domicilio.nombreSolicitante}</p>
                                <p>Direccion: {props.domicilio.dirSolicitante}</p>
                                <p>Celular: {props.domicilio.celSolicitante}</p>
                                <p>Hora: {props.domicilio.horaSolicitante}</p>
                            </Col>
                            <Col xs={9} md={6}>
                                <p className="fw-bold">Información Destinatario</p>
                                <p>Nombre: {props.domicilio.nombreDestinatario}</p>
                                <p>Direccion: {props.domicilio.dirDestinatario}</p>
                                <p>Celular: {props.domicilio.celDestinatario}</p>
                                <p>Hora: {props.domicilio.horaDestinatario}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={props.closeModal}
                        className="btn btn-primary"
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default ModalDetalles;