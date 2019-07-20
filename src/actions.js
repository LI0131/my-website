import * as ActionTypes from './AppConstants';

export function setActiveIndex(index) {
    return {type: ActionTypes.SET_ACTIVE_INDEX, payload: index}
};