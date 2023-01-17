import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { object, string } from 'yup';
import { Components } from '../../utils/material-ui';
import { useStateValue } from '../../utils/store';
import { API_POST, API_HANDLE_ERROR } from '../../utils/api';
import styles from './styles';
import { useNavigate } from 'react-router-dom';

const { withStyles, Grid, TextField, Button, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const PasswordReset = ({ classes }) => {
  const [, dispatch] = useStateValue();
  // const { handleSubmit } = useForm({
  //   resolver: yupResolver(schema)
  // });
  const navigate = useNavigate();

  // const [email, setEmail] = useState('');
  // const [otp, setOtp] = useState('');
  // const [password1, setPassword1] = useState('');
  // const [password2, setPassword2] = useState('');

  const [otpSent, setOtpSent] = useState(false);

  const [userData, setUserData] = useState({ email: '', otp: '', password1: '', password2: '' });

  const handleStateChange = (key, value) => {
    setUserData((prevState) => {
      prevState[`${key}`] = value;
      return { ...prevState };
    });
  };

  const onHandleConfirm = (e) => {
    e.preventDefault();
    API_POST('auth/getPasswordResetOtp', { email: userData.email })
      .then((res) => {
        dispatch({
          type: 'ALERT_OPEN',
          severity: 'success',
          isOpen: true,
          label: res.data?.message || 'Success'
        });
        setOtpSent(true);
      })
      .catch((err) => {
        API_HANDLE_ERROR(err, dispatch);
      });
  };

  const onHandleReset = (e) => {
    e.preventDefault();
    if (userData.password1 !== userData.password2) {
      API_HANDLE_ERROR('passwords dont match', dispatch);
    }
    API_POST('auth/resetPassword', {
      email: userData.email,
      otp: userData.otp,
      password: userData.password2
    })
      .then((res) => {
        dispatch({
          type: 'ALERT_OPEN',
          severity: 'success',
          isOpen: true,
          label: 'Password Reset Success, Please Login'
        });
        navigate('/');
      })
      .catch((err) => {
        API_HANDLE_ERROR(err, dispatch);
      });
  };

  const RequestComponent = () => {
    return (
      <form onSubmit={onHandleConfirm}>
        <Container direction={'column'} spacing={2}>
          <Item>
            <TextField
              variant="outlined"
              name="email"
              required={true}
              className={classes.inputBox}
              label="Email"
              value={userData.email}
              onChange={(e) => {
                handleStateChange('email', e.target.value);
              }}
              // helperText={errors.username ? errors.username.message : ''}
              type="text"
              // inputRef={register({ required: true })}
              fullWidth
            />
          </Item>
          <Item>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              fullWidth
              className={classes.button}>
              Send OTP
            </Button>
          </Item>
        </Container>
      </form>
    );
  };

  const OtpComponent = () => {
    return (
      <form onSubmit={onHandleReset}>
        <Container direction={'column'} spacing={2}>
          <Item>
            <TextField
              variant="outlined"
              name="otp"
              required={true}
              className={classes.inputBox}
              label="OTP"
              value={userData.otp}
              onChange={(e) => handleStateChange('otp', e.target.value)}
              // helperText={errors.username ? errors.username.message : ''}
              type="text"
              // inputRef={register({ required: true })}
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              variant="outlined"
              name="password"
              required={true}
              className={classes.inputBox}
              label="Password"
              value={userData.password1}
              onChange={(e) => handleStateChange('password1', e.target.value)}
              // helperText={errors.username ? errors.username.message : ''}
              type="password"
              // inputRef={register({ required: true })}
              fullWidth
            />
          </Item>
          <Item>
            <TextField
              variant="outlined"
              name="password"
              required={true}
              className={classes.inputBox}
              label="ReEnter Password"
              value={userData.password2}
              onChange={(e) => handleStateChange('password2', e.target.value)}
              // helperText={errors.username ? errors.username.message : ''}
              type="password"
              // inputRef={register({ required: true })}
              fullWidth
            />
          </Item>
          <Item>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              fullWidth
              className={classes.button}>
              Reset Password
            </Button>
          </Item>
          <Item>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.button}
              onClick={() => {
                setOtpSent(false);
                setUserData({ otp: '', password1: '', password2: '', email: userData.email });
              }}>
              Generate New OTP
            </Button>
          </Item>
        </Container>
      </form>
    );
  };

  return (
    <>
      <Container direction={'column'} className={classes.login_page}>
        <Item>
          <Typography className={classes.heading}>RISKMATIC</Typography>
        </Item>
        <Item>
          <Item className={classes.paper}>
            <Typography
              className={classes.login_label}
              sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
              Forgot password / Generate New Password
            </Typography>
            {otpSent ? OtpComponent() : RequestComponent()}
          </Item>
        </Item>
      </Container>
    </>
  );
};

export default withStyles(styles)(PasswordReset);
