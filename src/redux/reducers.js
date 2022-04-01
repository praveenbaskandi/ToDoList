import {combineReducers} from 'redux';

import noteRedux from './noteRedux/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    noteRedux,

    // Legacy
    locale,
  });
