import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  const toggle = useCallback(() => setState((oldState) => !oldState), []);

  return [state, toggle, setState];
};
