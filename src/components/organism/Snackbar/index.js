import React, { useEffect } from 'react';
import { Components } from '../../../utils/material-ui';
import { useStateValue } from '../../../utils/store';
import Alert from '@mui/material/Alert';

const { Snackbar, withStyles } = Components;

const styles = (theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    zIndex: theme.zIndex.snackbar
  }
});

const AlertBox = ({ classes }) => {
  const [{ alert }, dispatch] = useStateValue();
  const { severity, isOpen, label } = alert;

  const [state] = React.useState({
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    dispatch({
      type: 'ALERT_CLOSE',
      isOpen: false
    });
  };

  useEffect(() => {
    if (isOpen === true) {
      setTimeout(() => {
        handleClose();
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Snackbar
      className={classes.root}
      style={{ width: '40vw' }}
      anchorOrigin={{ vertical, horizontal }}
      open={isOpen}
      key={vertical + horizontal}>
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {label}
      </Alert>
    </Snackbar>
  );
};

export default withStyles(styles)(AlertBox);
