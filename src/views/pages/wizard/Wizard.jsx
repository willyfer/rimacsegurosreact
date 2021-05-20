import React, { useState } from 'react'
import {
    Tab,
    Row,
    Col,
    Nav,
    Badge
} from 'react-bootstrap'
import Auto from './Auto'
import Plan from './Plan'
import Navbarcomponent from '../../../components/NavbarComponent'
import { useSelector } from 'react-redux'

export default function Wizard() {
    let keystore = useSelector(state => state.main.mainreducer.keytabdafault)



    return (
        <>
            <Navbarcomponent />
            <Tab.Container id="left-tabs-example" activeKey={keystore} defaultActiveKey="first"  >
                <Row>
                    <Col sm={3} className="bg-gray-w full-h">
                        <Nav variant="pills" className="flex-column justify-content-center">
                            <Nav.Item className="mt-5">
                                <Nav.Link eventKey="first" className="a"><Badge pill variant="info" className="badge">1</Badge>Datos del auto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="a"><Badge pill variant="info" className="badge">2</Badge>Arma tu plan</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Auto />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Plan />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}
