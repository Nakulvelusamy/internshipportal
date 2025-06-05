import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Paper,
  Typography,
  Container,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Chip,
  Avatar,
  LinearProgress,
  Fade,
  Zoom,
  Grow,
  Slide,
  Collapse,
  Snackbar,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import {
  Favorite,
  FavoriteBorder,
  Share,
  Star,
  StarBorder,
  ArrowForward,
  Work,
  Business,
  School,
  EmojiEvents,
  People,
  Apartment,
} from '@material-ui/icons';

import ProgrammingTech from '../images/Programming & Tech.png';
import DataScience from '../images/Data Science & analysis.png';
import ITEngineer from '../images/IT Engineer.png';
import Education from '../images/Education & training.png';
import Marketing from '../images/Marketing.png';
import Management from '../images/Management.png';
import Logo from '../images/Home-illustration.png';

import useStyles from '../styles/Home/Home';

const CategoryCard = ({ image, title, description, index, onExplore }) => {
  const classes = useStyles();
  return (
    <Grow in timeout={1000} style={{ transitionDelay: `${index * 100}ms` }}>
      <Paper elevation={0} className={classes.categoryCard}>
        <Box className={classes.categoryContent}>
          <Box className={classes.categoryImageContainer}>
            <img src={image} alt={title} className={classes.categoryImage} />
          </Box>
          <Typography variant="h6" className={classes.categoryTitle}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.categoryDescription}>
            {description}
          </Typography>
          <Button
            variant="text"
            color="primary"
            endIcon={<ArrowForward />}
            className={classes.categoryButton}
            onClick={() => onExplore(title)}
          >
            Explore
          </Button>
        </Box>
      </Paper>
    </Grow>
  );
};

