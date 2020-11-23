import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton'


export default function ScrollButton() {

    const handleScroll = () => {
        const element = document.getElementById("scrollTo");
        element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <IconButton onClick={handleScroll}>
            <ExpandLessIcon />
        </IconButton>
    )
}