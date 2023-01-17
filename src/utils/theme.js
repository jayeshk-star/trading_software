import { Components } from './material-ui';

const { createTheme } = Components;

const theme = createTheme({
  typography: {
    tableHeading: {
      fontSize: '16px',
      fontWeight: '600',
      padding: 1
    },
    typographyFont: {
      fontSize: '15px'
    }
  },
  card: {
    borderRadius: '16px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    margin: 'auto',
    backgroundColor: '#FFFFFF'
  },
  button: {
    noAction: {
      backgroundColor: 'white',
      color: '#025EBB',
      width: '90px',
      border: '1px solid #025EBB',
      height: '25px',
      fontSize: '12px'
    },
    forward: {
      backgroundColor: '#025EBB',
      color: 'white',
      // border: '1px solid Blue',
      height: '25px',
      width: '90px',
      fontSize: '12px'
    },
    submit: {
      backgroundColor: '#025EBB',
      color: 'white'
    },
    cancel: {
      backgroundColor: 'white',
      color: '#025EBB',
      border: '1px solid red'
    },
    tableSeverityButton: {
      color: '#FFFFFF',
      height: '25px',
      fontSize: '12px',
      cursor: 'auto',
      width: '100px'
    }
  },
  palette: {
    primary: {
      main: '#025EBB',
      secondarymain: '#FFFFFF',
      textColor: 'black',
      secondtheme: '#025EBB',
      tableHeadingColor: '#025EBB',
      textTableColor: '#01386F',
      maintextColor: '#025EBB'
    },
    common: {
      gray90: '#e5e5e5',
      gray98: '#fafafa',
      green: '#00c453',
      orange: '#c47900',
      red: '#ff0000',
      white: '#FFFFFF',
      hover: 'rgb(158, 158, 247, 0.1)'
    },
    font: {
      fontWeight: '500'
    }
  },
  countsCard: {
    selectedCardColor: {
      color: '#FFFFFF',
      backgroundColor: '#025EBB',
      borderRadius: '8px',
      justifyContent: 'center',
      boxShadow: '0px 0px 4px 0px #00000040',
      fontSize: '15px'
    },

    unselectedCardColor: {
      cursor: 'pointer',
      color: 'black',
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderRadius: '8px',
      boxShadow: '0px 0px 4px 0px #00000040',
      fontSize: '15px'
    }
  }
});

export default theme;
