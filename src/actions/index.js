import { SET_POSTS } from '../constants';

const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts,
});

export default dispatch => ({
  setPosts: posts => dispatch(setPosts(posts)),
});
