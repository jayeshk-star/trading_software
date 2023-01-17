import React from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
// import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    boxShadow: theme.shadows[5],
    borderRadius: '10px'
    // padding: theme.spacing(0, 0, 0),
    // width: '30%',
    // borderRadius: '5px',
  }
}));

export default function TransitionsModal({ children, isOpen }) {
  const classes = useStyles();

  return (
    <div>
      {/* <button type="button">react-transition-group</button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Backdrop in={isOpen}>
          <div className={classes.paper}>{children}</div>
        </Backdrop>
      </Modal>
    </div>
  );
}
