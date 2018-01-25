import React, { Component } from 'react';

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCounter: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.state.clickCounter < 10) {
      let newCount = this.state.clickCounter + 1
      this.setState({clickCounter: newCount})
    } else {
      this.setState({clickCounter: 0})
    }
  }

  render() {
    console.log(this.state.clickCounter)
    return(
      <div>
        <h2>Chart Container</h2>
        <button onClick={this.handleOnClick}>FILL THE DONUT</button>
      </div>
    )
  }
}

export default ChartContainer;
