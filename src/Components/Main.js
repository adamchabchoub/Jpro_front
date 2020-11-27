import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import softwareImg from '../Assets/SoftwareHome.jpg'
import softwareImg2 from '../Assets/SoftwareHome2.jpeg'
import Logiciel from './Logiciel';
import Zoom from 'react-reveal/Zoom';
import ScrollButton from './ScrollButton'
import Fade from 'react-reveal/Fade';

export default function Main() {
    const [showTxt, setShowTxt] = useState(false)
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    });

    const updateShowTxt = () => {
        setShowTxt(true)
    }
    useEffect(() => {
        window.addEventListener("load", updateShowTxt)
        return () => window.removeEventListener("load", updateShowTxt)
    })

    const showTextOnScrollTop = () => {
        if (window.pageYOffset === 0) {
            setShowTxt(false);
            setShowTxt(true);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", showTextOnScrollTop)
        return () => window.removeEventListener("scroll", showTextOnScrollTop)
    })


    const styles = {
        background: {
            backgroundImage: `url("${softwareImg}")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: `${height}px`,
            color: 'white',
            backgroundAttachment: "fixed",
        },

        background2: {
            backgroundImage: `url("${softwareImg2}")`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: "500%",
            position: 'absolute',
            color: 'white',
            backgroundAttachment: "fixed",
            opacity: 0.1,
            zIndex: "-1",
            top: `${height}px`,
        },


    }

    return (
        <div>
            <ScrollButton />
            <Navbar />
            <div style={styles.background}>

                <br />
                <Zoom up cascade collapse when={showTxt}>
                    <h1 className="title">J-PRO: Meilleur ERP Tunisie</h1>
                </Zoom>
            </div>
            <div id="scrollTo">
                <div style={styles.background2}>
                </div>
                <Fade up>
                    <Logiciel description="La comptabilité gérée à l’aide du module J-PRO Comptabilité permet de disposer de toutes les informations concernant les transactions de l’entreprise et la situation de ses comptes. Ce qui lui permet d’avoir une meilleure visibilité sur son activité et l’aide à bien planifier sa stratégie de développement." title="Comptabilité" />
                </Fade>
                <Fade up>
                    <Logiciel description="L’entreprise doit s’adapter en permanence à la concurrence, ce qui l’empêche d’augmenter librement les prix de ventes afin de garantir ses marges. Pour Cela, la performance du processus d’achat est généralement l’une des priorités stratégiques de la direction." title="Gestion des achats" />
                </Fade>
                <Fade up>
                    <Logiciel description="Le module J-PRO Gestion des stocks est conçu afin d’offrir une utilisation simple et intuitive tout en assurant une maîtrise et une organisation rigoureuse et efficace de la gestion des stocks." title="Gestion des stocks" />
                </Fade>
                <Fade up>
                    <Logiciel description="Le Module J-PRO Gestion des ventes est conçu pour automatiser, d’une façon organisée et intuitive, les différentes fonctions liées à la gestion des ventes, de l’établissement du devis jusqu’à la génération de la facture et règlement du client.
                    Ce module, doté de fonctionnalités très riches, est destiné à renforcer l’efficacité des commerciaux dans leurs fonctions opérationnelles et décisionnelles." title="Gestion des ventes" />
                </Fade>
                <Fade up>
                    <Logiciel description="Le module J-PRO GPAO, avec sa performance et sa couverture fonctionnelle, est un outil bien placé pour garantir la rigueur et l’efficacité de l’ensemble des activités liées à la gestion du processus de production. Offrant des conditions favorables à l’entreprise pour optimiser l’utilisation de ses ressources, respecter ses délais, minimiser ses coûts de production et maîtriser la traçabilité des matières premières utilisées et des produits finis et semi-finis fabriqués." title="GPAO" />
                </Fade>
                <Fade up>
                    <Logiciel description="Avec le développement de l’entreprise et l’augmentation de son effectif, un logiciel de paie devient incontournable et obligatoire pour gérer la paie des salariés. Un logiciel de paie professionnel doit traiter les données relatives aux salaires, automatiser les calculs, générer les bulletins de paie et établir des déclarations sociales et fiscales." title="Gestion de la paie" />
                </Fade>
                <Fade up>
                    <Logiciel description="la gestion de la paie prend en charge l’aspect coût (salaires et aux charges sociales et fiscales liées), alors que le module de gestion du personnel prend en charge l’aspect capital humain qui doit être valorisé et géré de manière optimale. Avec ces deux modules, la gestion du personnel s’inscrit dans un contexte global de stratégie de développement de l’entreprise." title="Gestion des Ressources Humaines" />
                </Fade>
                <Fade up>
                    <Logiciel description="La gestion des immobilisations traite les informations liées aux actifs immobilisés de l’entreprise : immobilisations incorporelles, corporelles et financières.
                    Le module J-PRO Gestion des immobilisations est destiné à assurer une gestion efficace de l’intégralité de ces actifs durant leur cycle de vie." title="Gestion des immobilistations" />
                </Fade>
                <Fade up>
                    <Logiciel description="Une bonne gestion des ressources financières est indispensable pour assurer la pérennité de l’entreprise. Pour cela, l’entreprise doit mettre en place des outils cohérents de traitement, de contrôle et de prévision.
                    Le module J-PRO Gestion financière est conçue pour offrir, d’une façon instantanée, une vision détaillée et globale de l’activité de l’entreprise, lui permettant une prise de décision rapide et éclairée." title="Gestion Financière" />
                </Fade>
            </div>

        </div>
    )
}

