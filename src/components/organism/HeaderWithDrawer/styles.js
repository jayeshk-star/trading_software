const styles = (theme) => {
  return {
    date: {
      marginRight: theme.spacing(1)
    },
    smallHeading: {
      fontSize: '15px',
      textAlign: 'center',
      marginRight: theme.spacing(2),
      fontWeight: '500'
    },
    smallHeading1: {
      fontSize: '13px',
      textAlign: 'center',
      marginRight: theme.spacing(2),
      textDecoration: 'underlined'
    },
    firstLetter: {
      color: 'red',
      fontSize: '16px',
      fontFamily: theme.palette.font.fontFamily
    },
    drawerHeading: {
      fontSize: '10px',
      paddingLeft: theme.spacing(3.5),
      fontFamily: theme.palette.font.fontFamily
      // border: '1px solid red'
    },
    incidentAlert: {
      position: 'absolute',
      top: '75px',
      right: '35px',
      width: '700px',
      borderRadius: '5px',
      justifyContent: 'center',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.common.red,
      padding: theme.spacing(0, '20px', '5px', '20px'),
      margin: theme.spacing('10px', '20px'),
      zIndex: theme.zIndex.snackbar
    },
    notificationContainer: {
      height: '23px',
      width: '23px',
      position: 'absolute',
      top: '-40%',
      right: '-45%',
      color: '#FFFFFF',
      backgroundColor: theme.palette.primary.tableHeadingColor,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px'
    }
  };
};

export default styles;
