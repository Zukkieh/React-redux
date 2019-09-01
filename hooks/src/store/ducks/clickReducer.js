export const Types = {
    UP: "clickReducers/CLICK_UP_VALUE",
    DOWN: "clickReducers/CLICK_DOWN_VALUE",
    RESET: "clickReducers/CLICK_RESET_VALUE",
}

const initialState = {
    newValue: 0
};

export const clickReducer = (state = initialState, action) => {
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
