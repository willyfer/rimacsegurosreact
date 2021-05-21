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
    FormControlLabel,
    FormControl
} from '@material-ui/core';
import {
    Row,
    Col,
    Image,

} from 'react-bootstrap'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch, useSelector } from 'react-redux';

import icon_acc1 from '../../../../assets/img/acc_1.svg';
import icon_acc2 from '../../../../assets/img/acc_2.svg';
import icon_acc3 from '../../../../assets/img/acc_3.svg';
import { SET_USER_PLAN } from '../../../../redux/actions/Main/MainActions';

const RenderComponent = (props) => {
    return (
        <Row>
            <Col md={3}>
                <Image src={props.icon}></Image>
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={12}> <h5 className="acc_title">{props.title}</h5></Col>
                    <Col md={12}>
                        <Row>
                            <ToggleButton
                                style={{ width: '30px', height: '30px', borderRadius: '15px', zIndex: 100000 }}
                                value="check"
                                selected={props.selected4}
                                onChange={() => {
                                    props.handleSelect()
                                }}
                            >
                                {props.selected4 ? <RemoveIcon className="cyan" /> : <AddIcon className="cyan" />}
                            </ToggleButton>
                            <span id="txt_toogle" className="cyan">{!props.selected4 ? 'AGREGAR' : 'QUITAR'}</span>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default function Acoordeon() {
    let monto = useSelector(state => state.main.mainreducer.plan[0].monto)
    const dispatch = useDispatch();

    const [selected, setSelected] = React.useState(false);
    const [selected2, setSelected2] = React.useState(false);
    const [selected3, setSelected3] = React.useState(false);
    const handleSelect = (type) => {
        let aux = monto
        switch (type) {

            case 'selected':
                setSelected(!selected);
                !selected ? dispatch({ type: SET_USER_PLAN, payload: monto + 15 }) : dispatch({ type: SET_USER_PLAN, payload: monto - 15 });
                break;
            case 'selected2':
                setSelected2(!selected2);
                !selected2 ? dispatch({ type: SET_USER_PLAN, payload: monto + 20 }) : dispatch({ type: SET_USER_PLAN, payload: monto - 20 });
                break;
            case 'selected3':
                setSelected3(!selected3);
                !selected3 ? dispatch({ type: SET_USER_PLAN, payload: monto + 50 }) : dispatch({ type: SET_USER_PLAN, payload: monto - 50 });
                break;
            default:
                break;
        }

    }


    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <FormControl
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        <RenderComponent icon={icon_acc1} selected4={selected} title="Llanta robada " handleSelect={() => handleSelect('selected')} />
                    </FormControl>
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
                    <FormControl
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                    >
                        <RenderComponent icon={icon_acc2} selected4={selected2} title="Choque y/o pasarte la luz roja " handleSelect={() => handleSelect('selected2')} />
                    </FormControl>
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
                    style={{ zIndex: 1 }}
                >
                    <FormControl
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}

                    >
                        <RenderComponent icon={icon_acc3} selected4={selected3} title="Atropello en la vía Evitamiento " handleSelect={() => handleSelect('selected3')} />
                    </FormControl>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                    </Typography>
                </AccordionDetails>
            </Accordion>

        </>
    )
}
