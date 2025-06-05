import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    minHeight: 80,
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
  },
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',
    gap: theme.spacing(4),
  },
  navLinks: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  navButton: {
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
  authButtons: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  authButton: {
    minWidth: 120,
    fontWeight: 600,
  },
  mobileActions: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  mobileMenu: {
    '& .MuiPaper-root': {
      minWidth: 200,
      maxWidth: '100%',
      marginTop: theme.spacing(1),
      boxShadow: theme.shadows[3],
    },
  },
  mobileMenuItem: {
    padding: theme.spacing(1.5, 3),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default useStyles;