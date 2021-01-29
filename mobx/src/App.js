import React from 'react'
import { Provider } from 'mobx-react'

import Home from './pages/Home'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>
  );
}

export default App;
