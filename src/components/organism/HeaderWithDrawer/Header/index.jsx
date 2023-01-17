import React from 'react';
import { Components, Icons } from '../../../../utils/material-ui';
import styles from '../styles';
import theme from '../../../../utils/theme';

const { AppBar, Toolbar, Typography, IconButton, withStyles } = Components;
const { MenuIcon } = Icons;
const Header = ({ classes, handleDrawerToggle, drawerWidth, label }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: theme.palette.primary.main,
        color: '#FFFFFF'
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            fontSize: '20px',
            fontFamily: theme.palette.font.fontFamily,
            fontWeight: '600',
            color: '#FFFFFF'
          }}>
          {label === 'Welcome' ? `Welcome` : label}
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            fontSize: '1rem',
            fontFamily: theme.palette.font.fontFamily,
            color: '#FFFFFF'
          }}>
          {label === 'Welcome' ? `Welcome` : label}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(Header);
