import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  Grid,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  LocationOn as LocationIcon,
  WorkOutline as WorkIcon,
  Schedule as ScheduleIcon,
  BookmarkBorder as BookmarkIcon,
  Share as ShareIcon,
} from '@material-ui/icons';
import useStyles from '../styles/User/Internship';

const InternshipCard = ({ job }) => {
  const classes = useStyles();
  
  if (!job) {
    return null;
  }
  
  const formattedDate = job.createdAt 
    ? new Date(job.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Date not available';

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={3}>
          {/* Company Info Section */}
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src={job.companyLogo}
                alt={job.companyName}
                className={classes.companyAvatar}
              />
              <Box ml={2}>
                <Typography variant="h6" className={classes.jobTitle}>
                  {job.jobTitle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {job.companyName}
                </Typography>
              </Box>
              <Box ml="auto" display="flex" gap={1}>
                <Tooltip title="Save">
                  <IconButton size="small">
                    <BookmarkIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton size="small">
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          {/* Job Details Section */}
          <Grid item xs={12}>
            <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
              <Box display="flex" alignItems="center">
                <LocationIcon color="action" fontSize="small" />
                <Typography variant="body2" color="textSecondary" className={classes.detailText}>
                  {job.location || 'Remote'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <WorkIcon color="action" fontSize="small" />
                <Typography variant="body2" color="textSecondary" className={classes.detailText}>
                  {job.jobType || 'Full-time'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <ScheduleIcon color="action" fontSize="small" />
                <Typography variant="body2" color="textSecondary" className={classes.detailText}>
                  Posted {formattedDate}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Description Section */}
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" className={classes.description}>
              {job.jobDescription 
                ? (job.jobDescription.length > 200 
                    ? `${job.jobDescription.substring(0, 200)}...` 
                    : job.jobDescription)
                : 'No description available'}
            </Typography>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Required Skills:
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {job.skills && job.skills.length > 0 ? (
                  job.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      className={classes.skillChip}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No specific skills required
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Salary Section */}
          {job.payScale && (
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary" className={classes.salary}>
                {job.payScale}
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          color="primary"
          href={job.companyURL}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.companyButton}
        >
          Visit Company
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.applyButton}
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default InternshipCard;
