import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import store from './redux/store';
import { fetchUserProfileData } from './redux/features/profileSlice.js';
import DashboardLayout from './components/DashboardLayout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfileData());
  }, []);

  return (
    <Provider store={store}>
      <DashboardLayout />
    </Provider>
  );
};

export default App;
