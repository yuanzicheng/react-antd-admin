import {ADD_ITEM, DELETE_ITEM, INIT_DATA} from './action-types.js';
import axios from "axios";

export const add_item = () => ({
    type: ADD_ITEM
});

export const delete_item = (index) => ({
    type: DELETE_ITEM,
    index
});

export const init_data = (data) => ({
    type: INIT_DATA,
    data
});

export const get_init_data = () => {
    return (dispatch) => {
        const url = '/list.json';
        // const url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        axios.get(url).then((response) => {
            dispatch(init_data(response.data));
        }).catch(error => {
            console.log(error);
        })
    }
};