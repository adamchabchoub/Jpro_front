import 'date-fns';
import React from 'react';
import Navbar from './Navbar';
import BusinessMeeting from '../Assets/BusinessMeeting.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';




const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url("${BusinessMeeting}")`,
    backgroundRepeat: 'repeat',
    width: '100%',
    height: "180vh",
    color: 'white',
    backgroundAttachment: "fixed",
    position: 'absolute',
    zIndex: -1,
  },
  formContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "130vh",
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
    marginTop: "10%",
    width: "18vw"
  },
  formControl: {
    marginLeft: "10%",
    marginTop: '6%',
    marginBottom: '-1%',
    minWidth: "14vw",
},
}))

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


export default function Revendeur() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('1999-09-30T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  const classes = useStyles();
  const [ville, setVille] = React.useState('');

  const handleChangeSelect = (event) => {
      setVille(event.target.value);
  };
  return (
    <div>
      <Desktop>
        <div className={classes.container} style={{ backgroundSize: "100%", }}>
        </div>
        <Navbar />
        <br />
        <div className={classes.formContainer} style={{ width: "45vw" }}>
          <h1 className={classes.title} style={{ fontSize: "3.5vw" }}>Devenir Revendeur</h1>
          <form>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Prénom"
                variant="outlined"
                color="primary"
                className={classes.formTextField}
                style={{ width: "32vw" }}
              />
            </div>
            <div className="form-row">
              <TextField
                id="outlined-secondary"
                label="Nom de votre société"
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
            <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Emplacement Actuel</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={ville}
                                onChange={handleChangeSelect}
                                autoWidth
                                native
                            // MenuProps={{
                            //     disableScrollLock: true, 
                            //   }}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Tunis</option>
                                <option value={2}>Sfax</option>
                                <option value={3}>Medenine</option>
                                <option value={4}>Sousse</option>
                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date de naissance"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.formControl}
        />
      </Grid>
    </MuiPickersUtilsProvider>
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


      
    </div>
  )
}
