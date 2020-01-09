import React, { useReducer } from 'react';

import reducer from '../reducers';
import actions from '../actions';

export const StoreContext = React.createContext({ posts: {} });

const initialState = {
  posts: {
    posts: [
      { id: 1, title: 'post 1' },
      { id: 2, title: 'post 2' },
      { id: 3, title: 'post 3' },
      { id: 4, title: 'post 4' },
      { id: 5, title: 'post 5' },
    ],
  },
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, actions: actions(dispatch) }}>
      { children }
    </StoreContext.Provider>
  );
};
