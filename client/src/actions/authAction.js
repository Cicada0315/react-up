import * as api from '../api/index.js';

export const signup = (inputs, history) => async (dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signin = (inputs, history) => async (dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};