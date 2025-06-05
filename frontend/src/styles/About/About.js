import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(10, 0),
    background: 'linear-gradient(120deg, #f3f4f6 0%, #e3f0ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    width: '100%',
    maxWidth: 420,
    height: 'auto',
    display: 'block',
    margin: '0 auto',
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 260,
      marginBottom: theme.spacing(3),
    },
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    padding: theme.spacing(5, 4),
    margin: '0 auto',
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
      maxWidth: '100%',
    },
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: theme.palette.text.secondary,
    marginBottom: 0,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      textAlign: 'center',
    },
  },
}));

export default useStyles;
