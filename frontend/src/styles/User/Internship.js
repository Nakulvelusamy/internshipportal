import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #f3f4f6 0%, #e3f0ff 100%)',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  card: {
    marginBottom: theme.spacing(4),
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    background: '#fff',
    transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.03)',
      boxShadow: '0 12px 36px rgba(33,150,243,0.15)',
    },
  },
  cardContent: {
    padding: theme.spacing(4, 3),
  },
  cardActions: {
    padding: theme.spacing(2, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
  },
  companyAvatar: {
    width: 56,
    height: 56,
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 700,
  },
  jobTitle: {
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(0.5),
    fontSize: '1.2rem',
  },
  detailText: {
    marginLeft: theme.spacing(0.5),
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  description: {
    lineHeight: 1.7,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  skillChip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontWeight: 500,
    borderRadius: 8,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  salary: {
    fontWeight: 700,
    marginTop: theme.spacing(1),
    color: theme.palette.success.main,
  },
  companyButton: {
    minWidth: 140,
    fontWeight: 700,
    borderRadius: 8,
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  applyButton: {
    minWidth: 140,
    fontWeight: 700,
    padding: theme.spacing(1, 3),
    borderRadius: 8,
    background: theme.palette.primary.main,
    color: '#fff',
    boxShadow: '0 2px 8px rgba(33,150,243,0.10)',
    '&:hover': {
      background: theme.palette.primary.dark,
      color: '#fff',
      transform: 'scale(1.07)',
      boxShadow: '0 8px 32px rgba(33,150,243,0.13)',
    },
  },
  sidebar: {
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    padding: theme.spacing(4, 2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1),
    },
  },
  search: {
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 4px 24px rgba(33,150,243,0.10)',
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(4),
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;