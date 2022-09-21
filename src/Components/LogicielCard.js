import React from 'react';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    imageContainerLaptop: {
        display: "flex",
        width: "40vh",
    },
    imageContainerMobile: {
        display: "flex",
        width: "30vw",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 0 10px rgba(33,33,33,1)",
        '@media(max-width: 770px)': {
            width: "40vw"
        },
        '@media(max-width: 510px)': {
            width: "60vw"
        },
    },
    descriptionContainer: {
        marginLeft: '5%',
        height: "40vh",
        width: "55vw"

    },
    description: {
        fontSize: "17px",
    },
    accordionContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80vw",
        backgroundColor: "transparent",
        marginTop: "4%"
    },
    accordionTitle: {
        fontSize: "3vw"
    },
    accordionDetails: {
        flex: 1,
        flexDirection: "column"
    },

}))

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1037 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1036 })
    return isMobile ? children : null
}
export default function Logiciel(props) {
    const classes = useStyles();

    const clickLogiciel = () => {
        console.log('hi')
    }

    return (
        <div>
            <Desktop>
                <div className="box" href="/test" onClick={clickLogiciel}>
                    <div className={classes.imageContainerLaptop}>
                        <Image
                            src={`Assets/images_logiciels/${props.logiciel.image}`}
                            style={{ width: "100%" }}
                            color="transparent"
                        />
                    </div>
                    <div className={classes.descriptionContainer}>
                        <Link to={`/logiciel/${props.logiciel.id}`} className='b'>
                            <h1 style={{ fontSize: "2.5vw", }}>{props.logiciel.name}</h1>
                        </Link>


                        <p className={classes.description}>{props.logiciel.description}</p>



                    </div>

                </div>
            </Desktop>

            <Mobile>
                <Accordion className={classes.accordionContainer}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accordionTitle}>{props.logiciel.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>

                        <p className={classes.description}>{props.logiciel.description}</p>
                        <div className={classes.imageContainerMobile}>
                            <Image
                                src={`Assets/images_logiciels/${props.logiciel.image}`}
                                style={{ width: "100%" }}
                                color="transparent"
                            />
                        </div>

                    </AccordionDetails>
                </Accordion>
            </Mobile>
        </div>
    )
}