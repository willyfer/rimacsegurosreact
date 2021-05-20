
import React, { useEffect } from 'react'
import {
    Tab,
    Row,
    Col,
    Nav,
    Sonnet,
    Button,
    Container,
    Dropdown,
    FormLabel,
    Image,
    ButtonGroup,
    FormGroup

} from 'react-bootstrap'
import { SET_USER_AUTO, SET_KEY_TAB } from '../../../redux/actions/Main/MainActions'
import icon_car from '../../../assets/img/icon_car.svg';
import { marcas, years } from '../../../data/data';

import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineLeftCircle } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Grid,
    FormControlLabel,
    Checkbox,
    withStyles,
    Radio,
    RadioGroup,
    Divider,
    FormHelperText
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));



export default function Auto() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const history = useHistory();
    const [age, setAge] = React.useState('');
    const [marca, setMarca] = React.useState('');
    const [radio, setRadio] = React.useState('0');
    const [monto, setMonto] = React.useState(12500);
    const [btnMinus, setBtmMinus] = React.useState(true);
    const [btnPlus, setBtmPlus] = React.useState(false);
    const [errorAge, setErrorAge] = React.useState(false);
    const [errorMarca, setErrorMarca] = React.useState(false);
    const [errorGas, setErrorGas] = React.useState(false);
    const [name, setName] = React.useState('Sin nombre');
    let user = useSelector(state => state.main.mainreducer.user)
    const handleChangeAge = (event) => {
        setErrorAge(false)
        setAge(event.target.value);
    };
    const handleDataAuto = (event) => {
        if (validateData()) {
            let data_auto = {
                'age': age,
                'marca': marca,
                'gas': radio,
                'monto': monto
            }
            console.log('data_auto', data_auto);
            dispatch({ type: SET_USER_AUTO, payload: data_auto })
            nextstep();
        }

    };
    const nextstep = () => {
        dispatch({ type: SET_KEY_TAB, payload: 'second' })
    }
    useEffect(() => {
        // console.log('ruseefect');
        // if (user != []) {
        setName(user[0].name.first)
        // }

        return checkstate()

    }, []) // 


    const checkstate = () => {
        if (user == []) {
            console.log('user==vacio');
            history.push('/');
        }
    }

    const validateData = () => {
        let isvalid = false
        if (age != '' && marca != '' && radio != '') {
            isvalid = true
        } else {

            if (age == '' || age == null) {
                console.log('erro age');
                setErrorAge(true)
                isvalid = false
            }
            if (marca == '' || marca == null) {
                console.log('erro marca');
                setErrorMarca(true)
                isvalid = false
            }
            if (radio == '' || radio == null) {
                console.log('erro radio');
                setErrorGas(true)
                isvalid = false
            }

        }
        console.log('isvalkid', isvalid);
        return isvalid

    }

    const handleChangebtn = (type) => {

        setBtmPlus(true)
        if (type == 'minus') {
            if (monto > 12500) {
                setBtmPlus(false)
                setBtmMinus(false)
                let aux = monto - 100
                setMonto(aux)
            } else {
                setBtmMinus(true)
                setBtmPlus(false)
            }

        }
        if (type == 'plus') {
            if (monto < 16500) {
                setBtmPlus(false)
                setBtmMinus(false)
                let aux = monto + 100
                setMonto(aux)
            } else {
                setBtmPlus(true)
                setBtmMinus(false)
            }

        }


    };
    const handleChangeMarca = (event) => {

        setErrorMarca(false)
        setMarca(event.target.value);
    };
    const handleChangeRadio = (event) => {
        setErrorGas(false)
        setRadio(event.target.value);
    };

    return (
        <>
            <Container>
                <Link to="/" className="a"><AiOutlineLeftCircle size={30} color="#FC606B" /> &nbsp;VOLVER</Link>
                <Row>
                    <Col md={6}>
                        <h3 className="mt-5">¡Hola, <b className="red">{name}!</b></h3>
                        <p>Completa los datos de tu auto</p>
                        <Row>

                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                error={errorAge}
                                required
                            >
                                <InputLabel id="año">Año</InputLabel>
                                <Select
                                    autoWidth
                                    labelId="año"
                                    id="año"
                                    value={age}
                                    onChange={handleChangeAge}
                                    label="año"
                                >
                                    {years.map((year, i) => {
                                        return <MenuItem key={i} value={year}>{year}</MenuItem>
                                    })}


                                </Select>
                                <FormHelperText style={{ display: `${errorAge}` ? 'none' : 'flex' }} id="component-error-año">Seleccione un año</FormHelperText>
                            </FormControl>

                        </Row>
                        <Row>

                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                error={errorMarca}
                                required
                            >
                                <InputLabel id="marca">Marca</InputLabel>
                                <Select
                                    labelId="marca"
                                    id="marca"
                                    value={marca}
                                    onChange={handleChangeMarca}
                                    label="marca"
                                >
                                    {marcas.map((marca, i) => {
                                        return <MenuItem key={i} value={i}>{marca}</MenuItem>
                                    })}


                                </Select>
                                <FormHelperText style={{ display: `${errorMarca}` ? 'none' : 'flex' }} id="component-error-marca">Seleccione una marca</FormHelperText>
                            </FormControl>

                        </Row>
                        <Row className="mt-3 mb-3">
                            <Col md={6} >
                                <FormLabel component="legend">¿Tu auto es a gas?</FormLabel>
                            </Col>
                            <Col md={6}>
                                <FormGroup row="true" >

                                    <FormControlLabel value="female" control={
                                        <GreenRadio

                                            checked={radio === '0'}
                                            onChange={handleChangeRadio}
                                            value={'0'}
                                            name="radio-button-demo"
                                            inputProps={{ 'aria-label': 'A' }}

                                        />} label="Si" />
                                    <FormControlLabel value="female" control={
                                        <GreenRadio
                                            checked={radio === '1'}
                                            onChange={handleChangeRadio}
                                            value={'1'}
                                            name="radio-button-demo2"
                                            inputProps={{ 'aria-label': 'dfasdf' }}

                                        />} label="No" />
                                    <FormHelperText style={{ display: `${errorGas}` ? 'none' : 'flex' }} id="component-error-text">Seleccione una marca</FormHelperText>

                                </FormGroup>
                            </Col>


                        </Row>
                        <Divider />
                        <Row className="mt-4 mb-3">
                            <Col md={6}>

                                <FormLabel component="legend">Indica la suma asegurada</FormLabel>
                                <span className="span_subtitle"> MIN $12,500 &nbsp; &nbsp;&nbsp;MAX $16,500</span>
                            </Col>
                            <Col md={6}>
                                <ButtonGroup variant="outlined" color="secondary" className="btn-group" aria-label="outlined primary button group">
                                    <Button className="btn-1" disabled={btnMinus} onClick={() => handleChangebtn('minus')}>-</Button>
                                    <Button className="btn-2">${monto}</Button>
                                    <Button className="btn-1" disabled={btnPlus} onClick={() => handleChangebtn('plus')}>+</Button>
                                </ButtonGroup>

                            </Col>


                        </Row>
                        <Button className="btn btn-primary btn-lg" type="submit" onClick={handleDataAuto} >
                            CONTINUAR
                        </Button>

                    </Col>
                    <Col md={5} className="mt-5">
                        <Container>
                            <h5>AYUDA</h5>
                            <Divider />
                            <Row>
                                <Col md={6}><p>¿No encuentras el modelo ?</p>  <Link to="#" className="cyan">CLIC AQUÍ</Link></Col>
                                <Col md={6}> <Image src={icon_car} width="105"></Image></Col>
                            </Row>


                        </Container>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
