import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, TextField, InputAdornment, Button } from '@material-ui/core';
import { Email, Facebook, Instagram, LinkedIn, Twitter, YouTube, ArrowForward } from '@material-ui/icons';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SchoolIcon from '@material-ui/icons/School';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import useStyles from '../styles/Footer';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerRoot} component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Branding & Contact */}
          <Grid item xs={12} md={4}>
            <Box className={classes.branding}>
              <Typography variant="h4" className={classes.logoText} gutterBottom>
                Internship Portal
              </Typography>
              <Typography variant="body2" className={classes.address}>
                123 Career Avenue, Tech City, India<br />
                support@internshipportal.com<br />
                +91 9876543210
              </Typography>
              <Box className={classes.socialIcons} mt={2}>
                <IconButton color="inherit" href="#"><Facebook /></IconButton>
                <IconButton color="inherit" href="#"><Instagram /></IconButton>
                <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
                <IconButton color="inherit" href="#"><Twitter /></IconButton>
                <IconButton color="inherit" href="#"><YouTube /></IconButton>
              </Box>
            </Box>
          </Grid>
          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
              Quick Links
            </Typography>
            <Box className={classes.linksColumn}>
              <Link href="/" color="inherit" underline="none" className={classes.link}>Home</Link>
              <Link href="/internship" color="inherit" underline="none" className={classes.link}>Internships</Link>
              <Link href="/companies" color="inherit" underline="none" className={classes.link}>Companies</Link>
              <Link href="/about" color="inherit" underline="none" className={classes.link}>About</Link>
              <Link href="/contact" color="inherit" underline="none" className={classes.link}>Contact</Link>
            </Box>
          </Grid>
          {/* Policies */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
              Policies
            </Typography>
            <Box className={classes.linksColumn}>
              <Link href="#" color="inherit" underline="none" className={classes.link}>Privacy Policy</Link>
              <Link href="#" color="inherit" underline="none" className={classes.link}>Refund Policy</Link>
              <Link href="#" color="inherit" underline="none" className={classes.link}>Terms of Service</Link>
            </Box>
          </Grid>
          {/* Email Subscription & Badges */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
              Subscribe to our emails
            </Typography>
            <form className={classes.subscribeForm} autoComplete="off">
              <TextField
                variant="outlined"
                placeholder="Email"
                size="small"
                className={classes.emailInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button type="submit" className={classes.subscribeButton} variant="contained" color="primary">
                        <ArrowForward />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <Box className={classes.badges} mt={3}>
              {/* Material-UI badge icons (all v4 compatible) */}
              <Box className={classes.badgeIcon}><EmojiEventsIcon style={{ fontSize: 32, color: '#1976d2' }} /></Box>
              <Box className={classes.badgeIcon}><ThumbUpIcon style={{ fontSize: 32, color: '#10B981' }} /></Box>
              <Box className={classes.badgeIcon}><SchoolIcon style={{ fontSize: 32, color: '#F59E0B' }} /></Box>
              <Box className={classes.badgeIcon}><VerifiedUserIcon style={{ fontSize: 32, color: '#EF4444' }} /></Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.copyright} mt={6} textAlign="center">
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Internship Portal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 