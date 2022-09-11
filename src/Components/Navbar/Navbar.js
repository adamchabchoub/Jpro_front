import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import '../../App.css';
import { CSSTransition } from 'react-transition-group';
import { Link as RouterLink } from 'react-router-dom';
import { Context } from '../../Components/Wrapper';
import { FormattedMessage } from 'react-intl';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktopRight: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionDesktopLeft: {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar(props) {
  const [isTransparent, setIsTransparent] = useState(true);
  const [scroll, setScroll] = useState(0);
  //Language of the softwares
  const context = React.useContext(Context);
  const currentLanguage = localStorage.getItem("language")
  useEffect(() => {
    function updatePosition() {
      setScroll(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    if (scroll > 10) setIsTransparent(false)
    else setIsTransparent(true);
    return () => window.removeEventListener('scroll', updatePosition);
  }, [scroll]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <FormattedMessage
          id="profile.navbar"
          defaultMessage="Profil"
        /></MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <FormattedMessage
          id="account.navbar"
          defaultMessage="Mon Compte"
        />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <p><FormattedMessage
          id="revendeur.navbar"
          defaultMessage="Devenir Revendeur"
        /></p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p><FormattedMessage
          id="contact.navbar"
          defaultMessage="Contactez Nous"
        /></p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p><FormattedMessage
          id="apropos.navbar"
          defaultMessage="à propos"
        /></p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow}>
        <CSSTransition
          in={isTransparent}
          timeout={3000}
          classNames="navScroll"
        >
          <div className="navbar">
            <Toolbar>
              <Button style={{ color: "white" }} component={RouterLink} to="/">
                <FormattedMessage
                  id="home-navbar"
                  defaultMessage="Home" /></Button>
              <div className={classes.sectionDesktopRight}>
                <Button style={{ color: "white" }} component={RouterLink} to="/client">
                  <FormattedMessage
                    id="client-navbar"
                    defaultMessage="Client" /></Button>
                <Button style={{ color: "white" }} component={RouterLink} to="/revendeur">
                  <FormattedMessage
                    id="revendeur-navbar"
                    defaultMessage="Revendeur" /></Button>
                <Button style={{ color: "white" }} component={RouterLink} to="/contact">
                  <FormattedMessage
                    id="contact-navbar"
                    defaultMessage="Contact" /></Button>
                <Button style={{ color: "white" }}>
                  <FormattedMessage
                    id="about-navbar"
                    defaultMessage="about" /></Button>
              </div>
              <div className={classes.grow} />
              <select className="languageDropdown" value={context.local} onChange={context.selectLang} defaultValue={currentLanguage}>
                <option value="fr-FR"> Français</option>
                <option value="en-US">English</option>
                <option value="ar-001">العربية</option>
              </select>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  style={{ color: "white" }}
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </div>
        </CSSTransition>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </ThemeProvider>
  );
}
