import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f3f4f6 0%, #e3f0ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(4),
    textAlign: 'center',
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
  form: {
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    padding: theme.spacing(5, 4),
    margin: '0 auto',
    maxWidth: 420,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
      maxWidth: '100%',
    },
  },
  text: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-root': {
      borderRadius: 8,
    },
  },
  submit: {
    marginTop: theme.spacing(3),
    color: '#fff',
    background: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '1.1rem',
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(33,150,243,0.10)',
    padding: theme.spacing(1.2, 4),
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: theme.palette.primary.dark,
      color: '#fff',
      transform: 'translateY(-2px) scale(1.04)',
      boxShadow: '0 6px 24px rgba(33,150,243,0.18)',
    },
  },
}));

export default useStyles;
