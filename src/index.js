import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import { store } from 'store';

import createNavigator from 'routes';

const Routes = createNavigator();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
