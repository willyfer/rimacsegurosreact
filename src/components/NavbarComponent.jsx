import React from 'react'
import Logo_rimac from '../assets/img/Logo_rimac.png';
import icon_phone from '../assets/img/phone-call.svg';
import {
    NavbarBrand,
    Navbar,
    Image,
    Nav
} from 'react-bootstrap'

export default function NavbarComponent() {
    return (
        <div>
            <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/" id="brand"  ><Image src={Logo_rimac}  ></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="content-end" className="justify-content-end" >
                    <Nav className="">
                        <Nav.Link href="#home">¿Tienes alguna duda?</Nav.Link>
                        <Nav.Link href="#link" id="link_phone"><Image src={icon_phone} width="15"></Image> (01) 411 6001</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
