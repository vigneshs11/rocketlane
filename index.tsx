import React, { Component } from 'react';
import { render } from 'react-dom';
import { Trigger } from './Trigger/Trigger';
import './style.scss';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Trigger />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
