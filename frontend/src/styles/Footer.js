import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    background: theme.palette.primary.dark,
    color: '#fff',
    padding: theme.spacing(8, 0, 4, 0),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(6, 0, 2, 0),
    },
  },
  branding: {
    marginBottom: theme.spacing(2),
  },
  logoText: {
    fontWeight: 800,
    letterSpacing: 1,
    color: '#fff',
    marginBottom: theme.spacing(2),
  },
  address: {
    color: '#e0e0e0',
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
  },
  socialIcons: {
    '& > *': {
      marginRight: theme.spacing(1.5),
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      borderRadius: '50%',
      transition: 'background 0.2s',
      '&:hover': {
        background: theme.palette.primary.main,
        color: '#fff',
      },
    },
  },
  sectionTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: '#fff',
    fontSize: '1.2rem',
  },
  linksColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
  },
  link: {
    color: '#e0e0e0',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.primary.light,
      textDecoration: 'underline',
    },
  },
  subscribeForm: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    maxWidth: 340,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  emailInput: {
    background: '#fff',
    borderRadius: 6,
    flex: 1,
    '& input': {
      color: theme.palette.primary.dark,
      padding: theme.spacing(1.2, 2),
    },
  },
  subscribeButton: {
    minWidth: 40,
    minHeight: 40,
    borderRadius: '50%',
    marginLeft: theme.spacing(1),
    background: theme.palette.primary.main,
    color: '#fff',
    boxShadow: 'none',
    '&:hover': {
      background: theme.palette.primary.light,
    },
  },
  badges: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    flexWrap: 'wrap',
  },
  badgeIcon: {
    width: 48,
    height: 48,
    background: '#fff',
    borderRadius: '50%',
    padding: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    objectFit: 'contain',
  },
  copyright: {
    marginTop: theme.spacing(6),
    color: '#e0e0e0',
    fontSize: '0.95rem',
  },
}));

export default useStyles;
