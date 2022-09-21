import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



export default function InfoLogicielCard(props) {
    const useStyles = makeStyles({
        root: {
            height: "50vh",
            marginTop: "20vh",
            marginBottom: "22vh",
            maxWidth: "200vw",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 0 0px rgba(33,33,33,.2)",
            '@media(max-width: 1150px)': {
                height: "100vh",
            },
            '@media(max-height: 600px)': {
                height: "100vh",
            },
        },
        content: {
            display: "flex",
            flexDirection: `${props.flexDirection}`,
            '@media(max-width: 1150px)': {
                flexDirection: "column-reverse"
            },
            '@media(max-height: 600px)': {
                flexDirection: "column-reverse"
            },
        },
        textContainer: {
            maxWidth: "50vw",
            marginLeft: `${props.marginLeft}`,
            marginRight: `${props.marginRight}`,
            '@media(max-width: 1150px)': {
                width: "80vw",
                marginLeft: 0,
                marginRight: 0
            },
            '@media(max-height: 600px)': {
                width: "80vw",
                marginLeft: 0,
                marginRight: 0

            },
        },
        titleAndIconContainer: {
            display: "flex",
            marginBottom: "2vh",
            '@media(max-width: 1150px)': {
                width: "80vw",
            },
            '@media(max-height: 600px)': {
                width: "80vw",
            },
        },
        description: {
            fontSize: "25px",
            '@media(max-width: 1150px)': {
                width: "80vw",
            },
            '@media(max-height: 600px)': {
                width: "80vw",
            },
        },
    });
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className={classes.root}>
            {isOpen && (
                <Lightbox
                    mainSrc={props.image}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
            <CardContent className={classes.content}  >
                <div className={classes.textContainer}>
                    <div className={classes.titleAndIconContainer}>
                        <Typography variant="h4" component="h2" className={classes.title}>
                            {props.title}
                        </Typography>

                    </div>
                    <Typography variant="body1" color="textSecondary" className={classes.description}>
                        {props.description}
                    </Typography>
                </div>
            </CardContent>
        </Card >
    );
}
