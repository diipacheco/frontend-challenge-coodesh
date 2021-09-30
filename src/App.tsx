import React from 'react';
import { Router } from 'react-router-dom';

import { UsersContextProvider } from './hooks/users';
import { Routes } from './routes';
import history from './services/history';

import Global from './styles/Global';

const App: React.FC = () => (
  <>
    <Router history={history}>
      <UsersContextProvider>
        <Routes />
      </UsersContextProvider>
    </Router>
    <Global />
  </>
);

export default App;
