import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useStateValue } from './utils/store';
import Alert from './components/organism/Snackbar';

// ******************** Pages ********************
import { PrivateRoute } from './utils/route';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import NotFound from './pages/NotFound/index.js';
import Screen from './utils/screen.js';

// ******************** Style ********************
import './App.css';

import ErrorBoundary from './components/ErrorBoundary.jsx';
import Logout from './pages/Logout';
import Setting from './pages/Settings';
import Home from './pages/Home';

const App = () => {
  const [store] = useStateValue();
  const [role] = useState(store.role);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(routeComponent(role));
  }, [role]);

  return (
    <ErrorBoundary>
      <Alert />
      <Router>
        <Routes>
          <Route exact path="/" key="/" element={<Login />} />
          <Route path="/login" key="/login" element={<Login />} />
          <Route path="/logout" key="/logout" element={<Logout />} />
          <Route
            exact
            path="/passwordReset"
            key="/passwordReset"
            element={<PasswordReset />}></Route>
          ,{routes}
          <Route path="*" key="" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

function routeComponent(role) {
  switch (role) {
    case 'admin':
      return admin();
    default:
      return null;
  }
}

function admin() {
  return [
    <Route
      exact
      path="/user"
      key="/user"
      element={<PrivateRoute element={Screen('User', <Setting />)} />}></Route>,
    <Route
      exact
      path="/overview"
      key="/overview"
      element={<PrivateRoute element={Screen('DROR SERVICE TRADING SYSTEM', <Home />)} />}></Route>,
    <Route
      exact
      path="/Vendor-Registeration"
      key="/Vendor-Registeration"
      element={<PrivateRoute element={Screen('Vendor Registeration', <Home />)} />}></Route>,
    <Route
      exact
      path="/Purchase-order"
      key="/Purchase-order"
      element={<PrivateRoute element={Screen('Purchase-order', <Home />)} />}></Route>,
    <Route
      exact
      path="/disaptch"
      key="/disaptch"
      element={<PrivateRoute element={Screen('Dispatch', <Home />)} />}></Route>,
    <Route
      exact
      path="/Master-Details"
      key="/Master-Details"
      element={<PrivateRoute element={Screen('Master-Details', <Home />)} />}></Route>,
    <Route
      exact
      path="/logout"
      key="/logout"
      element={<PrivateRoute element={Screen('', <Logout />)} />}></Route>
  ];
}

export default App;