const FeaturedInternship = ({ internship, onApply, onFavorite, onShare }) => {
  const classes = useStyles();
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavorite(internship.id);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    onShare(internship.id);
  };

  const handleApply = (e) => {
    e.stopPropagation();
    onApply(internship.id);
  };

  const handleCardClick = () => {
    history.push(`/internship/${internship.id}`);
  };

  const renderRating = (rating) => {
    return (
      <Box display="flex" alignItems="center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            style={{
              color: index < rating ? '#FFD700' : '#E0E0E0',
              fontSize: '1.2rem',
            }}
          />
        ))}
        <Typography variant="body2" style={{ marginLeft: 8, color: '#666' }}>
          ({rating.toFixed(1)})
        </Typography>
      </Box>
    );
  };

  // Helper to get company initials
  const getInitials = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    if (words.length === 1) return words[0][0];
    return words[0][0] + words[1][0];
  };

  return (
    <Card className={classes.featuredCard} onClick={handleCardClick}>
      {imgError ? (
        <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 140, background: '#f3f4f6' }}>
          <Avatar style={{ width: 64, height: 64, background: '#1976d2', color: '#fff', fontSize: 32 }}>
            {getInitials(internship.companyName) || <Business fontSize="large" />}
          </Avatar>
        </Box>
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={internship.companyLogo}
          alt={internship.companyName}
          className={classes.featuredMedia}
          onError={() => setImgError(true)}
        />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {internship.title}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {internship.companyName}
        </Typography>
        <Box mb={1}>
          {renderRating(internship.rating)}
        </Box>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {internship.location} • {internship.type}
        </Typography>
        <Typography variant="body2" noWrap>
          {internship.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Box>
          <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
            <IconButton
              size="small"
              onClick={handleFavorite}
              className={classes.favoriteButton}
            >
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              size="small"
              onClick={handleShare}
              className={classes.shareButton}
            >
              <Share />
            </IconButton>
          </Tooltip>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleApply}
          className={classes.applyButton}
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

const StatCard = ({ icon: Icon, value, label, color }) => {
  const classes = useStyles();
  return (
    <Fade in timeout={1000}>
      <Paper className={classes.statCard}>
        <Icon className={classes.statIcon} style={{ color }} />
        <Typography variant="h3" className={classes.statValue}>
          {value}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {label}
        </Typography>
      </Paper>
    </Fade>
  );
};

const HomeScreen = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrollY, setScrollY] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleExploreCategory = (category) => {
    history.push(`/internship?category=${encodeURIComponent(category)}`);
  };

  const handleApplyInternship = (internshipId) => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('userInfo');
    if (!isLoggedIn) {
      setSnackbar({
        open: true,
        message: 'Please login to apply for internships',
        severity: 'warning'
      });
      history.push('/login?redirect=/internship');
      return;
    }
    history.push(`/internship/${internshipId}/apply`);
  };

  const handleFavoriteInternship = (internshipId, isFavorite) => {
    const isLoggedIn = localStorage.getItem('userInfo');
    if (!isLoggedIn) {
      setSnackbar({
        open: true,
        message: 'Please login to save internships',
        severity: 'warning'
      });
      history.push('/login?redirect=/internship');
      return;
    }
    // TODO: Implement favorite functionality with backend
    setSnackbar({
      open: true,
      message: isFavorite ? 'Added to favorites' : 'Removed from favorites',
      severity: 'success'
    });
  };

  const handleShareInternship = (internship) => {
    if (navigator.share) {
      navigator.share({
        title: internship.title,
        text: `Check out this internship at ${internship.company}: ${internship.description}`,
        url: window.location.origin + `/internship/${internship.id}`
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.origin + `/internship/${internship.id}`);
      setSnackbar({
        open: true,
        message: 'Link copied to clipboard!',
        severity: 'success'
      });
    }
  };

  const handleFindInternships = () => {
    history.push('/internship');
  };

  const handleBrowseCompanies = () => {
    history.push('/companies');
  };

  const handleViewAllInternships = () => {
    history.push('/internship');
  };

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem('userInfo');
    if (!isLoggedIn) {
      history.push('/register');
    } else {
      history.push('/profile');
    }
  };

  const categories = [
    {
      title: 'Programming & Tech',
      description: 'Find internships in software development, web development, and more',
      image: ProgrammingTech,
    },
    {
      title: 'Data Science',
      description: 'Explore opportunities in data analysis, machine learning, and AI',
      image: DataScience,
    },
    {
      title: 'IT Engineering',
      description: 'Discover roles in IT infrastructure, networking, and security',
      image: ITEngineer,
    },
    {
      title: 'Education',
      description: 'Find teaching and training internships',
      image: Education,
    },
    {
      title: 'Marketing',
      description: 'Explore digital marketing, content creation, and social media roles',
      image: Marketing,
    },
    {
      title: 'Management',
      description: 'Find business and project management internships',
      image: Management,
    },
  ];

  const featuredInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      companyName: 'Tech Solutions Inc.',
      companyLogo: 'https://via.placeholder.com/150',
      rating: 4.5,
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our team to work on cutting-edge web applications using React and Node.js.',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      companyName: 'Data Analytics Co.',
      companyLogo: 'https://via.placeholder.com/150',
      rating: 4.2,
      location: 'Remote',
      type: 'Part-time',
      description: 'Work on machine learning projects and data analysis for our clients.',
    },
    {
      id: 3,
      title: 'Marketing Intern',
      companyName: 'Digital Marketing Pro',
      companyLogo: 'https://via.placeholder.com/150',
      rating: 4.0,
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Help create and execute digital marketing campaigns for various clients.',
    },
  ];

  const stats = [
    { icon: Work, value: '500+', label: 'Active Internships', color: theme.palette.primary.main },
    { icon: Business, value: '200+', label: 'Partner Companies', color: theme.palette.secondary.main },
    { icon: School, value: '10k+', label: 'Student Success', color: theme.palette.success.main },
    { icon: EmojiEvents, value: '95%', label: 'Success Rate', color: theme.palette.warning.main },
  ];

  return (
    <Box className={classes.root}>
      {/* Hero Section */}
      <Box className={classes.heroSection}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box className={classes.heroContent} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h2" className={classes.heroTitle} align="center">
                  Find Your Dream Internship
                </Typography>
                <Typography variant="h5" className={classes.heroSubtitle} align="center">
                  Connect with top companies and kickstart your career
                </Typography>
                <Box className={classes.heroButtons} display="flex" justifyContent="center" mt={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.primaryButton}
                    endIcon={<ArrowForward />}
                    onClick={handleFindInternships}
                  >
                    Find Internships
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className={classes.secondaryButton}
                    onClick={handleBrowseCompanies}
                  >
                    Browse Companies
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.heroImage} display="flex" justifyContent="center" alignItems="center">
                <img src={Logo} alt="Internship Portal" className={classes.heroIllustration} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box className={classes.statsSection}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <StatCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box className={classes.categoriesSection}>
        <Container maxWidth="lg">
          <Typography variant="h4" className={classes.sectionTitle} align="center">
            Popular Categories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={category.title} style={{ display: 'flex', justifyContent: 'center' }}>
                <CategoryCard
                  {...category}
                  index={index}
                  onExplore={handleExploreCategory}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Internships Section */}
      <Box className={classes.featuredSection}>
        <Container maxWidth="lg">
          <Box className={classes.sectionHeader}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Featured Internships
            </Typography>
            <Button
              variant="text"
              color="primary"
              endIcon={<ArrowForward />}
              className={classes.viewAllButton}
              onClick={handleViewAllInternships}
            >
              View All
            </Button>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {featuredInternships.map((internship) => (
              <Grid item xs={12} md={4} key={internship.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <FeaturedInternship
                  internship={internship}
                  onApply={handleApplyInternship}
                  onFavorite={handleFavoriteInternship}
                  onShare={handleShareInternship}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box className={classes.featuresSection}>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box className={classes.sectionHeader} justifyContent="center">
              <People className={classes.sectionIcon} />
              <Typography variant="h2" className={classes.sectionTitle} align="center">
                Why Choose Us
              </Typography>
              <Typography variant="h6" color="textSecondary" className={classes.sectionSubtitle} align="center">
                Everything you need to kickstart your career
              </Typography>
            </Box>
          </Fade>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Fade in timeout={1000}>
                <Box className={classes.featureCard}>
                  <Typography variant="h5" className={classes.featureTitle} align="center">
                    Easy Application Process
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    Apply to multiple internships with just a few clicks. Save your progress and track your applications.
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    className={classes.featureProgress}
                  />
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Fade in timeout={1000}>
                <Box className={classes.featureCard}>
                  <Typography variant="h5" className={classes.featureTitle} align="center">
                    Direct Company Connection
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    Connect directly with companies and receive responses quickly. No middlemen involved.
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    className={classes.featureProgress}
                  />
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Fade in timeout={1000}>
                <Box className={classes.featureCard}>
                  <Typography variant="h5" className={classes.featureTitle} align="center">
                    Career Guidance
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    Get insights and advice to help you make informed decisions about your career path.
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    className={classes.featureProgress}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className={classes.ctaSection}>
        <Container maxWidth="md">
          <Box className={classes.ctaContent} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h3" className={classes.ctaTitle} align="center">
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" className={classes.ctaSubtitle} align="center">
              Create your profile and get discovered by top companies
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.ctaButton}
              endIcon={<ArrowForward />}
              onClick={handleGetStarted}
              style={{ marginTop: 32 }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Box
          className={classes.snackbar}
          style={{
            backgroundColor: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
          }}
        >
          <Typography variant="body1" style={{ color: 'white' }}>
            {snackbar.message}
          </Typography>
        </Box>
      </Snackbar>
    </Box>
  );
};

export default HomeScreen;
