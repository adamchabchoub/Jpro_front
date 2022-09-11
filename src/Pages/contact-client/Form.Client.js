import React, { useState } from 'react'
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
import businessMeeting from './BusinessMeeting.jpeg';
import { FormattedMessage } from 'react-intl';



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
        backgroundImage: `url(${businessMeeting})`,
        backgroundRepeat: 'repeat',
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
        paddingTop: "6vh",
        paddingBottom: "5vh"
    },
    besoinTxt: {
        marginLeft: "10%",
        fontSize: "2vw",
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
                <br />
                <div className={classes.formContainer} style={{ width: "45vw" }}>
                    <h1 className={classes.title} style={{ fontSize: "2.5vw" }}>
                        {<FormattedMessage
                            id="client.title"
                            defaultMessage="Bienvenue Client"
                        />}</h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={<FormattedMessage
                                    id="name.client"
                                    defaultMessage="Nom et Prénom"
                                />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "30vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={<FormattedMessage
                                    id="email.label"
                                    defaultMessage="Email"
                                />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "30vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={<FormattedMessage
                                    id="telephone.label"
                                    defaultMessage="Téléphone"
                                />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "30vw" }}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label"><FormattedMessage
                                id="software.label"
                                defaultMessage="Séléctionner Logiciel"
                            /></InputLabel>
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


                                <FormattedMessage id='achats.footer' >
                                    {(message) => <option value={1}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='ventes.footer' >
                                    {(message) => <option value={2}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='comptabilite.footer' >
                                    {(message) => <option value={3}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='GPAO.footer' >
                                    {(message) => <option value={4}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='stocks.footer' >
                                    {(message) => <option value={5}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='rh.footer' >
                                    {(message) => <option value={6}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='finances.footer' >
                                    {(message) => <option value={7}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='immobilisation.footer' >
                                    {(message) => <option value={8}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='paie.footer' >
                                    {(message) => <option value={9}>{message}</option>}
                                </FormattedMessage>
                            </Select>
                            <FormHelperText><FormattedMessage
                                id="helper"
                                defaultMessage="Required"
                            /></FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>
                            <FormattedMessage
                                id="client.besoin"
                                defaultMessage="Votre Besoin ?"
                            /></p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                            style={{ width: "30vw" }}>
                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel1"
                                    defaultMessage="Reporter un problème"
                                />} control={<Radio color="primary" />} value="problème" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel2"
                                    defaultMessage="Demander l'ajout d'une fonctionalité"
                                />} control={<Radio color="primary" />} value="fonctionalité" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel3"
                                    defaultMessage="Demander une formation"
                                />} control={<Radio color="primary" />} value="formation" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel4"
                                    defaultMessage="Demander de l'assistance"
                                />} control={<Radio color="primary" />} value="assistance" />

                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel5"
                                    defaultMessage="acheter"
                                />} control={<Radio color="primary" />} value="acheter" />

                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label={<FormattedMessage
                                    id="besoin.label"
                                    defaultMessage="Décrire votre besoin"
                                />}
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{ width: "30vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                <FormattedMessage
                                    id="button.label"
                                    defaultMessage="Envoyer"
                                />
                            </Button>
                        </div>
                    </form>
                </div>
            </Desktop>


            <Tablet>
                <div className={classes.container} style={{ backgroundSize: "150%", }}>
                </div>
                <br />
                <div className={classes.formContainer} style={{ width: "75vw", }} >
                    <h1 className={classes.title} style={{ fontSize: "3.8vw" }}><FormattedMessage
                        id="client.title"
                        defaultMessage="Bienvenue Client"
                    /></h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={
                                    <FormattedMessage
                                        id="name.client"
                                        defaultMessage="Nom et Prénom"
                                    />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "50vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={
                                    <FormattedMessage
                                        id="email.label"
                                        defaultMessage="Email"
                                    />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "50vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={
                                    <FormattedMessage
                                        id="telephone.label"
                                        defaultMessage="Téléphone"
                                    />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "50vw" }}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">
                                <FormattedMessage
                                    id="software.label"
                                    defaultMessage="Séléctionner Logiciel"
                                />  </InputLabel>
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


                                <FormattedMessage id='achats.footer' >
                                    {(message) => <option value={1}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='ventes.footer' >
                                    {(message) => <option value={2}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='comptabilite.footer' >
                                    {(message) => <option value={3}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='GPAO.footer' >
                                    {(message) => <option value={4}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='stocks.footer' >
                                    {(message) => <option value={5}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='rh.footer' >
                                    {(message) => <option value={6}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='finances.footer' >
                                    {(message) => <option value={7}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='immobilisation.footer' >
                                    {(message) => <option value={8}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='paie.footer' >
                                    {(message) => <option value={9}>{message}</option>}
                                </FormattedMessage>
                            </Select>
                            <FormHelperText><FormattedMessage
                                id="helper"
                                defaultMessage="Required"
                            /></FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>
                            <FormattedMessage
                                id="client.besoin"
                                defaultMessage="Votre Besoin ?"
                            /></p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                            style={{ width: "30vw" }}>
                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel1"
                                    defaultMessage="Reporter un problème"
                                />} control={<Radio color="primary" />} value="problème" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel2"
                                    defaultMessage="Demander l'ajout d'une fonctionalité"
                                />} control={<Radio color="primary" />} value="fonctionalité" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel3"
                                    defaultMessage="Demander une formation"
                                />} control={<Radio color="primary" />} value="formation" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel4"
                                    defaultMessage="Demander de l'assistance"
                                />} control={<Radio color="primary" />} value="assistance" />

                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel5"
                                    defaultMessage="acheter"
                                />} control={<Radio color="primary" />} value="acheter" />
                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label={
                                    <FormattedMessage
                                        id="besoin.label"
                                        defaultMessage="Décrire votre besoin"
                                    />}
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{ width: "50vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                <FormattedMessage
                                    id="button.label"
                                    defaultMessage="Envoyer"
                                />
                            </Button>
                        </div>
                    </form>
                </div>
            </Tablet>


            <Mobile>
                <div className={classes.container} style={{ backgroundSize: "320%", }}>
                </div>
                <br />
                <div className={classes.formContainer} style={{ width: "85vw", }} >
                    <h1 className={classes.title} style={{ fontSize: "4.8vw" }}>
                        <FormattedMessage
                            id="client.title"
                            defaultMessage="Bienvenue Client"
                        /></h1>
                    <form>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={
                                    <FormattedMessage
                                        id="name.client"
                                        defaultMessage="Nom et Prénom"
                                    />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "65vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={
                                    <FormattedMessage
                                        id="email.label"
                                        defaultMessage="Email"
                                    />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "65vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <TextField
                                id="outlined-secondary"
                                label={<FormattedMessage
                                    id="telephone.label"
                                    defaultMessage="Téléphone"
                                />}
                                variant="outlined"
                                color="primary"
                                className={classes.formTextField}
                                style={{ width: "65vw" }}
                            />
                        </div>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">
                                <FormattedMessage
                                    id="software.label"
                                    defaultMessage="Séléctionner Logiciel"
                                />
                            </InputLabel>
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
                                <FormattedMessage id='achats.footer' >
                                    {(message) => <option value={1}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='ventes.footer' >
                                    {(message) => <option value={2}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='comptabilite.footer' >
                                    {(message) => <option value={3}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='GPAO.footer' >
                                    {(message) => <option value={4}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='stocks.footer' >
                                    {(message) => <option value={5}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='rh.footer' >
                                    {(message) => <option value={6}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='finances.footer' >
                                    {(message) => <option value={7}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='immobilisation.footer' >
                                    {(message) => <option value={8}>{message}</option>}
                                </FormattedMessage>
                                <FormattedMessage id='paie.footer' >
                                    {(message) => <option value={9}>{message}</option>}
                                </FormattedMessage>
                            </Select>
                            <FormHelperText><FormattedMessage
                                id="helper"
                                defaultMessage="Required"
                            /></FormHelperText>
                        </FormControl>
                        <p className={classes.besoinTxt}>
                            <FormattedMessage
                                id="client.besoin"
                                defaultMessage="Votre Besoin ?"
                            />
                        </p>
                        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChangeRadio} className={classes.formTextField}
                            style={{ width: "65vw" }}>
                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel1"
                                    defaultMessage="Reporter un problème"
                                />} control={<Radio color="primary" />} value="problème" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel2"
                                    defaultMessage="Demander l'ajout d'une fonctionalité"
                                />} control={<Radio color="primary" />} value="fonctionalité" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel3"
                                    defaultMessage="Demander une formation"
                                />} control={<Radio color="primary" />} value="formation" />


                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel4"
                                    defaultMessage="Demander de l'assistance"
                                />} control={<Radio color="primary" />} value="assistance" />

                            <FormControlLabel label={
                                <FormattedMessage
                                    id="radiolabel5"
                                    defaultMessage="acheter"
                                />} control={<Radio color="primary" />} value="acheter" />

                        </RadioGroup>
                        <div className="form-row">
                            <TextField
                                id="outlined-multiline-static"
                                label={
                                    <FormattedMessage
                                        id="besoin.label"
                                        defaultMessage="Décrire votre besoin"
                                    />}
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.formTextField}
                                style={{ width: "65vw" }}
                            />
                        </div>
                        <div className="form-row">
                            <Button
                                variant="contained"
                                style={{ backgroundColor: "rgba(0,0,100)", color: "white" }}
                                className={classes.button}
                            >
                                <FormattedMessage
                                    id="button.label"
                                    defaultMessage="Envoyer"
                                />
                            </Button>
                        </div>
                    </form>
                </div>
            </Mobile>
        </div>
    )
}
