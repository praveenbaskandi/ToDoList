import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/redux/store';
import Navigator from '../ToDoList/src/pages/HomePage';

const App = () => {
  return (
    <Provider store={configureStore}>
      <Navigator />
    </Provider>
  );
};

export default App;
