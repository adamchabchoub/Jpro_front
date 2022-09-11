import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    paddingTop: "6vh",
    paddingBottom: "3vh"
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
        <br />
        <div className={classes.formContainer} style={{ width: "45vw" }}>
          <h1 className={classes.title} style={{ fontSize: "3.5vw" }}><FormattedMessage id="contact" defaultMessage="Contactez nous" /></h1>
          <form>
            <div className="form-row">

              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomprenom" defaultMessage="nom et prénom" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}

              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomsociete" defaultMessage="nom de la société" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="email" defaultMessage="email" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>

            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="tel" defaultMessage="téléphone" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label={<FormattedMessage id="desc" defaultMessage="Décrire votre besoin" />}
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
                {<FormattedMessage id="envoyer" defaultMessage="envoyer" />}
              </Button>
            </div>
          </form>
        </div>
      </Desktop>


      <Tablet>
        <div className={classes.container} style={{ backgroundSize: "150%", }}>
        </div>
        <br />
        <div className={classes.formContainer} style={{ width: "70vw" }}>
          <h1 className={classes.title} style={{ fontSize: "3.8vw" }}><FormattedMessage id="contact" defaultMessage="Contactez nous" /></h1>
          <form>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomprenom" defaultMessage="nom et prénom" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomsociete" defaultMessage="nom de la société" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="email" defaultMessage="email" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="tel" defaultMessage="téléphone" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "50vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label={<FormattedMessage id="desc" defaultMessage="Décrire votre besoin" />}
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
                {<FormattedMessage id="envoyer" defaultMessage="envoyer" />}
              </Button>
            </div>
          </form>
        </div>
      </Tablet>


      <Mobile>
        <div className={classes.container} style={{ backgroundSize: "320%" }}>
        </div>
        <br />
        <div className={classes.formContainer} style={{ width: "85vw" }}>
          <h1 className={classes.title} style={{ fontSize: "4.8vw" }}><FormattedMessage id="contact" defaultMessage="Contactez nous" /></h1>
          <form>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomprenom" defaultMessage="nom et prénom" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="nomsociete" defaultMessage="nom de la société" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="email" defaultMessage="email" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label={<FormattedMessage id="tel" defaultMessage="téléphone" />}
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "65vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-multiline-static"
                label={<FormattedMessage id="desc" defaultMessage="Décrire votre besoin" />}
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
                {<FormattedMessage id="envoyer" defaultMessage="envoyer" />}
              </Button>
            </div>
          </form>
        </div>
      </Mobile>

    </div>
  )
}