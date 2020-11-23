import React from 'react';
import Image from 'material-ui-image';
import erpImg from '../Assets/erp.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    container: {

    },
    imageContainer: {
        // height: "10%",
        width: "45vh",
    },
    descriptionContainer: {

    },
    description: {
        fontSize: "20px",
        fontFamily: "Playfair Display",
        marginLeft:'50%'
    }
}))

export default function Logiciel() {
    const classes = useStyles();

    return (
        <div className="box">

            <div className={classes.imageContainer}>
                <Image
                    src={erpImg}
                    imageStyle={{ height: '100%', width: '100%' }}
                    color="transparent"
                />
            </div>
            <div className={classes.descriptionContainer}>
                <p className={classes.description}>ghassen
        </p>
            </div>
        </div>

    )
}