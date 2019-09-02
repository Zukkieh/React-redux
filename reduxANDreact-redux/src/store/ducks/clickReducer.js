export const DUCK_NAME = 'clickReducer';

export const Types = {
    UP: `${DUCK_NAME}/CLICK_UP_VALUE`,
    DOWN: `${DUCK_NAME}/CLICK_DOWN_VALUE`,
    RESET: `${DUCK_NAME}/CLICK_RESET_VALUE`,
}

const initialState = {
    newValue: 0
};

export default function clickReducer(state = initialState, action){
    switch(action.type){
        case Types.UP:
            return {
                newValue: state.newValue + 1
            };
        
        case Types.DOWN:
            return {
                newValue: state.newValue - 1 
            };
        
        case Types.RESET:
            return {
                newValue: 0
            };

        default:
            return state;
        
    }   
};

export const up = value => ({
    type: Types.UP,
    newValue: value
});

export const down = value => ({
    type: Types.DOWN,
    newValue: value
});

export const reset = value => ({
    type: Types.RESET,
    newValue: value
});
