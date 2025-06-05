import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  Box,
  Container,
  Avatar,
  Badge,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import Logo from '../images/Charusat-logo.png';
import useStyles from '../styles/Header';

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
    {
      menuTitle: 'Internships',
      pageURL: '/internship',
    },
    {
      menuTitle: 'Projects',
      pageURL: '/projects',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={0} className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.logoContainer}>
            <Typography variant="h6" className={classes.title}>
              Internship Portal
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <Box className={classes.mobileActions}>
                <IconButton color="inherit" aria-label="search">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="notifications">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Menu
                id="mobile-menu"
                anchorEl={mobileMenuAnchor}
                keepMounted
                open={Boolean(mobileMenuAnchor)}
                onClose={() => setMobileMenuAnchor(null)}
                className={classes.mobileMenu}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.menuTitle}
                    onClick={() => handleMenuClick(item.pageURL)}
                    className={classes.mobileMenuItem}
                  >
                    {item.menuTitle}
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => handleMenuClick('/studentlogin')}
                  className={classes.mobileMenuItem}
                >
                  Login as Student
                </MenuItem>
                <MenuItem
                  onClick={() => handleMenuClick('/employeelogin')}
                  className={classes.mobileMenuItem}
                >
                  Login as Employer
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box className={classes.desktopMenu}>
              <Box className={classes.navLinks}>
                {menuItems.map((item) => (
                  <Button
                    key={item.menuTitle}
                    color="inherit"
                    onClick={() => handleMenuClick(item.pageURL)}
                    className={classes.navButton}
                  >
                    {item.menuTitle}
                  </Button>
                ))}
              </Box>
              <Box className={classes.authButtons}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleMenuClick('/studentlogin')}
                  className={classes.authButton}
                >
                  Login as Student
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleMenuClick('/employeelogin')}
                  className={classes.authButton}
                >
                  Login as Employer
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(Header);

/* import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core'
import { useStyles } from '../styles/Header'
import Logo from '../images/Charusat-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar color='inherit' position="sticky" lg={12} md={12} sm={12} xs={12}>
                <Toolbar variant="dense">
                    <Typography><img src={Logo} /></Typography>

                    <div className={classes.headerOptions}>
                   <Button color="inherit" className={classes.title}>Home</Button>
                    <Button color="inherit" className={classes.title}>About Us</Button>
                    <Button color="inherit" className={classes.title}>Internships</Button>
                    <Button color="inherit" className={classes.title}>Projects</Button>
                    <Button color="inherit" className={classes.title}>Contact</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header */
