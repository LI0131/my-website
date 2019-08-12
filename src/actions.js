import * as ActionTypes from './AppConstants';

export function setActivePage(pathname) {
    return {type: ActionTypes.SET_ACTIVE_PAGE, payload: pathname}
};