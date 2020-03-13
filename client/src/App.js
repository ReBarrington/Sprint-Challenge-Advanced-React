import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';


class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data, "is res.data from axios")
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        <h1>App here</h1>
        <PlayerList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
