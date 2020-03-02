import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Line, Pie } from "react-chartjs-2";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex != prevProps.updateIndex) {
      this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  render() {
    let dataIndex;

    if (this.state.performanceData != null) {
      dataIndex = (
        <div id="index">
          {this.state.performanceData.map(item => {
            return (
              <div key={item.id}>
                {item.data.message} {item.data.distance}
              </div>
            );
          })}
        </div>
      );
    }

    const distances = [];
    const labels = [];

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
      });
    }

    let dataForLineDiagram = {
      datasets: [
        {
          data: distances,
          label: "Result History",
          backgroundColor: '#ff6384'
        
        }],
      labels: labels
    };

    let dataForPieDiagram = {
      datasets: [
        {
          data:  distances,
          label: "Result History"
        }],
      labels: labels
    };

    return (
      <div>
        {dataIndex}
        <Line data={dataForLineDiagram} />
        <Pie data={dataForPieDiagram} />
      </div>
    );
  }
}

export default DisplayPerformanceData;
