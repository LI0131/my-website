import * as ConstantTypes from '../AppConstants';
import history from '../history';

const incomingIndex = ConstantTypes.GET_STATE_FROM_URL(history.location.pathname);

const initialState = {
    activeIndex: incomingIndex === null ? ConstantTypes.DEFAULT_INDEX : incomingIndex
}

const NavigationReducer = (state=initialState, action) => {
    switch(action.type) {
        case ConstantTypes.SET_ACTIVE_INDEX: 
            return {
                ...state,
                activeIndex: action.payload
            }
        default:
            return state;
    }
};

export default NavigationReducer;