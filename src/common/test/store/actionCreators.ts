import * as constants from './constants';

// 通用的action接口
// type: action类型
// data: action传递的数据 （可选）
export interface IAction {
  type: string,
  data?: any,
}

export const setName = (): IAction => {
  const action: IAction = {
    type: constants.SET_NAME
  }
  return action;
}
