import * as ConstantTypes from '../AppConstants';

const initialState = {
    activeItem: ConstantTypes.HOME_URL,
}

const NavigationReducer = (state=initialState, action) => {
    switch(action.type) {
        case ConstantTypes.SET_ACTIVE_ITEM: 
            return {
                ...state,
                activeItem: action.payload
            }
        default:
            return state;
    }
};

export default NavigationReducer;