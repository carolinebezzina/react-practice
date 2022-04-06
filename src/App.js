import React from "react";
import './App.css';
import CurrentDate from './components/currentDate.js'
import CurrentTime from './components/currentTime.js'
import Tree from './components/tree.js'
import Weather from "./components/weather";
import {fetchData} from "./assets/data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: null
    };
  }

  componentDidMount() {
    fetchData().then(data => {
        this.setState({
          treeData: data
        })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h2>Welcome!</h2>
          </div>
        </header>
        <div className="App-body">
          <h2>It is <CurrentDate /></h2>
          <h3>The time is: <CurrentTime /></h3>
          <p>Today in Melbourne the weather is <Weather /></p>
          <br />
          {this.state.treeData ? 
          <Tree data={this.state.treeData} />
          : null}
        </div>
      </div>
    );
  }
}

export default App;
