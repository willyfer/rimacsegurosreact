import React, { useState, } from 'react'

import {
    Button,
    Col,
    Form,
    Row,
    DropdownButton,
    InputGroup,
    Dropdown,
    FormControl,
} from 'react-bootstrap';
import NavbarComponent from '../../../components/NavbarComponent';
import { useSelector, useDispatch } from 'react-redux'
import { getCotizar } from '../../../redux/actions/Main/MainActions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";
export default function Home() {

    const [docType, setDocType] = React.useState('');
    const [placa, setPlaca] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [doc, setDoc] = React.useState('');

    const [checkTC, setCheckTC] = React.useState(false);
    let history = useHistory();
    const dispatch = useDispatch()

    const handleSelectDocType = (e) => {
        console.log(e);
        setDocType(e)
    }
    const handleCheck = (e) => {
        console.log(e);
        setCheckTC(!checkTC);
    }
    const handleCotizar = async (e) => {
        e.preventDefault();
        let data = {
            'doc': setDocType,
            'placa': placa,
            'phone': phone
        }
        await dispatch(getCotizar(data))
        history.push("/cotiza");

    }

    return (
        <>

            <NavbarComponent />

            <Row>

                <Col sm={5} id="section_home_img" >
                    {/* <img src={img_home} alt=""   /> */}
                </Col>
                <Col sm={7} id="home" className="justify-content-center">
                    <Row className="justify-content-md-center">
                        <Col sm={5} id="form_home">
                            <h3 id="title_home">Déjanos tus datos</h3>
                            <Form className="justify-content-center" onSubmit={handleCotizar}>

                                <Form.Group controlId="">
                                    <InputGroup className="mb-3">
                                        <DropdownButton

                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title={docType ? docType : "--"}
                                            id="input-group-dropdown-1"
                                            onSelect={handleSelectDocType}
                                        >
                                            <Dropdown.Item href="#" eventKey="DNI">DNI</Dropdown.Item>

                                        </DropdownButton>
                                        <FormControl disabled={!docType} type="number" placeholder="Nro. de doc" value={doc} onChange={e => setDoc(e.target.value)} required aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group  >
                                    <Form.Control type="number" placeholder="Celular" required value={phone} onChange={e => setPhone(e.target.value)} />

                                </Form.Group>
                                <Form.Group  >
                                    <Form.Control type="text" placeholder="Placa" required value={placa} onChange={e => setPlaca(e.target.value)} />
                                </Form.Group>
                                <Form.Group id="formGridCheckbox">

                                    <Form.Row>
                                        <Col md={1}><Form.Check type="checkbox" required onChange={handleCheck} /></Col>
                                        <Col md={11}>
                                            <Form.Text>Acepto la <Link href="#" className="link"> Política de Protecciòn de Datos Personales</Link> y los <Link href="#" className="link">Términos y Condiciones</Link>.</Form.Text>
                                        </Col>


                                    </Form.Row>
                                </Form.Group>
                                <Button className="btn btn-primary btn-lg" type="submit" disabled={!docType}  >
                                    COTÍZALO
                                </Button>

                            </Form>
                        </Col>

                    </Row>

                </Col>
            </Row>

        </>
    )
}
