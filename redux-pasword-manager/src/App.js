import React from 'react';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainComponent from './component'
import store from './store'

injectTapEventPlugin()

const App=(props)=>{
  return(
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  )
}

export default App
