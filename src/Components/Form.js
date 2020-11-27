import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formTextField: {
    marginLeft: "10%",
    marginTop: "2%",
    width: "35vw"
  },
  title: {
    color: "black",
    marginLeft: "10%",
    fontFamily: "Playfair Display",
    fontSize: "4vw"
  },
  besoinTxt:{
    marginLeft: "10%",
    fontSize: "2vw",
    fontFamily: "Playfair Display",
    marginTop:"7vh",
    marginBottom:"-1vh"
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "10%",
    marginTop: "6%",
    width: "10vw"
  },
}));
export default function Form() {
  const classes = useStyles();

  const [value, setValue] = useState('problème');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 className={classes.title}>Contactez nous</h1>
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
            label="Nom de la société"
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
        <p className={classes.besoinTxt}>Votre Besoin?</p>
        <RadioGroup aria-label="besoin" name="besoin1" value={value} onChange={handleChange} className={classes.formTextField}>
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
        color="primary"
        className={classes.button}
      >
        Envoyer
      </Button>
      </div>
      </form>
    </div>
  );

}

