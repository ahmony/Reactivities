import React from 'react';
import NavBar from './NavBar';
import './Index.css';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../../features/home/Home';

export default observer(function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <Home />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
});
