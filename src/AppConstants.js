export const HOME_URL = '/v1/home';
export const ABOUT_URL = '/v1/about';
export const PROJECTS_URL = '/v1/recent';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export function MAP_STATE_TO_PROPS(state) {
    return {
        activeItem: state.NavigationReducer.activeItem,
    }
};