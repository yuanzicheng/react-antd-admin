import {INIT_DATA2, ADD_DATA2_ITEM, DELETE_DATA2_ITEM} from '../action-types';

const defaultState = {
    data: [4, 5, 6],
};

export const reducer = (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INIT_DATA2:
            newState.data = action.data;
            return newState;
        case ADD_DATA2_ITEM:
            newState.data.push(action.value);
            return newState;
        case DELETE_DATA2_ITEM:
            newState.data.splice(action.index, 1);
            return newState;
        default:
            return state
    }
};