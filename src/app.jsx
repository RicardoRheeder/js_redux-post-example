import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Posts from './components/Posts'
import Postform from './components/Postform'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Postform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
     

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

