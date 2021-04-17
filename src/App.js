import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appData: 'React Marathon'};
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick() {
      this.setState({ appData: this.state.appData.toLowerCase() })
   }
  render() {
    return <div onClick={this.handleClick}> {this.state.appData} </div>
  }
}
