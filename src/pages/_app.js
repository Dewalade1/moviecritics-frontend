import '../../styles/globals.css';
import "../../styles/bootstrap.min.css";

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
      isLikeClicked: false,
      isDislikeClicked: false,
      isFavClicked: false
    }
  };

  function customReducer(draft, action) {
    switch (action.type) {
      case "click":
        draft.btn.isClicked = !draft.btn.isClicked;
        break;
      case "like":
        draft.btn.isLikeClicked = !draft.btn.isLikeClicked;
        draft.btn.isDislikeClicked = false;
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


