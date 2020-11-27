import React from 'react'
import Navbar from './Navbar';
import BusinessMeeting from '../Assets/BusinessMeeting.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form'


const useStyles = makeStyles((theme) => ({
    formContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        height: "150vh",
        width: "60vw",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(33,33,33,1)",
        marginTop:"10%"
    },

    container: {
        backgroundImage: `url("${BusinessMeeting}")`,
        backgroundSize: "100%",
        backgroundRepeat: 'repeat',
        width: '100%',
        height: "200%",
        color: 'white',
        backgroundAttachment: "fixed",
        position: 'absolute',
        zIndex: -1,
    },
    
    formInput: {

    }
}))

export default function Contact() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.container}>
            </div>
            <Navbar />
            <br />
            <div className={classes.formContainer}>
                <Form />
            </div>
        </div>
    )
}
