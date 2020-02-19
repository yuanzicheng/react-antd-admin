import {INIT_DATA, ADD_ITEM, DELETE_ITEM} from '../action-types';

const defaultState = {
    data: [1, 2, 3],
};

export const reducer = (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INIT_DATA:
            newState.data = action.data;
            return newState;
        case ADD_ITEM:
            newState.data.push(action.value);
            return newState;
        case DELETE_ITEM:
            newState.data.splice(action.index, 1);
            return newState;
        default:
            return state
    }
};