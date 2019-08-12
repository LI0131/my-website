export const DEFAULT_PATH = '/v1/home';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

export function MAP_STATE_TO_PROPS(state) {
    return {
        activeIndex: state.NavigationReducer.activePage,
    }
};