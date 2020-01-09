import { SET_POSTS } from '../constants';
import { postsReducer } from './postReducer';

export default (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    default:
      return state;
  }
};
