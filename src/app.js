import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'foundation-sites/dist/css/foundation.min.css';
import { Provider } from 'react-redux';

import PostContainer from './containers/post';
import { store, storeDev } from './reducers/postReducer';

export default function App() {
  return (
    <Provider store={storeDev}>
      <PostContainer />
    </Provider>
  );
}
