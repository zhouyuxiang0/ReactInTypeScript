import * as constants from './constants';

import { fromJS } from 'immutable';
import { TestAction } from './actionCreators';



export interface ITestState {
  name: string,
  set?: any,
  getIn?: any
}

const defaultState: ITestState = fromJS({
  name: ""
});

export default (state = defaultState, action: TestAction) => {
  switch (action.type) {
    case constants.SET_NAME:
      return state.set('name', "zhou");
    default:
      return state;
  }
}
