import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Components } from '../../utils/material-ui';
import { useStateValue } from '../../utils/store';
import { API_POST, API_HANDLE_ERROR } from '../../utils/api';
import { cookieSave, decodeToken } from '../../utils/cookie';
import styles from './styles';

const { withStyles, Grid, TextField, Button, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const redirect = {
  admin: '/overview'
};

const Login = ({ classes }) => {
  const [store, dispatch] = useStateValue();

  useEffect(() => {
    if (store.isLogin === true) {
      window.location.href = redirect[`${store.role}`];
    }
  }, [store.isLogin]);

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleStateChange = (key, value) => {
    setUserData((prevState) => {
      prevState[`${key}`] = value;
      return { ...prevState };
    });
  };

  const onHandleConfirm = (e) => {
    e.preventDefault();
    API_POST('auth/login', userData)
      .then((res) => {
        const { role, _id } = decodeToken(res.data.token);
        cookieSave(res.data.token);
        dispatch({
          type: 'ALERT_OPEN',
          severity: 'success',
          isOpen: true,
          label: res.data?.message || 'Success'
        });
        dispatch({
          type: 'IS_LOGGED_IN',
          isLogin: true,
          role: role,
          personId: _id
        });
        localStorage.setItem('isLogin', true);
        setTimeout(() => {
          window.location.href = redirect[`${role}`];
        }, 1500);
      })
      .catch((err) => {
        API_HANDLE_ERROR(err, dispatch);
      });
  };

  return (
    <>
      <Container direction={'column'} className={classes.login_page}>
        <Item>
          <Typography className={classes.heading}> Dror Admin</Typography>
        </Item>
        <Item>
          <Item className={classes.paper}>
            <Typography
              className={classes.login_label}
              sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
              LOGIN
            </Typography>
            <form onSubmit={onHandleConfirm}>
              <Container direction={'column'} spacing={2}>
                <Item>
                  <TextField
                    variant="outlined"
                    name="email"
                    required={true}
                    className={classes.inputBox}
                    label="Email"
                    onChange={(e) => handleStateChange('email', e.target.value)}
                    type="email"
                    fullWidth
                  />
                </Item>
                <Item>
                  <TextField
                    variant="outlined"
                    name="password"
                    required={true}
                    label="Password"
                    className={classes.inputBox}
                    onChange={(e) => handleStateChange('password', e.target.value)}
                    type="password"
                    fullWidth
                  />
                </Item>
                <Item>
                  <Link to="/passwordReset">Forgot Password/Generate Password</Link>
                </Item>

                <Item>
                  <Button type="submit" variant="contained" fullWidth className={classes.button}>
                    Submit
                  </Button>
                </Item>
              </Container>
            </form>
          </Item>
        </Item>
      </Container>
    </>
  );
};

export default withStyles(styles)(Login);
