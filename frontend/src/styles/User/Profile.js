import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    minHeight: '80vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%)',
    paddingBottom: 40,
  },
  sidebarPaper: {
    borderRadius: 24,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    padding: 0,
    background: 'none',
  },
  sidebarGradient: {
    background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
    padding: theme.spacing(4, 2, 4, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 400,
  },
  icon: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginBottom: theme.spacing(2),
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
    border: '4px solid #fff',
  },
  name: {
    fontWeight: 700,
    fontSize: '1.5rem',
    marginTop: theme.spacing(1),
    color: theme.palette.primary.main,
    letterSpacing: 1,
  },
  jobTitle: {
    fontWeight: 500,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: '1rem',
  },
  skillTitle: {
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.dark,
    letterSpacing: 1,
  },
  skillChip: {
    background: 'linear-gradient(90deg, #b2dfdb 0%, #80cbc4 100%)',
    color: theme.palette.primary.dark,
    fontWeight: 500,
    borderRadius: 16,
    padding: '0 10px',
    fontSize: '0.95rem',
    margin: theme.spacing(0.5),
    boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
  },
  infoPaper: {
    borderRadius: 20,
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    padding: theme.spacing(3, 3, 2, 3),
    marginBottom: theme.spacing(2),
    background: '#fff',
  },
  fButton: {
    fontSize: '1rem',
    color: '#fff',
    background: theme.palette.secondary.main,
    borderRadius: 16,
    fontWeight: 600,
    boxShadow: '0 2px 8px rgba(0,176,116,0.08)',
    transition: 'background 0.2s',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  infoTitle: {
    opacity: 0.7,
    fontWeight: 600,
    letterSpacing: 0.5,
    color: theme.palette.primary.main,
  },
  titleCard: {
    fontWeight: 700,
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
    letterSpacing: 1,
  },
  profilePic: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default useStyles;
