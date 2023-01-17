const styles = (theme) => {
  return {
    mainContainer: {
      padding: theme.spacing(1, 2)
    },

    selectedCard: {
      width: '200px',
      height: '40px',
      color: 'black',

      flexDirection: 'column',

      textAlign: 'left',
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0)
    },
    unselectedCard: {
      cursor: 'pointer',
      width: '200px',
      height: '40px',
      color: 'black',
      backgroundColor: 'white',
      // display: 'flex',
      textAlign: 'left',
      flexDirection: 'column',
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0)
    },
    tableContainer: {
      width: '100%',
      height: '75vh',
      marginTop: theme.spacing(1)
      // padding: theme.spacing(5)
    },
    tableContainer1: {
      width: '100%',
      height: '75vh',
      marginTop: theme.spacing(1),
      padding: theme.spacing(1, 2)
    }
  };
};

export default styles;
