import React, { useState } from 'react'
import Navbar from './Navbar';
import BusinessMeeting from '../Assets/BusinessMeeting.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useMediaQuery } from 'react-responsive';



const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 968 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 651, maxWidth: 967 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 650 })
    return isMobile ? children : null
}




const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url("${BusinessMeeting}")`,
        backgroundRepeat: 'repeat',
        // background:"linear-gradient(190deg, #3936e0 30%, rgba(0, 0, 0, 0)70%)",
        width: '100%',
        height: "200%",
        color: 'white',
        backgroundAttachment: "fixed",
        position: 'absolute',
        zIndex: -1,
        // opacity:"1"
    },
    formContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        height: "160vh",
        backgroundColor: "rgba(250,250,250,0.96)",
        boxShadow: "0 0 10px rgba(33,33,33,1)",
        marginTop: "10%",
        borderRadius: "3vh"
    },
    formTextField: {
        marginLeft: "10%",
        marginTop: "2%",
    },
    title: {
        color: "black",
        marginLeft: "10%",
        fontFamily: "Playfair Display",
        paddingTop: "6vh",
        paddingBottom:"5vh"
    },
    besoinTxt: {
        marginLeft: "10%",
        fontSize: "2vw",
        fontFamily: "Playfair Display",
        marginTop: "6vh",
        marginBottom: "-1vh"
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: "10%",
        marginTop: "6%",
        width: "18vw"
    },
    formControl: {
        marginLeft: "10%",
        marginTop: '6%',
        marginBottom: '-1%',
        minWidth: "10vw",
    },
}))

export default function Contact() {
    const [logiciel, setLogiciel] = React.useState('');

    const handleChangeSelect = (event) => {
        setLogiciel(event.target.value);
    };


    const classes = useStyles();
    const [value, setValue] = useState('problème');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <Desktop>
                <div className={classes.container} style={{ backgroundSize: "100%", }} >
                </div>
                <Navbar />
                <br />
                <div className={classes.formContainer} style={{ width: "45vw" }}>
                    <h1 className={classes.title} style={{fontSize: "2.5vw"}}>Bienvenue Client</h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Nom et Prénom"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "30vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Email"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "30vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Téléphone"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "30vw"}}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Séléctionner Logiciel</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={logiciel}
                                onChange={handleChangeSelect}
                                autoWidth
                                native
                            // MenuProps={{
                            //     disableScrollLock: true, 
                            //   }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Gestion des Acahts</option>
                                <option value={2}>Gestion des Ventes</option>
                                <option value={3}>Comptabilité</option>
                                <option value={4}>GPAO</option>
                                <option value={5}>Gestion des Stocks</option>
                                <option value={6}>Gestion des Ressources Humaines</option>
                                <option value={7}>Gestion Financière</option>
                                <option value={8}>Gestion des Immobiliers</option>
                                <option value={9}>Gestion de la paie</option>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>Votre Besoin?</p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                        style={{width: "30vw"}}>
                            <FormControlLabel label="Reporter un problème" control={<Radio color="primary" />} value="problème" />
                            <FormControlLabel label="Demander l'ajout d'une fonctionalité" control={<Radio color="primary" />} value="fonctionalité" />
                            <FormControlLabel label="Demander une formation" control={<Radio color="primary" />} value="formation" />
                            <FormControlLabel label="Demander de l'assistance" control={<Radio color="primary" />} value="assistance" />
                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label=" Décrire Votre Besoin"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{width: "30vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </Desktop>
            
            
            <Tablet>
            <div className={classes.container} style={{ backgroundSize: "150%", }}>
                </div>
                <Navbar />
                <br />
                <div className={classes.formContainer} style={{ width: "75vw", }} >
                    <h1 className={classes.title} style={{fontSize: "3.8vw"}}>Bienvenue BenJomaa Motors</h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Nom et Prénom"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "50vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Email"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "50vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Téléphone"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "50vw"}}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Séléctionner Logiciel</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={logiciel}
                                onChange={handleChangeSelect}
                                autoWidth
                                // native
                            // MenuProps={{
                            //     disableScrollLock: true, 
                            //   }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Gestion des Acahts</option>
                                <option value={2}>Gestion des Ventes</option>
                                <option value={3}>Comptabilité</option>
                                <option value={4}>GPAO</option>
                                <option value={5}>Gestion des Stocks</option>
                                <option value={6}>Gestion des Ressources Humaines</option>
                                <option value={7}>Gestion Financière</option>
                                <option value={8}>Gestion des Immobiliers</option>
                                <option value={9}>Gestion de la paie</option>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>Votre Besoin?</p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                        style={{width: "50vw"}}>
                            <FormControlLabel label="Reporter un problème" control={<Radio color="primary" />} value="problème" />
                            <FormControlLabel label="Demander l'ajout d'une fonctionalité" control={<Radio color="primary" />} value="fonctionalité" />
                            <FormControlLabel label="Demander une formation" control={<Radio color="primary" />} value="formation" />
                            <FormControlLabel label="Demander de l'assistance" control={<Radio color="primary" />} value="assistance" />
                            <FormControlLabel label="Acheter" control={<Radio color="primary" />} value="acheter" />
                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label=" Décrire Votre Besoin"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{width: "50vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </Tablet>
            
            
            <Mobile>
            <div className={classes.container} style={{ backgroundSize: "320%", }}>
                </div>
                <Navbar />
                <br />
                <div className={classes.formContainer} style={{ width: "85vw", }} >
                    <h1 className={classes.title} style={{fontSize: "4.8vw"}}>Bienvenue BenJomaa Motors</h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Nom et Prénom"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "65vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Email"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "65vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label="Téléphone"
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{width: "65vw"}}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Séléctionner Logiciel</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={logiciel}
                                onChange={handleChangeSelect}
                                autoWidth
                                native
                            // MenuProps={{
                            //     disableScrollLock: true, 
                            //   }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Gestion des Acahts</option>
                                <option value={2}>Gestion des Ventes</option>
                                <option value={3}>Comptabilité</option>
                                <option value={4}>GPAO</option>
                                <option value={5}>Gestion des Stocks</option>
                                <option value={6}>Gestion des Ressources Humaines</option>
                                <option value={7}>Gestion Financière</option>
                                <option value={8}>Gestion des Immobiliers</option>
                                <option value={9}>Gestion de la paie</option>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>Votre Besoin?</p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                        style={{width: "65vw"}}>
                            <FormControlLabel label="Reporter un problème" control={<Radio color="primary" />} value="problème" />
                            <FormControlLabel label="Demander l'ajout d'une fonctionalité" control={<Radio color="primary" />} value="fonctionalité" />
                            <FormControlLabel label="Demander une formation" control={<Radio color="primary" />} value="formation" />
                            <FormControlLabel label="Demander de l'assistance" control={<Radio color="primary" />} value="assistance" />
                            <FormControlLabel label="Acheter" control={<Radio color="primary" />} value="acheter" />
                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label=" Décrire Votre Besoin"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{width: "65vw"}}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </Mobile>
        </div>
    )
}
