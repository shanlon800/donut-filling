import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCounter: 0,
      options: {
        legend: 'none',
        pieStartAngle: 90,
        pieHole: 0.5,
        slices: {
          0: { color: 'blue' },
          1: { color: 'transparent' }
        }
      }
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
    let filled = this.state.clickCounter
    let empty = 10 - this.state.clickCounter
    let data = {
      data: [
        ['Label', 'Donut Space'],
        ['Donut Filled', filled],
        ['Empty Space',  empty]
      ]
    }
    console.log(this.state.clickCounter)
    return(
      <div>
        <h2>Fill The Donut!</h2>
        <Chart
          chartType="PieChart"
          data={data.data}
          options={this.state.options}
          graph_id="PieChart"
          width="100%"
          height="400px"
          legend_toggle
        />
        <button onClick={this.handleOnClick}>FILL THE DONUT</button>
      </div>
    )
  }
}

export default ChartContainer;
