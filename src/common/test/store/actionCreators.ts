import * as constants from './constants';

export interface ISetNameAction {
  type: string,
  data?: any,
}

// 联合类型  type1 | type2 ....
export type TestAction = ISetNameAction;

export const setName = (): ISetNameAction => {
  const action: ISetNameAction = {
    type: constants.SET_NAME
  }
  return action;
}
