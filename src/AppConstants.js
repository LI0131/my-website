export const DEFAULT_INDEX = 0 
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';

export const INDEX_TO_URL = [
    '/v1/home',
    '/v1/about',
    '/v1/projects',
    '/v1/contact'
]

export function MAP_STATE_TO_PROPS(state) {
    return {
        activeIndex: state.NavigationReducer.activeIndex,
    }
};

export function GET_STATE_FROM_URL(url) {
    console.log(url)
    if (url === '/v1/home') {
        return null;
    } else if ( url === '/v1/about') {
        return 1;
    } else if ( url === '/v1/projects') {
        return 2;
    } else if (url === '/v1/contact') {
        return 3;
    } else {
        return null;
    }
}