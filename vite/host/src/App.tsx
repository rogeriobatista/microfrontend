import React, { lazy } from 'react';

const TitleRemote = lazy(() => import('remoteApp/title'));

const App: React.FC = () => (
  <TitleRemote />
);

export default App;