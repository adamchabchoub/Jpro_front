import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        height: "50vh",
        marginTop: "20vh",
        marginBottom: "22vh",
        maxWidth: "85vw",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 0 0px rgba(33,33,33,.2)",
    },
});

export default function InfoLogicielCard(props) {
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
            <CardContent style={{
                display: "flex",
                flexDirection: `${props.flexDirection}`
            }}>

                <Image src={props.image}
                    style={{ width: "100%", position: 'sticky', height: "auto"  }}
                    imageStyle={{ width: 'inherit', height: 'inherit' }}
                    color="transparent"
                // cover
                />
                <div style={{
                    maxWidth: "32vw",
                    marginLeft: `${props.marginLeft}`,
                    marginRight: `${props.marginRight}`
                }}>

                    <div style={{ display: "flex", marginBottom:"2vh" }}>
                        <Typography variant="h4" component="h2">
                            {props.title}
                        </Typography>
                        <IconButton
                            onClick={() => setIsOpen(true)}
                        >
                            <AspectRatioIcon />
                        </IconButton>
                    </div>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </div>
            </CardContent>
        </Card >
    );
}
