import React, { useEffect, useState } from 'react';
import { timeStartOfDay } from '../../../utils/moment';
import { Components } from '../../../utils/material-ui';
import styles from './styles';
import { clearTimeout, setTimeout } from 'worker-timers';

const { withStyles, Typography } = Components;

const Timer = ({ date, classes }) => {
  const [timer, setTimer] = useState(timeStartOfDay(date));

  useEffect(() => {
    const time = setTimeout(() => {
      setTimer(timeStartOfDay(date));
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [timer, date]);

  const getColouredClass = () => {
    const minutes = Number(timer.split(':')[1]);
    let color = '';
    if (minutes < 2) {
      color = 'green';
    } else if (minutes < 3) {
      color = 'orange';
    } else {
      color = 'red';
    }
    return color;
  };

  return (
    <Typography fontSize={12} className={classes[getColouredClass()]}>
      {timer}
    </Typography>
  );
};

export default withStyles(styles)(Timer);
