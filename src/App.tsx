import React from 'react';

import { UsersContextProvider } from './hooks/users';
import Global from './styles/Global';

const App: React.FC = () => (
  <UsersContextProvider>
    <h1>hello world</h1>
    <Global />
  </UsersContextProvider>
);

export default App;
