export const HOME_ITEM = 'home';
export const ABOUT_ITEM = 'about';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export function MAP_STATE_TO_PROPS(state) {
    return {
        activeItem: state.NavigationReducer.activeItem,
    }
};