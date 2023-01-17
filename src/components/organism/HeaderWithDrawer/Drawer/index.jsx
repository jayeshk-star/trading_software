import React, { useState, useEffect } from 'react';
import { Components, Icons } from '../../../../utils/material-ui';
import theme from '../../../../utils/theme';
import styles from '../styles';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../../../utils/store';

const { Toolbar, List, ListItem, Drawer, withStyles } = Components;

const { AccountCircleIcon, LogoutIcon } = Icons;

const notSelectedKey = {
  margin: theme.spacing(0.7, 2),
  fontSize: '15px',
  fontWeight: theme.palette.font.fontWeight
};

const SideBar = (props) => {
  const [store] = useStateValue();
  const { window, handleDrawerToggle, mobileOpen, drawerWidth } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [role] = useState(store.role);
  const [items, setItems] = useState([]);
  const container = window !== undefined ? () => window().document.body : undefined;

  const goToHomePage = () => {
    navigate('/home');
  };

  const selectedKey = {
    fontSize: '15px',
    margin: theme.spacing(0.7, 2),
    borderRadius: '50vw',
    width: '230px',
    fontWeight: theme.palette.font.fontWeight,
    backgroundColor: theme.palette.primary.tableHeadingColor,
    color: theme.palette.primary.secondarymain
  };

  const CustomListItem = ({ to, primary, Icon, type }) => (
    <ListItem
      button
      id={primary}
      component={Link}
      to={to}
      style={to === location.pathname ? selectedKey : notSelectedKey}
      selected={to === location.pathname}>
      <React.Fragment>
        <Icon sx={{ mr: 1 }} />
        {primary}
      </React.Fragment>
    </ListItem>
  );

  useEffect(() => {
    setItems(navItems(role));
  }, []);

  const drawer = (
    <div>
      <Toolbar
        onClick={goToHomePage}
        sx={{
          height: '15vh',
          cursor: 'pointer'
        }}>
        <img
          src="https://i.ibb.co/sCfxTxR/Group-5893992.png"
          alt="Dror"
          width="150px"
          height="40px"
        />
      </Toolbar>

      <List
        sx={{
          mt: 0,
          height: '75vh',
          overflow: 'auto',
          backgroundColor: theme.palette.primary.secondarymain,
          color: theme.palette.primary.textColor,
          overflowX: 'hidden'
        }}>
        {items?.map((item, index) => (
          <CustomListItem
            to={item.link}
            primary={item.label}
            Icon={item.Icon}
            key={index}
            type={item?.type}
          />
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}>
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
        open>
        {drawer}
      </Drawer>
    </React.Fragment>
  );
};

function navItems(role) {
  switch (role) {
    case 'admin':
      return admin();
    default:
      return null;
  }
}

function admin() {
  return [
    {
      label: 'Overview',
      Icon: AccountCircleIcon,
      link: '/overview'
    },
    {
      label: 'Vendor Registeration',
      Icon: AccountCircleIcon,
      link: '/Vendor-Registeration'
    },
    {
      label: 'Purchase order',
      Icon: AccountCircleIcon,
      link: '/Purchase-order'
    },
    {
      label: 'Dispatch',
      Icon: AccountCircleIcon,
      link: '/disaptch'
    },
    {
      label: 'Master Details',
      Icon: AccountCircleIcon,
      link: '/Master-Details'
    },
    {
      label: 'User',
      Icon: AccountCircleIcon,
      link: '/user'
    },

    {
      label: 'Logout',
      Icon: LogoutIcon,
      link: '/logout'
    }
  ];
}

export default withStyles(styles)(SideBar);
