import {
  Container,
  Grid,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import Aboutimg from '../images/about .svg';
import useStyles from '../styles/About/About';

const AboutUsScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          className={classes.container}
          justify='space-between'
          container
          spacing={3}
        >
          <Grid item xs={12} md={6} lg={5}>
            <img className={classes.image} src={Aboutimg} alt='AboutImg' />
          </Grid>
          <Grid item className={classes.information} xs={12} md={6} lg={5}>
            <Typography variant="body1" className={classes.description}>
              Our website focuses on providing an opportunity to the students of
              our university to apply for summer internships. Students can
              create their profile and look for the internships provided by
              several companies and apply according to their skills and
              convenience. They can upload their resumes to make it easier for
              the companies to review at ease. Once reviewed, the company can
              mail the accepted students for further details directly, making it
              an autonomous system. Our team got inspired to initiate this after
              seeing the hardships faced by students to get their summer
              internships as an important milestone in their college life. This
              platform reduces the complexity and time for students to apply for
              internships at one hub. It will also alleviate some difficulties
              for the faculty members. A chatbot is incorporated to help out the
              first time users for better experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUsScreen;
