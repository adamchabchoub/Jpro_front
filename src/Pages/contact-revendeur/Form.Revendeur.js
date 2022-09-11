import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import businessMeeting from './BusinessMeeting.jpeg';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${businessMeeting})`,
    backgroundRepeat: 'repeat',
    width: '100%',
    height: "180vh",
    color: 'white',
    backgroundAttachment: "fixed",
    position: 'absolute',
    zIndex: -1,
  },
  formContainer: {
    width: "45vw",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgba(250,250,250,0.95)",
    boxShadow: "0 0 10px rgba(33,33,33,1)",
    marginTop: "10vh",
    borderRadius: "1vh",
    zIndex: 2,
    '@media(max-width: 900px)': {
      width: "70vw"
    },
  },
  formTextField: {
    marginLeft: "10%",
    marginTop: "2%",
    width: "32vw",
    '@media(max-width: 900px)': {
      width: "54vw"
    },
  },
  formControl: {
    marginLeft: "10%",
    marginTop: '6%',
    marginBottom: '-1%',
    width: "32vw",
    '@media(max-width: 900px)': {
      width: "54vw"
    },
  },
  title: {
    color: "black",
    marginLeft: "10%",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    fontSize: "3.5vw",
    '@media(max-width: 770px)': {
      fontSize: "5vw"
    },
  },
  besoinTxt: {
    marginLeft: "10%",
    fontSize: "2vw",
    marginTop: "7vh",
    marginBottom: "-1vh"
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "10%",
    marginTop: "10%",
    marginBottom: "4vh",
    width: "10vw",
    '@media(max-width: 900px)': {
      width: "22vw"
    },
  },
  background2: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
    paddingTop: "5%"
  },

  background2After: {
    content: "",
    backgroundImage: `url(${businessMeeting})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  }
}))

export default function Revendeur() {
  const classes = useStyles();
  const history = useHistory();
  const initialValues = {
    nomSociete: '',
    contact: '',
    address: '',
    telephone: '',
    email: '',
    activity: '',
    observations: ''
  }

  function onSubmit(values) {
    axios.post('http://localhost:5000/candidatRevendeur/add', values)
      .then((response) => {
        localStorage.removeItem('countRefreshForAlert');
        history.push({ pathname: '/', state: { message: 'Formulaire soumis avec succès.' } });
      })
      .catch((error) => {
      });
  };


  const phoneRegExp = `^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[ ]{0,1}[-s./0-9]*$`;


  return (
    <div>
      <div className={classes.background2}>
        <div className={classes.background2After}></div>
        <div className={classes.formContainer}>
          <h1 className={classes.title}>
            <FormattedMessage id="dealer.title" defaultMessage="Devenir Revendeur" /></h1>
          <Formik
            {...{ initialValues, onSubmit }}
            validationSchema={
              Yup.object().shape({
                nomSociete: Yup.string().required(
                  <FormattedMessage id="societe.requirement" defaultMessage="nom societe requis" />),
                email: Yup.string().email(
                  <FormattedMessage id="email.validation" defaultMessage="email doit être valide " />)
                  .max(255).required(
                    <FormattedMessage id="email.requirement" defaultMessage="email requis" />),
                telephone: Yup.string().matches(phoneRegExp, {
                  message: <FormattedMessage id="phone.validation" defaultMessage="téléphone doit être valide "
                  />
                }).required(<FormattedMessage id="phone.requirement" defaultMessage="téléphone requis" />),
                address: Yup.string(),
                contact: Yup.string().required(<FormattedMessage id="contact.requirement" defaultMessage="contact requis" />),
                activity: Yup.string(),
                observations: Yup.string(),
              })
            }
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="nomsociete.label" defaultMessage="Nom / Raison sociale" />}
                    variant="outlined"
                    error={Boolean(touched.nomSociete && errors.nomSociete)}
                    helperText={touched.nomSociete && errors.nomSociete}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="nomSociete"
                    value={values.nomSociete}
                  />
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="contact.label" defaultMessage="Personne à contacter" />}
                    variant="outlined"
                    error={Boolean(touched.contact && errors.contact)}
                    helperText={touched.contact && errors.contact}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="contact"
                    value={values.contact}
                  />
                </div>
                <div className="form-row">
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="adress.label" defaultMessage="Adresse" />}
                    variant="outlined"
                    error={Boolean(touched.address && errors.address)}
                    helperText={touched.address && errors.address}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="address"
                    value={values.address}
                  />
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="telephone.label" defaultMessage="Téléphone" />}
                    variant="outlined"
                    error={Boolean(touched.telephone && errors.telephone)}
                    helperText={touched.telephone && errors.telephone}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="telephone"
                    value={values.telephone}
                  />
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="email.label" defaultMessage="Email" />}
                    variant="outlined"
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="email"
                    value={values.email}
                  />
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="activity.label" defaultMessage="Activité" />}
                    variant="outlined"
                    error={Boolean(touched.activity && errors.activity)}
                    helperText={touched.activity && errors.activity}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="activity"
                    value={values.activity}
                  />
                </div>
                <div className="form-row">
                  <TextField
                    id="outlined-secondary"
                    label={<FormattedMessage id="observations.label" defaultMessage="Observations" />}
                    variant="outlined"
                    error={Boolean(touched.observations && errors.observations)}
                    helperText={touched.observations && errors.observations}
                    color="primary"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.formTextField}
                    name="observations"
                    value={values.observations}
                  />
                </div>
                <div className="form-row">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {<FormattedMessage id="button.label" defaultMessage="Envoyer" />}
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div >
  )
}
