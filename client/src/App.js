import React from 'react';
import axios from 'axios';
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
          data: [...this.state.data, res.data],
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        <h1>App here</h1>
      </div>
    );
  }
}

export default App;
