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
            <Navbar />
            <div style={styles.background}>
                <div style={{ opacity: 1 }}>
                    <br />
                    <Zoom left cascade collapse when={showTxt}>
                        <h1 className="title">J-PRO: Meilleur ERP Tunisie</h1>
                    </Zoom>
                </div>
            </div>
            <div id="scrollTo">
                <div style={styles.background2}>
                </div>
                <Fade left>
                    <Logiciel />
                </Fade>
                <Fade right>
                    <Logiciel />
                </Fade>
                <Fade left>
                    <Logiciel />
                </Fade>
                <Fade right>
                    <Logiciel />
                </Fade>
                <Fade left>
                    <Logiciel />
                </Fade>
                <Fade right>
                    <Logiciel />
                </Fade>
                <Fade left>
                    <Logiciel />
                </Fade>
                <Fade right>
                    <Logiciel />
                </Fade>
                <Fade left>
                <Logiciel />
            </Fade>
            </div>

        </div>
    )
}

