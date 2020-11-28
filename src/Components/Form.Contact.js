import React from 'react';
import Navbar from './Navbar';
import BusinessMeeting from '../Assets/BusinessMeeting.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    width: '100%',
    height: "150vh",
    color: 'white',
    backgroundAttachment: "fixed",
    position: 'absolute',
    zIndex: -1,
  },
  formContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "110vh",
    backgroundColor: "rgba(250,250,250,0.95)",
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
    paddingBottom: "3vh"
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
    width: "18vw"
  },
}))

export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <Desktop>
        <div className={classes.container} style={{ backgroundSize: "100%", }}>
        </div>
        <Navbar />
        <br />
        <div className={classes.formContainer} style={{ width: "45vw" }}>
          <h1 className={classes.title} style={{ fontSize: "3.5vw" }}>Contactez nous</h1>
          <form>
            <div className="form-row">

              <TextField
                id="outlined-secondary"
                label="Nom et Prénom"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}

              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom de la société"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>

            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Téléphone"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label=" Décrire Votre Besoin"
                multiline
                rows={4}
                variant="outlined"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <Button
                variant="contained"
                color="primary"
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
        <div className={classes.formContainer} style={{ width: "70vw" }}>
          <h1 className={classes.title} style={{ fontSize: "3.8vw" }}>Contactez nous</h1>
          <form>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom et Prénom"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom de la société"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Téléphone"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label=" Décrire Votre Besoin"
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
                color="primary"
                className={classes.button}
              >
                Envoyer
                </Button>
            </div>
          </form>
        </div>
      </Tablet>


      <Mobile>
        <div className={classes.container} style={{ backgroundSize: "320%" }}>
        </div>
        <Navbar />
        <br />
        <div className={classes.formContainer} style={{ width: "85vw" }}>
          <h1 className={classes.title} style={{ fontSize: "4.8vw" }}>Contactez nous</h1>
          <form>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom et Prénom"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom de la société"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Téléphone"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label=" Décrire Votre Besoin"
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
                color="primary"
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
