import React from 'react';

import { StoreProvider } from './stores';
import Posts from './components/Posts';

const App = () => (
  <StoreProvider>
    <Posts />
  </StoreProvider>
);

export default App;
