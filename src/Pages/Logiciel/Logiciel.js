import React from 'react'
import InfoLogicielCard from '../../Components/InfoLogicielCard';
import AvantageCard from '../../Components/AvantageCard';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Typography } from '@material-ui/core';
import logicielImg from './logiciel.png';
import softwares_en from './softwares-en.json';
import softwares_fr from './softwares.json';
import softwares_ar from './softwares-ar.json';
import { FormattedMessage, useIntl } from 'react-intl';

const useStyles = makeStyles({
    topContainer: {
        height: "70vh",
        maxWidth: "100%",
        backgroundColor: "#020611"



    },
    imageContainer: {
        backgroundImage: `url(${logicielImg})`,
        backgroundSize: "cover",
        width: "48vw",
        height: "80vh",
        position: "absolute",
        top: "12vh",
        right: "0vw",
        '@media(max-width: 810px)': {
            display: "none"
        }
    },
    title: {
        color: "white",
        marginTop: "10vh",
        fontSize: "50px",
        marginLeft: "14vw",



        '@media(max-width: 810px)': {
            marginTop: "5vh",
            display: "block"

        }
    },
    button: {
        color: 'white',
        backgroundColor: '#0451e1',
        marginLeft: "14vw",
        marginTop: "15vh",
        fontSize: "20px",
        '@media(max-width: 810px)': {
            maxWidth: "100rem",
            display: 'block',
            marginRight: "50px"
        }
    },
    secondContainer: {
        backgroundColor: "#F2F5F6",
        width: "100%",
        height: "80vh",
        display: "flex",
        '@media(max-width: 1313px)': {
            height: "145vh",
        },
        '@media(max-width: 774px)': {
            height: "225vh",
        }
    },
    avantageContainer: {
        display: "flex",
        height: "50vh",
        marginTop: "12vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        '@media(max-width: 1313px)': {
            height: "120vh",
        },
        '@media(max-width: 774px)': {
            height: "200vh",
        }
    }
})
export default function Logiciel(props) {
    const classes = useStyles();

    const intl = useIntl();
    let softwares;
    const language = intl.locale;

    if (language === "fr-FR") {
        softwares = softwares_fr
    }
    if (language === "en-US") {
        softwares = softwares_en
    }
    if (language === "ar-001") {
        softwares = softwares_ar
    }



    return (
        <div>
            {softwares?.map(data => {
                if (props.match.params.id === data.id)
                    return (<>

                        <div className={classes.topContainer}>
                            <div style={{ paddingTop: "10vh" }}>
                                <Zoom right cascade collapse className={{ marginTop: "16vh", display: "flex", flexDirection: "center" }}>
                                    <Typography className={classes.title}>{data.title} </Typography>

                                </Zoom>
                            </div>
                            <div className={classes.imageContainer} />
                        </div>
                        <Fade>
                            <InfoLogicielCard
                                flexDirection="row"
                                marginLeft="380px"
                                image="Assets/capture.png"
                                title={data.subtitle}
                                description={data.description}

                            />
                        </Fade>
                        {/* <Fade>
                <InfoLogicielCard
                    flexDirection="row-reverse"
                    marginLeft="0"
                    marginRight="10vw"
                    image={capture}
                    title="Une vraie souplesse d’utilisation"
                    description="Grâce à son circuit de validation largement paramétrable, vos responsables d’équipes valident les demandes d’absences en étant au bureau ou depuis leur mobile. Sage Espace Employés s’adapte à votre organisation de la plus simple à la plus complexe, en France ou à l’international.
                    Vos compteurs et soldes de congés payés, RTT, heures de récupération, absence maladie sont à jour en temps réel. Les contrôles sont automatiquement faits lors de la prise de congés par vos salariés."
                />
            </Fade> */}
                        {/* <Fade>
                <InfoLogicielCard
                    flexDirection="row"
                    marginLeft="10vw"
                    marginRight="0"
                    image={capture}
                    title="Le planning des congés en temps réel et partagé"
                    description="Oubliez les files d’attentes dans le bureau pour demander l’état de ses congés, les délais trop longs de préparation des données pour la paie, le planning Excel, difficile à maintenir et non partagé.
                    Vous gérez désormais le planning de présence de vos salariés et automatisez tout le processus de gestion des congés et des absences , du plus simple au plus complexe."
                />
            </Fade>
            <Fade>
                <InfoLogicielCard
                    flexDirection="row-reverse"
                    marginLeft="0"
                    marginRight="10vw"
                    image={capture}
                    title="Une paie prête dans les délais"
                    description="En fin de mois, vous allez gagner un temps précieux et vous éviter le stress de la paie en retard.
                    Il vous suffit d’exporter en un clic les données de congés et d’absences de Sage Espace Employés vers votre service de paie, interne ou externalisée, vers Sage 100cloud Paie & RH !"
                />
            </Fade> */}
                        <div className={classes.secondContainer}>
                            <div className={classes.avantageContainer}>
                                <AvantageCard
                                    image={`/Assets/logiciel_cards/${data.image1}`} />
                                <AvantageCard
                                    image={`/Assets/logiciel_cards/${data.image2}`} />
                                <AvantageCard
                                    image={`/Assets/logiciel_cards/${data.image3}`} />
                            </div>
                        </div>
                    </>

                    )
            }




            )

            } </div>)

}