import React from 'react';

import Post from './Post';
import usePostState from '../../stores/useStore';

const Posts = () => {
  const [state] = usePostState('posts');
  return (
    state && state.posts && state.posts.map(p => (
      <Post key={p.id} post={p} />
    ))
  );
};
export default Posts;
