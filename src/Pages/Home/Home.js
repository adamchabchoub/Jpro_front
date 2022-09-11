import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogicielCard from '../../Components/LogicielCard';
import Zoom from 'react-reveal/Zoom';
import ScrollButton from '../../Components/ScrollButton'
import Fade from 'react-reveal/Fade';
import { useLocation } from "react-router-dom";
import Alert from '../../Components/Alert.js'
import logiciels_fr from '../../languages/fr/infos_logiciels.fr.json';
import logiciels_en from '../../languages/en/infos_logiciels.en.json';
import logiciels_ar from '../../languages/ar/infos_logiciels.ar.json';
import { FormattedMessage, useIntl } from 'react-intl';




export default function Home() {
    const [showTitle, setShowTitle] = useState(false)
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setHeight(window.innerHeight);
    }

    //Language of the softwares
    const intl = useIntl();
    let logiciels;
    const language = intl.locale;

    if (language === "fr-FR") {
        logiciels = logiciels_fr
    }
    if (language === "en-US") {
        logiciels = logiciels_en
    }
    if (language === "ar-001") {
        logiciels = logiciels_ar
    }



    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    });

    const updateShowTxt = () => {
        setShowTitle(true)
    }
    let stateCheck = setInterval(() => {
        if (document.readyState !== 'loading') {
            setShowTitle(true);
            clearInterval(stateCheck);
        }
    }, 100);

    useEffect(() => {
        window.addEventListener("load", updateShowTxt)
        return () => window.removeEventListener("load", updateShowTxt)
    })

    const showTextOnScrollTop = () => {
        if (window.pageYOffset === 0) {
            setShowTitle(false);
            setShowTitle(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", showTextOnScrollTop)
        return () => window.removeEventListener("scroll", showTextOnScrollTop)
    })
    const [showAlert, setShowAlert] = useState(false)
    const location = useLocation();
    useEffect(() => {
        if (location.state !== undefined)
            setShowAlert(true);
    }, [location]);


    const useStyles = makeStyles({
        background2: {
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "10%",
            paddingTop: "5%"
        },

        background2After: {
            content: "",
            backgroundImage: "url('/Assets/SoftwareHome2.jpeg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            position: "absolute",
            top: 0,
            right: "0px",
            bottom: "0px",
            left: "0px",
            opacity: 0.1,
        },
        background: {
            backgroundImage: "url('/Assets/SoftwareHome.jpg')",
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: `${height}px`,
            color: 'white',
            backgroundAttachment: "fixed",
            // '@media(max-width: 1313px)': {
            //     height: '100px',
            // },
        },
    })
    const classes = useStyles();

    return (
        <div>
            <ScrollButton />
            {(location.state !== undefined && showAlert) &&
                <Alert message={location.state.message} />
            }
            <div className={classes.background}>
                <br />
                <Zoom right cascade collapse when={showTitle}>
                    <h1 className="title">
                        <FormattedMessage
                            id="homepage.title"
                            defaultMessage="Progiciel de gestion integré J-PRO ERP"
                        />
                    </h1>
                </Zoom>
            </div>
            <div id="scrollTo">
                <div className={classes.background2}>
                    <div className={classes.background2After}></div>

                    {logiciels?.map((logiciel, index) => {
                        if (index % 2 === 0)
                            return <Fade right><LogicielCard key={index} logiciel={logiciel} /></Fade>
                        else
                            return <Fade left><LogicielCard key={index} logiciel={logiciel} /></Fade>
                    })
                    }
                </div>
            </div>
        </div >
    )
}