const styles = (theme) => {
  return {
    mainContainer: {
      padding: theme.spacing(0, 5),
      justifyContent: 'space-between'
    },

    blueDataCard: {
      width: '300px',
      height: '16vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // margin: theme.spacing(1.5, 1.5, 3, 0),
      padding: theme.spacing(0, 2)
    },
    topContainer: {
      // width: '100%',
      // height: '50px',
      // border: '1px solid red',
      padding: theme.spacing(1)
      // marginTop: theme.spacing(2)
    },
    tableContainer: {
      width: '100%',
      height: '76vh'
      // border: '1px solid green'
    },
    dropDownMenu: {
      height: '40px',
      width: '92%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      // border: '1px solid red'
    },
    menuName: {
      width: '70%',
      fontSize: '15px'
    },
    menuNumber: {
      width: '15%',
      height: '20px',
      backgroundColor: '#FF6760',
      textAlign: 'center',
      fontSize: '12px',
      fontFamily: theme.palette.font.fontFamily,
      borderRadius: '9px',
      paddingTop: '2px',

      color: 'white'
    },
    menuIcon: {
      marginLeft: '2%',
      marginTop: theme.spacing(1),
      cursor: 'pointer'
    },
    middleContainer: {
      width: '100%',
      height: '75vh'
    },

    middleContainer1: {
      width: '100%',
      height: '30vh',
      marginTop: theme.spacing(1)
    },
    middleContainer2: {
      width: '100%',
      marginTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    middleContainer3: {
      width: '100%',
      height: '28vh',
      marginTop: theme.spacing(1)
    },
    lastContainer: {
      width: '100%',
      height: '69vh',
      marginTop: theme.spacing(2)
    },
    lastContainer1: {
      width: '100%',
      height: '24.1vh',
      marginTop: theme.spacing(1),
      padding: theme.spacing(1)
    },
    pieChartHeading: {
      fontSize: '13px',
      fontFamily: theme.palette.font.fontFamily,
      fontWeight: 600,
      padding: theme.spacing(0.5, 2)
    },
    summaryContainer: {
      width: '100%',
      height: '180px',
      overflow: 'auto'
    },
    AlertSummary: {
      fontSize: '12px',
      fontFamily: theme.palette.font.fontFamily,
      padding: theme.spacing(0.7, 2)
    },
    img: {
      marginRight: theme.spacing(1)
    },
    subMenuContainer: {
      width: '90%',
      boxShadow: '0px 1px 1px 0px lightGrey'
    },
    sumMenu: {
      textAlign: 'left',
      fontSize: '13px',
      fontFamily: theme.palette.font.fontFamily,
      marginTop: theme.spacing(2)
    }
    // scrollbar: {

    // }
  };
};

export default styles;
