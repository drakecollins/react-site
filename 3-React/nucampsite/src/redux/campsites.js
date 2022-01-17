import { CAMPSITES } from '../shared/campsites';
import * as ActionTypes from './ActionTypes';


export const Campsites = (state = {
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};

/*export const Campsites = (state = CAMPSITES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};*/