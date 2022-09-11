import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import footerImg from './footer.png';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles({
    container: {
        width: "100%",
        height: "auto",
        backgroundColor: "#020611",
        display: "flex",
        position: "relative",
        flexDirection: "column"
        // flexWrap:"wrap",
    },
    socialNetworkContainer: {
        width: "300px",
        textAlign: "center",
        flexWrap: "nowrap",
        marginBottom: "2vh"
        // paddingTop:"20px"
    },
    socialText: {
        color: "white",
        marginBottom: "-1px",
        '@media(max-width: 810px)': {
            fontSize: "32px"
        }
    },
    copyrightContainer: {
        display: "flex",
        textAlign: "center",
        position: "absolute",
        bottom: 0
        // backgroundColor: "red"
    },
    copyrightText: {
        color: "white",
        fontSize: "10px"
    },
    copyrightIcon: {
        fill: "white",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "2px"
    },
    partOne: {
        paddingTop: "20px",
        // marginLeft: "2vw",
        position: "relative"
    },
    partWithoutCopyright: {
        flexDirection: "row",
        display: "flex",
        '@media(max-width: 810px)': {
            flexDirection: "column",
            // backgroundColor:"red",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50px"
        }
    },
    partTwoAndThree: {
        flexDirection: "row",
        display: "flex"
    },
    logiciels: {
        paddingTop: "20px",
        flexDirection: "column",
        display: "flex",
        marginLeft: "4vw",
        marginRight: "4vw",
        marginBottom: "20px",
        '@media(max-width: 810px)': {
            marginLeft: "2vw",
            marginRight: "8vw",
        },
        '@media(max-width: 410px)': {
            marginLeft: "2vw",
            marginRight: "0vw",
        }
    },
    services: {
        paddingTop: "20px",
        flexDirection: "column",
        display: "flex",
        marginLeft: "3vw",
        marginRight: "3vw",
        '@media(max-width: 810px)': {
            marginLeft: "8vw",
            marginRight: "0vw",
        },
        '@media(max-width: 410px)': {
            marginLeft: "1vw",
            marginRight: "0vw",
        },
    },
    imageContainer: {
        backgroundImage: `url(${footerImg})`,
        backgroundSize: "cover",
        width: "380px",
        height: "300px",
        marginTop: "40px",
        marginLeft: "6vw",
        '@media(max-width: 810px)': {
            display: "none"
        }
    },
    productsText: {
        color: "white",
        '@media(max-width: 810px)': {
            fontSize: "22px"
        }
    },
    servicesText: {
        color: "white",
        '@media(max-width: 810px)': {
            fontSize: "22px",
            paddingRight: "10px"
        }
    },
    productsLinks: {
        marginTop: "4px",
        marginBottom: "8px",
        color: "white",
        fontSize: "14px",
        '@media(min-width: 810px)': {
            whiteSpace: "nowrap"
        }
    },
})
export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.partWithoutCopyright}>
                <div className={classes.partOne}>
                    <div className={classes.socialNetworkContainer}>
                        <h3 className={classes.socialText}><FormattedMessage
                            id="footer.title"
                            defaultMessage="Rejoignez nous!"
                        /></h3>
                        <IconButton href="https://www.facebook.com/TUNIDEV">
                            <FacebookIcon style={{ fill: "#4267B2" }} />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/TUNIDEV">
                            <InstagramIcon style={{ fill: "#E1306C" }} />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/TUNIDEV">
                            <LinkedInIcon style={{ fill: "#0e76a8" }} />
                        </IconButton>
                        <IconButton href="https://www.facebook.com/TUNIDEV">
                            <YouTubeIcon style={{ fill: "red" }} />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.partTwoAndThree}>
                    <div className={classes.logiciels}>
                        <h3 className={classes.productsText}>
                            <FormattedMessage
                                id="jpro.title"
                                defaultMessage="Progiciel de gestion integré J-PRO ERP"
                            />
                        </h3>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="ventes.footer"
                                defaultMessage="Gestion des ventes"
                            />
                        </Link>

                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="achats.footer"
                                defaultMessage="Gestion des achats"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="comptabilite.footer"
                                defaultMessage="Comptabilité"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="stocks.footer"
                                defaultMessage="Gestion des stocks"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/"><FormattedMessage
                            id="rh.footer"
                            defaultMessage="Gestion des ressources humaines"
                        />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="GPAO.footer"
                                defaultMessage="GPAO"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="paie.footer"
                                defaultMessage="Gestion de la paie"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="finances.footer"
                                defaultMessage="Gestion financière"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="immobilisation.footer"
                                defaultMessage="Gestion des immobilisations"
                            />
                        </Link>
                    </div>
                    <div className={classes.services}>
                        <h3 className={classes.servicesText}>
                            <FormattedMessage
                                id="service.footer"
                                defaultMessage="Services"
                            />
                        </h3>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="assistance"
                                defaultMessage="Assistance"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="formation"
                                defaultMessage="Formation"
                            />
                        </Link>
                        <Link className={classes.productsLinks} component={RouterLink} to="/">
                            <FormattedMessage
                                id="conception"
                                defaultMessage="Conception et mise en place"
                            />
                        </Link>
                    </div>
                </div>
                <div className={classes.imageContainer}>
                </div>
            </div>
            <div className={classes.copyrightContainer}>
                <CopyrightIcon className={classes.copyrightIcon} style={{ fontSize: 18 }} />
                <h6 className={classes.copyrightText}>
                    <FormattedMessage
                        id="copyrights"
                        defaultMessage="Copyright 2022"
                    /></h6>
            </div>
        </div>
    )
}
