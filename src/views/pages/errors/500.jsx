import React from 'react'
import { Link } from 'react-router-dom'
import {
    Row,
    Col,
    Button,
    Container,
    Image,
    NavLink,

} from 'react-bootstrap'
import error4040img from '../../../assets/img/500.png'
export default function Error500() {
    return (
        <>
            <div className="justify-content-center text-center  ">
                <Row>
                    <Image src={error4040img} width="100%" style={{ height: '100vh' }}>

                    </Image>
                    <Link to="/" className="btn btn-danger" id="img_404">Ir al Inicio</Link>
                </Row>


            </div>

        </>
    )
}
