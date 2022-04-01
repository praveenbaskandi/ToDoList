import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/redux/store';
import Navigator from '../ToDoApp/src/pages/HomePage';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Navigator />
    </Provider>
  );
};

export default App;
