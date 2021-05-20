import React from 'react'
import {
    Tabs,
    Tab,
    withStyles,
    Radio,
    Divider,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import {
    Row,
    Col,
    Button,
    Container,
    Image,
    NavLink
} from 'react-bootstrap'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import icon_acc1 from '../../../../assets/img/acc_1.svg';


export default function Acoordeon() {
    const [selected, setSelected] = React.useState(false);
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Row>
                        <Col md={5}>
                            <Image src={icon_acc1}></Image>
                        </Col>
                        <Col md={7}>
                            <h5>Llanta robada</h5>
                            <Row>
                                <ToggleButton
                                    style={{ width: '30px', height: '30px', borderRadius: '15px' }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    {selected ? <RemoveIcon className="cyan" /> : <AddIcon className="cyan" />}
                                </ToggleButton>
                                <span id="txt_toogle" className="cyan">{!selected ? 'AGREGAR' : 'QUITAR'}</span>
                            </Row>
                        </Col>
                    </Row>



                </AccordionSummary>
                <AccordionDetails>

                    <Typography>
                        He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                        y mucho más
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Row>
                        <Col md={3}>
                            <Image src={icon_acc1}></Image>
                        </Col>
                        <Col md={8}>
                            <h5>Choque y/o pasarte la luz roja </h5>
                            <Row>
                                <ToggleButton
                                    style={{ width: '30px', height: '30px', borderRadius: '15px' }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    {selected ? <RemoveIcon className="cyan" /> : <AddIcon className="cyan" />}
                                </ToggleButton>
                                <span id="txt_toogle" className="cyan">{!selected ? 'AGREGAR' : 'QUITAR'}</span>
                            </Row>
                        </Col>
                    </Row>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Row>
                        <Col md={3}>
                            <Image src={icon_acc1}></Image>
                        </Col>
                        <Col md={8}>
                            <h5 >Atropello en la vía Evitamiento </h5>
                            <Row>
                                <ToggleButton
                                    style={{ width: '30px', height: '30px', borderRadius: '15px' }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    {selected ? <RemoveIcon className="cyan" /> : <AddIcon className="cyan" />}
                                </ToggleButton>
                                <span id="txt_toogle" className="cyan">{!selected ? 'AGREGAR' : 'QUITAR'}</span>
                            </Row>
                        </Col>
                    </Row>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        fdf
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </>
    )
}
