import React from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from '../../../components/NavbarComponent';
import persona2 from '../../../assets/img/person2.svg'
import { useSelector } from 'react-redux';

export default function Thanks() {
    let email = useSelector(state => state.main.mainreducer.user);

    return (
        <>
            <NavbarComponent />
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={persona2}></Image>
                    </Col>
                    <Col md={5} className="mt-5">
                        <h2 className="red mt-2">¡Te damos la bienvenida! </h2>
                        <h2> Cuenta con nosotros para proteger tu vehículo</h2>
                        <p className="space_p">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
                        <p ><b>{email[0].email}</b></p>

                        <Button className="btn btn-primary btn-lg mt-2" type="submit" onClick="" >
                            CÓMO USAR MI SEGURO
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
