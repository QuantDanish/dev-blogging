import homeReducer from './reducer';
import * as actionTypes from './actionTypes';
import * as actionCreator from './actionCreator';
import { HomeActionType } from './types';
import { HomeState } from './types';
import * as homeService from './homeService';

export { actionTypes, actionCreator, homeReducer, HomeActionType, HomeState, homeService };
export default homeReducer;
