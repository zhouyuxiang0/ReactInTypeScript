import * as React from 'react';

import { Provider } from 'react-redux';
import Test from './common/test';
import store from './store';

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <div>
        <Test home={"123"} />
        </div>
      </Provider>
    )
  }
}

export default App;
