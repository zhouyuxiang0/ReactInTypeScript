import * as constants from './constants';

import { fromJS } from 'immutable';
import { IAction } from './actionCreators';



// 此处使用只读 类型 每个组件都需要定义其对应的接口
// 使用immutable将数据转为不可变数据
// 由于readonly是typescript提供的，数据实际是可变的，
// 所以同时使用更好一些

const defaultState = fromJS({
  name: "zhou"
});

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case constants.SET_NAME:
      return state.set('name', "zhou");
    default:
      return state;
  }
}
