import * as api from '../api/index.js';

export const signup = (inputs, history) => async (dispatch) => {
    try {
        const res = await api.signUp(inputs);
        const data=res.data;
        dispatch({ type: 'AUTH', data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signin = (inputs, history) => async (dispatch) => {
    try {
        const res = await api.signIn(inputs);
        const data=res.data;
        dispatch({ type: 'AUTH', data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};