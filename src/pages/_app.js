import '../../styles/globals.css';

import { init } from "../../utils/sentry";
import {useImmerReducer} from 'use-immer';

import StateContext from '../components/contexts/stateContext';
import DispatchContext from '../components/contexts/dispatchContext';

init();

export default function App({ Component, pageProps, err }) {

  const initialState = {
    index: 0,
    btn: {
      isClicked: false,
    }
  };

  function customReducer(draft, action) {
    switch (action.type) {
      case "click":
        draft.isClicked = !draft.isClicked;
        break;
      case "reduceIndex":
        draft.index--;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(customReducer, initialState);

  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Component {...pageProps} err={err} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}


