
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    Button,
    Container,
    Image,
    NavLink
} from 'react-bootstrap'
import { SET_KEY_TAB } from '../../../redux/actions/Main/MainActions'
import icon_car from '../../../assets/img/icon_car.svg';
import icon_escudo from '../../../assets/img/escudo.svg';
import icon_person from '../../../assets/img/person.svg';
import { marcas, years } from '../../../data/data';
import { FcCheckmark } from 'react-icons/fc';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineLeftCircle } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Tabs,
    Tab,
    withStyles,
    Radio,
    Divider,
    Box,
    Typography,

} from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';
import Accordion from './components/Accordion'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box  >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const AntTabs = withStyles({
    root: {
        maxWidth: '100%',
        color: '#ff00ff'
    },
    indicator: {
        color: '#1890ff',
    },

})(Tabs);
const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        maxWidth: 30,
        fontSize: 10,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(0),

        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function Plan() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let user = useSelector(state => state.main.mainreducer.user)

    const nextstep = () => {

    }
    const back = () => {
        dispatch({ type: SET_KEY_TAB, payload: 'first' })
    }
    useEffect(() => {


    }, []);
    const checkstate = () => {
        if (user == []) {

        }
    }




    return (
        <>
            <Container>
                <NavLink onClick={back} className="a"><AiOutlineLeftCircle size={30} color="#FC606B" /> &nbsp;VOLVER</NavLink>
                <Row>
                    <Col md={6}>
                        <h3 className="mt-5">Mira las coberturas</h3>
                        <p>Conoce las coberturas para tu plan</p>

                        <Row className="mt-3 mb-3">



                        </Row>

                        <Row className="mt-4 mb-3">
                            <Card style={{ width: '85%', height: '12rem' }}>
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <p>Placa: C2U-114</p>
                                            <h4>Wolkswagen 2019 Golf</h4>
                                            <Card.Link href="#" className="cyan">EDITAR</Card.Link>
                                        </Col>
                                        <Col md={6}> <Image id="icon_person" src={icon_person}></Image></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="mt-5">
                            <h5>  Agrega o quita coberturas</h5>
                            <AntTabs
                                value={value}
                                indicatorColor="secondary"
                                textColor="red"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                            >
                                <AntTab label="PROTEGE A TU AUTO" {...a11yProps(0)} />
                                <AntTab label="PROTEGE A LOS QUE TE REODEAN" {...a11yProps(1)} />
                                <AntTab label="MEJORA TU PlAN" {...a11yProps(2)} />
                            </AntTabs>
                            <TabPanel value={value} index={0}>
                                <Accordion />
                            </TabPanel>
                            <TabPanel value={value} index={1}>

                            </TabPanel>
                            <TabPanel value={value} index={2}>

                            </TabPanel>
                        </Row>


                    </Col>
                    <Col md={5} className="mt-5">
                        <Container>
                            <Row>
                                <Col md={6}> <h3>$35.00</h3>
                                    <p className="mb-3">mensuales</p></Col>
                                <Col md={6}>
                                    <Image src={icon_escudo}></Image>
                                </Col>
                            </Row>
                            <Divider />
                            <Col md={12}>
                                <Row className="mt-3"> <h5>El precio incluye:</h5> </Row>

                                <Row><p><FcCheckmark size={17} /> Llanta de respuesto</p> </Row>
                                <Row><p><FcCheckmark size={17} /> Analisis de motor</p> </Row>
                                <Row><p><FcCheckmark size={17} /> Aros gratis</p></Row>
                            </Col>

                            <Row>
                                <Button className="btn btn-primary btn-lg" type="submit"  >
                                    LO QUIERO
                        </Button>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
