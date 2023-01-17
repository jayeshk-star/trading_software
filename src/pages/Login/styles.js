const styles = (theme) => {
  return {
    login_page: {
      backgroundColor: theme.palette.common.gray98,
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(5)
    },
    paper: {
      padding: theme.spacing(5, 8, 6, 8),
      [theme.breakpoints.up('sm')]: {
        minWidth: '520px'
      },
      borderRadius: '20px'
    },
    login_label: {
      justifyContent: 'left',
      padding: '0px 0 30px 0',
      fontSize: '2rem',
      letterSpacing: '1px',
      color: '#01386F',
      fontWeight: '600'
    },
    heading: {
      justifyContent: 'center',
      display: 'flex',
      padding: theme.spacing(0, 0, 5, 0),
      fontSize: '1.5rem',
      fontWeight: theme.typography.fontWeightMedium,
      letterSpacing: '1px',
      color: '#01386F',
      textAlign: 'center'
    },
    button: {
      padding: theme.spacing(1),
      borderRadius: 10
    },
    inputBox: {
      width: '300px'
    }
  };
};

export default styles;
