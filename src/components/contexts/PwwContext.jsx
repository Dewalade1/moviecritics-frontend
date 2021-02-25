import { useRouter } from 'next/router';
// import { useSelector } from 'react-redux';
import React, { useState, createContext, useEffect } from 'react';
// import { selector } from '../redux/entities/profile';

const PwwContext = createContext([{}, () => { }]);

// const defaultState = {
//   showNavbar: false,
//   google: null,
//   user: {
//     name: '',
//     email: '',
//     username: '',
//     phone: '',
//     profile_photo_url: '',
//   },
// };

const PwwProvider = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState({ ...defaultState });

  // const user = useSelector((reduxState) => selector(reduxState).item);

  // useEffect(() => {
  //   if (user && Object.entries(user).length > 5) {
  //     setState({ ...defaultState, user });
  //   } else {
  //     setState({ ...defaultState, user: state.user });
  //   }
  // }, [router.pathname, user, state.user]);

  return (
    <PwwContext.Provider value={[state, setState]}>
      {children}
    </PwwContext.Provider>
  );
};

export { PwwContext, PwwProvider };
