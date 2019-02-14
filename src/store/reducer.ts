import { combineReducers } from 'redux-immutable';
import { reducer as testReducer } from '../common/test/store'

const reducer = combineReducers({
  test: testReducer,
});

export default reducer;
