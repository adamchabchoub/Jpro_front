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
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url("${BusinessMeeting}")`,
        backgroundSize: "100%",
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
        width: "45vw",
        backgroundColor: "rgba(250,250,250,0.92)",
        boxShadow: "0 0 10px rgba(33,33,33,1)",
        marginTop: "10%",
        borderRadius: "3vh"
    },
    formTextField: {
        marginLeft: "10%",
        marginTop: "2%",
        width: "30vw"
    },
    title: {
        color: "black",
        marginLeft: "10%",
        fontFamily: "Playfair Display",
        fontSize: "2.5vw",
        paddingTop: "6vh"
    },
    besoinTxt: {
        marginLeft: "10%",
        fontSize: "2vw",
        fontFamily: "Playfair Display",
        marginTop: "7vh",
        marginBottom: "-1vh"
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: "10%",
        marginTop: "6%",
        width: "10vw"
    },
    formControl: {
        marginLeft:"10%",
        marginTop:'6%',
        marginBottom:'-1%',
        minWidth: 200,
      },
}))

export default function Contact() {
    const [age, setAge] = React.useState('');

    const handleChangeSelect = (event) => {
      setAge(event.target.value);
    };
    

    const classes = useStyles();
    const [value, setValue] = useState('problème');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <div className={classes.container}>
            </div>
            <Navbar />
            <br />
            <div className={classes.formContainer}>
                <h1 className={classes.title}>Bienvenue BenJomaa Motors</h1>
                <form>
                    <div className="form-row">
                        <TextField
                            id="outlined-secondary"
                            label="Nom et Prénom"
                            variant="outlined"
                            color="primary"
                            className={classes.formTextField}
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="outlined-secondary"
                            label="Email"
                            variant="outlined"
                            color="primary"
                            className={classes.formTextField}
                        />
                    </div>
                    <div className="form-row">
                        <TextField
                            id="outlined-secondary"
                            label="Téléphone"
                            variant="outlined"
                            color="primary"
                            className={classes.formTextField}
                        />
                    </div>
                    <FormControl required className={classes.formControl}>
                        <InputLabel id="demo-simple-select-required-label">Séléctionner Logiciel</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={age}
                            onChange={handleChangeSelect}
                            className={classes.selectEmpty}
                            autoWidth
                            // MenuProps={{
                            //     disableScrollLock: true, 
                            //   }}
                        >
                            <MenuItem value={10}>Comptabilité</MenuItem>
                            <MenuItem value={20}>Gestion des Acahts</MenuItem>
                            <MenuItem value={30}>Gestion des ventes</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <p className={classes.besoinTxt}>Votre Besoin?</p>
                    <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}>
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
        </div>
    )
}
