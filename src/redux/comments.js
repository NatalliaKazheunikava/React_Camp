import { COMMENTS } from '../shared/comments (1)';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment); //attaches a new item to the array
        default:
            return state;
    }
}; //splitting reducers