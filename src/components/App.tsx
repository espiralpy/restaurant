import React, { Component } from 'react';
import { UitkButton } from 'uitk-react-button';
import { UitkSlider } from 'uitk-react-slider';
import { UitkInput } from 'uitk-react-input';
import { UitkSelect } from 'uitk-react-select';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="uitk-grid all-cell-1-3 all-x-gutter-three">
          <div className="uitk-cell all-cell-1-3">
            <h1>Bill splitter: input, slider</h1>
          </div>
          <div className="uitk-cell all-cell-1-3">
            <h1>Tip calculator: select</h1>
          </div>
          <div className="uitk-cell all-cell-1-3">
            <h1>Total: button</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
