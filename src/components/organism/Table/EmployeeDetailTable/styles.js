const styles = (theme) => {
  return {
    root: {
      width: '100%'
    },
    container: {
      maxHeight: '68vh',
      overflow: 'auto'
    },
    tableHeader: {},
    actionBtn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '& a': {
        textDecoration: 'none',
        color: theme.palette.common.white
      }
    },

    boldFont: {
      fontWeight: 'bold'
    },
    heading: {
      fontSize: '16px',
      color: theme.palette.primary.textTableColor,
      fontWeight: '500',
      padding: theme.spacing(2, 1)
    },
    tablesearchrelative: {
      position: 'relative',
      alignitems: 'center',
      display: 'flex',
      float: 'left',
      padding: theme.spacing(1)
    },
    tablesearchsearchIcon: {
      position: 'absolute',
      margin: '3px 2px',
      paddingleft: '2%'
    },
    tablesearch: {
      height: '35px',
      border: 'solid 0.5px #707070',
      padding: ' 0 0 0 35px',
      outline: 'none',
      color: '#000000',
      width: '300px'
    }
  };
};

export default styles;
