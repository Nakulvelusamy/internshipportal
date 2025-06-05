import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import useStyles from '../styles/Employee/PostedInternship';
import InternshipCard from '../components/InternshipCard';

const PostedInternshipScreen = () => {
  const [jobs, setJobs] = useState([]);

  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyURL, setCompanyURL] = useState('');

  const [loading, setLoading] = useState(false);

  const storedEmployeeId = JSON.parse(localStorage.getItem('employeeId'));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
      try {
        // Parse the employee ID properly
        const employeeId = typeof storedEmployeeId === 'string' ? 
          JSON.parse(storedEmployeeId) : storedEmployeeId;
  
        if (!employeeId) {
          console.error("No employee ID found in localStorage");
          setLoading(false);
          return;
        }
  
        console.log("Fetching employee profile for ID:", employeeId);
        
        // Fetch employee profile
        const employeeInfo = await Axios.get(
          `http://localhost:5000/employee/profile/${employeeId}`
        );
  
        console.log("Employee profile response:", employeeInfo.data);
        
        const { employee } = employeeInfo.data;
        
        if (!employee) {
          console.error("No employee data returned from API");
          setLoading(false);
          return;
        }
        
        console.log("Employee data:", employee);
  
        // Set company info if available
        if (employee.companyInfo) {
          setCompanyName(employee.companyInfo.companyName || '');
          setCompanyLocation(employee.companyInfo.companyLocation || '');
          setCompanyURL(employee.companyInfo.companyURL || '');
          setCompanyDescription(employee.companyInfo.companyDescription || '');
        }
  
        // Fetch job details for each job ID
        if (employee.jobsPosted && employee.jobsPosted.length > 0) {
          console.log("Found posted jobs:", employee.jobsPosted);
          
          const fetchedJobs = [];
          
          for (const jobId of employee.jobsPosted) {
            try {
              console.log("Fetching job details for ID:", jobId);
              const jobResponse = await Axios.get(`http://localhost:5000/jobs/${jobId}`);
              
              if (jobResponse.data && jobResponse.data.job) {
                console.log("Job details fetched:", jobResponse.data.job);
                fetchedJobs.push({
                  jobInfo: jobResponse.data.job
                });
              }
            } catch (err) {
              console.error("Error fetching job details for ID", jobId, ":", err);
            }
          }
          
          console.log("All fetched jobs:", fetchedJobs);
          setJobs(fetchedJobs);
        } else {
          console.log("No jobs posted by this employee");
          setJobs([]);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    if (storedEmployeeId) {
      fetchData();
    } else {
      console.error("No employee ID found in localStorage");
    }
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        alignItems='center'
        justify='center'
        className={classes.header}
      >
        {loading && <CircularProgress />}
        <Grid item lg={2}>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </Grid>
            <Grid item>
              <Typography variant='h6'>{companyName}</Typography>
              <Typography variant='subtitle1'>{companyLocation}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Button
            className={classes.submit}
            color='secondary'
            fullWidth
            type='text'
            variant='contained'
          >
            Posted Internship
          </Button>
        </Grid>
      </Grid>
      <hr></hr>

      <Container className={classes.jobCard}>
        <Grid container spacing={6} justify='center'>
          {loading && (
            <Grid item xs={12} container justify="center" style={{ padding: '30px' }}>
              <CircularProgress />
            </Grid>
          )}
          
          {!loading && jobs.length === 0 && (
            <Grid item xs={12}>
              <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">No internships posted yet</Typography>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                  You haven't posted any internships. Go to the home page to post your first internship.
                </Typography>
              </Paper>
            </Grid>
          )}
          
          {jobs.map((job, index) => (
            <Grid item lg={10} md={10} sm={12} xs={12} key={index}>
              {job.jobInfo ? (
                <InternshipCard job={job.jobInfo} />
              ) : (
                <Paper style={{ padding: '20px', textAlign: 'center' }}>
                  <Typography color="error">Failed to load job details</Typography>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostedInternshipScreen;
