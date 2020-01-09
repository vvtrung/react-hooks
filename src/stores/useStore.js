import { useContext } from 'react';

import { StoreContext } from '.';

export default (stateKey = null, actionType = null) => {
  const { state, actions } = useContext(StoreContext);
  return [
    state && stateKey ? state[stateKey] : state,
    actions && actionType ? actions[actionType] : actions,
  ];
};
