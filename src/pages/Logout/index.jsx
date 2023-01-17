import React from 'react';

import { Components } from '../../utils/material-ui';
import { useStateValue } from '../../utils/store';

import styles from './styles';
import { cookieRemove } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';

const { withStyles } = Components;

// const schema = object().shape({
//   email: string().required(),
//   password: string().required()
// });

const Login = ({ classes }) => {
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch({
      type: 'IS_LOGGED_IN',
      isLogin: false,
      role: ''
    });
    dispatch({
      type: 'ALERT_OPEN',
      severity: 'success',
      isOpen: true,
      label: 'Logout Successfully'
    });
    setTimeout(() => {
      cookieRemove();
      navigate('/login');
    }, 1000);
  }, [dispatch, navigate]);

  return <></>;
};

export default withStyles(styles)(Login);
