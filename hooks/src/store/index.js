import { createStore } from 'redux';

import { clickReducer } from './ducks/clickReducer';

const store = createStore(clickReducer); 

export default store;