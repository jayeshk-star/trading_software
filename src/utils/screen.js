import React from 'react';
import HeaderWithDrawer from '../components/organism/HeaderWithDrawer';
// import User from '../pages/User';
import { Components } from './material-ui';
// import { API_GET, API_HANDLE_ERROR } from './api';
// import { useStateValue } from './store';

const { Box, Toolbar } = Components;

const drawerWidth = 260;
const Screen = (title, Component) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderWithDrawer label={title} />
      <Box
        component="main"
        sx={{
          pt: 1,
          minWidth: `calc(100% - ${drawerWidth}px)`,
          minHeight: '100vh',
          backgroundColor: '#F7FBFE'
        }}>
        <div>
          <Toolbar />
          {Component}
        </div>
      </Box>
    </Box>
  );
};

export default Screen;
