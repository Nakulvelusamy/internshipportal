import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
  Slider,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Axios from 'axios';

import useStyles from '../styles/User/Internship';
import InternshipCard from '../components/InternshipCard';

const SideBar = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant='h6'> Category</Typography>
          <Typography variant='subtitle2'>
            <Checkbox
              backgroundColor='#00B074'
              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            />
            Frontend
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Backend
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            FullStack
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Mobile Development
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            UI/UX Designer
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Project Management
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>Salary</Typography>
          <Slider
            max='1200'
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
          />
        </Grid>
        <Grid item>
          <Typography variant='h6'> Type</Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Full Time
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Part Time
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Remote
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>Experiance level</Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Junior
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Intermediate
          </Typography>
          <Typography variant='subtitle2'>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            Experiance
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const InternshipScreen = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Fetch all jobs when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await Axios.get('http://localhost:5000/jobs');
        console.log('Fetched jobs:', response.data);
        
        if (response.data && response.data.jobs) {
          setJobs(response.data.jobs);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load internships. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and location
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      (job.jobTitle && job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.companyName && job.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.jobDescription && job.jobDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter === '' || 
      (job.workType && job.workType.toLowerCase().includes(locationFilter.toLowerCase()));
    
    return matchesSearch && matchesLocation;
  });

  // Handle search
  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in location:', locationFilter);
    // The filtering is already handled by the filteredJobs variable
  };

  return (
    <div className={classes.root}>
      <Grid container justify='space-around'>
        <Grid item lg={2} md={3} sm={12} xs={12}>
          <SideBar />
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <Grid container direction='column' justify='space-around' spacing={3}>
            <Grid item lg={12}>
              <Paper className={classes.search} elevation={3}>
                <Container>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Grid container alignItems="center">
                        <SearchIcon className={classes.icon} color="action" />
                        <TextField 
                          id='Search-Job' 
                          label='Search for job' 
                          fullWidth
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Grid container alignItems="center">
                        <LocationOnIcon className={classes.icon} color="action" />
                        <TextField 
                          id='location' 
                          label='Location' 
                          fullWidth
                          value={locationFilter}
                          onChange={(e) => setLocationFilter(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                      <Button
                        color='secondary'
                        fullWidth
                        onClick={handleSearch}
                        variant='contained'
                        className={classes.submit}
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>

            {/* Loading indicator */}
            {loading && (
              <Grid item lg={12} container justify="center" style={{ padding: '30px' }}>
                <CircularProgress />
              </Grid>
            )}

            {/* Error message */}
            {error && (
              <Grid item lg={12}>
                <Paper style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
                  <Typography>{error}</Typography>
                </Paper>
              </Grid>
            )}

            {/* No jobs found message */}
            {!loading && !error && filteredJobs.length === 0 && (
              <Grid item lg={12}>
                <Paper style={{ padding: '20px', textAlign: 'center' }}>
                  <Typography>No internships found. Please try different search criteria.</Typography>
                </Paper>
              </Grid>
            )}

            {/* Display jobs */}
            {filteredJobs.map((job) => (
              <Grid item lg={12} key={job._id}>
                <InternshipCard job={job} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default InternshipScreen;
