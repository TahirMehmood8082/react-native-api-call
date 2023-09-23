import React from "react";
import DemoApp from "./DemoApp";
import {Provider} from 'react-redux';
import {store} from './Store'

const App = () => {
  return (
    <Provider store={store}>
      <DemoApp />
    </Provider>
  );
}

export default App;