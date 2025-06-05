import React, { useEffect, useState } from 'react';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import axios from 'axios';
import EmailIcon from '@material-ui/icons/Email';
import {
  Container,
  Avatar,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
  Chip,
  Fade,
} from '@material-ui/core';

import useStyles from '../styles/User/Profile';

const SideBar = ({ name, title, description, photo, skills }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.sidebarPaper} elevation={4}>
      <Box className={classes.sidebarGradient}>
        <Grid container direction='column' alignItems='center' spacing={2}>
          <Grid item>
            <Avatar alt={name} src={photo} className={classes.icon} />
            <Typography className={classes.name} variant='h5'>
              {name}
            </Typography>
            <Typography className={classes.jobTitle} variant='subtitle1'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.description}>{description}</Typography>
          </Grid>
        </Grid>
        <Box mt={4} width='100%'>
          <Typography className={classes.skillTitle} variant='h6' align='center'>
            Skills
          </Typography>
          <Grid container spacing={1} justifyContent='center'>
            {(skills || []).map((skill, idx) => (
              <Grid item key={idx}>
                <Chip label={skill} className={classes.skillChip} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

const BasicInfo = ({ age, phoneNo, experiance, ctc, location, email }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.infoPaper} elevation={3}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleCard} variant='h6'>
              Basic Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>AGE</Typography>
            <Typography variant='subtitle1'>{age} years</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>YEARS OF EXPERIENCE</Typography>
            <Typography variant='subtitle1'>{experiance} years</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>PHONE</Typography>
            <Typography variant='subtitle1'>{phoneNo}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>CTC</Typography>
            <Typography variant='subtitle1'>{ctc} Lakh</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>LOCATION</Typography>
            <Typography variant='subtitle1'>{location}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.infoTitle} variant='subtitle2'>EMAIL</Typography>
            <Typography variant='subtitle1'>{email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button className={classes.fButton} variant='contained' color='secondary' startIcon={<CloudDownloadIcon />}>
              Download Resume
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant='outlined' color='secondary' startIcon={<EmailIcon />}>
              Send Email
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const EduInfo = ({ univeristyName, description }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.infoPaper} elevation={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleCard} variant='h6'>Education</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1'>{univeristyName}</Typography>
            <Typography variant='subtitle2'>{description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const ProjectInfo = ({ projectName, description }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.infoPaper} elevation={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleCard} variant='h6'>Projects</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>{projectName}</Typography>
            <Typography variant='caption'>{description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const CertyInfo = ({ certiName, description }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.infoPaper} elevation={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.titleCard} variant='h6'>Certification</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>{certiName}</Typography>
            <Typography variant='caption'>{description}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

const ProfileScreen = ({ history }) => {
  const storedUserId = JSON.parse(localStorage.getItem('userId'));

  if (!storedUserId) {
    history.push('/');
    alert('Session timeout please login again');
  }

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [uni, setUni] = useState('');
  const [eDesc, setEDesc] = useState('');
  const [project, setProject] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [certiName, setCertiName] = useState('');
  const [cDesc, setCDesc] = useState('');
  const [age, setAge] = useState(0);
  const [ctc, setCTC] = useState('');
  const [email, setEmail] = useState('');
  const [experiance, setExperiance] = useState('');
  const [location, setLocation] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const setData = (data) => {
    setName(data.name);
    setTitle(data.title);
    setDesc(data.description);
    setSkills(data.skills || []);
    if (data.basicInfo === undefined) {
      history.push('/create-profile');
    } else {
      setAge(data.basicInfo.age);
      setCTC(data.basicInfo.ctc);
      setEmail(data.basicInfo.email);
      setLocation(data.basicInfo.location);
      setPhoneNo(data.basicInfo.phoneno);
      setExperiance(data.basicInfo.experiance);
    }
    if (data.education === undefined) {
      history.push('/create-profile');
    } else {
      setUni(data.education.univeristy);
      setEDesc(data.education.edescription);
    }
    if (data.projects === undefined) {
      history.push('/create-profile');
    } else {
      setProject(data.projects.projectname);
      setPDesc(data.projects.pdescription);
    }
    if (data.certification === undefined) {
      history.push('/create-profile');
    } else {
      setCertiName(data.certification.certiname);
      setCDesc(data.certification.cdescription);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const userProfile = await axios.get(
          `http://localhost:5000/user/get-profile/${storedUserId}`
        );
        setData(userProfile.data.profile);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        {loading ? (
          <Box display='flex' justifyContent='center' alignItems='center' minHeight='60vh'>
            <CircularProgress />
          </Box>
        ) : (
          <Fade in timeout={700}>
            <Grid container justifyContent='center' spacing={6}>
              <Grid item xs={12} md={4}>
                <SideBar
                  name={name}
                  title={title}
                  description={desc}
                  skills={skills}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container direction='column' spacing={4}>
                  <Grid item>
                    <BasicInfo
                      age={age}
                      phoneNo={phoneno}
                      experiance={experiance}
                      ctc={ctc}
                      location={location}
                      email={email}
                    />
                  </Grid>
                  <Grid item>
                    <EduInfo univeristyName={uni} description={eDesc} />
                  </Grid>
                  <Grid item>
                    <ProjectInfo projectName={project} description={pDesc} />
                  </Grid>
                  <Grid item>
                    <CertyInfo certiName={certiName} description={cDesc} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        )}
      </Container>
    </div>
  );
};

export default ProfileScreen;
