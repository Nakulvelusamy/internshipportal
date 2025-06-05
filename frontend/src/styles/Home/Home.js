import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },

  // Hero Section
  heroSection: {
    padding: theme.spacing(16, 0, 12, 0),
    background: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
    color: theme.palette.primary.contrastText,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    minHeight: 600,
    boxShadow: '0 8px 32px rgba(33, 150, 243, 0.08)',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "120px",
      background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(33,150,243,0.04) 100%)',
      zIndex: 0,
    },
  },

  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
    padding: theme.spacing(3, 0),
  },

  heroTitle: {
    fontWeight: 900,
    marginBottom: theme.spacing(3),
    fontSize: '4.2rem',
    lineHeight: 1.08,
    letterSpacing: '-1px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },

  heroSubtitle: {
    marginBottom: theme.spacing(5),
    opacity: 0.97,
    fontWeight: 400,
    fontSize: '1.5rem',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },

  heroButtons: {
    display: 'flex',
    gap: theme.spacing(4),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    '& button': {
      fontWeight: 700,
      fontSize: '1.1rem',
      boxShadow: '0 2px 12px rgba(33,150,243,0.10)',
      borderRadius: 12,
      padding: theme.spacing(1.5, 4),
      transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
      '&:hover': {
        transform: 'translateY(-2px) scale(1.04)',
        boxShadow: '0 6px 24px rgba(33,150,243,0.18)',
      },
    },
  },

  heroImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    zIndex: 1,
  },

  heroIllustration: {
    width: '100%',
    maxWidth: 520,
    height: 'auto',
    filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.18))',
    borderRadius: 24,
  },

  // Categories Section
  categoriesSection: {
    padding: theme.spacing(12, 0, 10, 0),
    background: 'linear-gradient(120deg, #f3f4f6 0%, #e3f0ff 100%)',
  },

  sectionTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(6),
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },

  categoryCard: {
    height: 340,
    width: 290,
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    background: 'linear-gradient(120deg, #fff 60%, #e3f0ff 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 12px rgba(33,150,243,0.07)',
    border: '2px solid transparent',
    '&:hover': {
      transform: 'translateY(-12px) scale(1.05)',
      boxShadow: '0 12px 36px rgba(33,150,243,0.15)',
      border: `2px solid ${theme.palette.primary.main}`,
      background: 'linear-gradient(120deg, #e3f0ff 0%, #fff 100%)',
    },
  },

  categoryContent: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  },

  categoryImageContainer: {
    width: 90,
    height: 90,
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f3f4f6',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(33,150,243,0.07)',
  },

  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  categoryTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(1),
    fontSize: '1.3rem',
    color: theme.palette.primary.main,
  },

  categoryDescription: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: '1.05rem',
  },

  categoryButton: {
    marginTop: 'auto',
    transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
    fontWeight: 700,
    fontSize: '1.05rem',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: 'rgba(33, 150, 243, 0.13)',
      transform: 'translateX(4px) scale(1.07)',
    },
  },

  // Featured Section
  featuredSection: {
    padding: theme.spacing(12, 0, 10, 0),
    background: 'linear-gradient(120deg, #f3f4f6 0%, #e3f0ff 100%)',
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
    },
  },

  featuredCard: {
    height: 360,
    width: 330,
    borderRadius: theme.spacing(2),
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 2px 16px rgba(33,150,243,0.07)',
    background: '#fff',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-10px) scale(1.04)',
      boxShadow: '0 12px 36px rgba(33,150,243,0.15)',
    },
  },

  featuredMedia: {
    height: 140,
    objectFit: 'cover',
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
  },

  cardActions: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  favoriteButton: {
    color: theme.palette.grey[400],
    transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      color: theme.palette.error.main,
      transform: 'scale(1.1)',
    },
  },

  shareButton: {
    color: theme.palette.grey[400],
    transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.1)',
    },
  },

  applyButton: {
    borderRadius: theme.spacing(2),
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    padding: theme.spacing(1, 3),
    boxShadow: '0 2px 8px rgba(33,150,243,0.10)',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: '#fff',
      transform: 'scale(1.07)',
    },
  },

  viewAllButton: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: 'rgba(33, 150, 243, 0.13)',
      transform: 'translateX(4px) scale(1.07)',
    },
  },

  // CTA Section
  ctaSection: {
    padding: theme.spacing(12, 0, 10, 0),
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 320,
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 -8px 32px rgba(33, 150, 243, 0.08)',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: "80px",
      background: 'linear-gradient(0deg, rgba(255,255,255,0.10) 0%, rgba(33,150,243,0.04) 100%)',
      zIndex: 0,
    },
  },

  ctaContent: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },

  ctaTitle: {
    fontWeight: 900,
    marginBottom: theme.spacing(2),
    fontSize: '2.7rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem',
    },
  },

  ctaSubtitle: {
    marginBottom: theme.spacing(4),
    opacity: 0.97,
    fontWeight: 400,
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },

  ctaButton: {
    padding: theme.spacing(1.7, 7),
    borderRadius: theme.spacing(2),
    textTransform: 'none',
    fontSize: '1.25rem',
    fontWeight: 800,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    boxShadow: '0 2px 12px rgba(33,150,243,0.10)',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      opacity: 0.93,
      transform: 'translateY(-2px) scale(1.07)',
      boxShadow: '0 8px 32px rgba(33,150,243,0.13)',
    },
  },

  // Snackbar
  snackbar: {
    padding: theme.spacing(2, 3),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  statsSection: {
    padding: theme.spacing(10, 0, 8, 0),
    background: 'linear-gradient(90deg, #f3f4f6 0%, #e3f0ff 100%)',
  },

  statCard: {
    minWidth: 200,
    minHeight: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: '0 2px 16px rgba(33,150,243,0.07)',
    padding: theme.spacing(4, 2),
    margin: 'auto',
    background: '#fff',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-6px) scale(1.04)',
      boxShadow: '0 8px 32px rgba(33,150,243,0.13)',
    },
  },

  statIcon: {
    fontSize: 48,
    marginBottom: theme.spacing(1),
    filter: 'drop-shadow(0 2px 8px rgba(33,150,243,0.10))',
  },

  statValue: {
    fontWeight: 800,
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },

  featuresSection: {
    padding: theme.spacing(12, 0, 10, 0),
    background: 'linear-gradient(120deg, #e3f0ff 0%, #f3f4f6 100%)',
  },

  featureCard: {
    minHeight: 240,
    borderRadius: theme.spacing(2),
    boxShadow: '0 2px 12px rgba(33,150,243,0.07)',
    padding: theme.spacing(5, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: '#fff',
    margin: 'auto',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-6px) scale(1.04)',
      boxShadow: '0 8px 32px rgba(33,150,243,0.13)',
    },
  },

  featureTitle: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    fontSize: '1.4rem',
    color: theme.palette.primary.main,
  },

  featureProgress: {
    marginTop: theme.spacing(3),
    width: '100%',
    height: 8,
    borderRadius: 4,
  },
}));

export default useStyles;

