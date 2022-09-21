import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { useState } from 'react'
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const useStyles = makeStyles({
    root: {
        width: "300px",
        marginLeft: "5vw",
        marginRight: "5vw",
    },
    media: {
        height: "30vh",
    },
});

export default function MediaCard(props) {
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
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                    onClick={() => setIsOpen(true)}

                />


            </CardActionArea>
        </Card >
    );
}