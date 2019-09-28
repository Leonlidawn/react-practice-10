import React from 'react';
//need to fix resume
export default class Stopwatch extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      isRunning: false,
      h: 0,
      m: 0,
      s: 0,
    }


    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.resume = this.resume.bind(this);
    this.convertToTimeFormat = this.convertToTimeFormat.bind(this);

  }

  /**
   * start timmer from 0, timmer running
   */
  start() {
    this.setState({ time: 0, isRunning: true });

    this.timeID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      this.convertToTimeFormat();
    }, 1);
  }

  /**
   * stop timmer, timmer not running
   */
  stop() {
    clearInterval(this.timeID);
    this.setState({ isRunning: false });
  }

  /**
   * resume timmer, timmer running
   */
  resume() {
    this.setState({ isRunning: true });
    this.timeID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      this.convertToTimeFormat();

    }, 1);
  }


  convertToTimeFormat() {
    this.setState({
      h: Math.floor(this.state.time / (360000)),
      m: Math.floor(this.state.time % (360000) / 6000),
      s: Math.floor(this.state.time % 6000 / 100)
    });
    console.log(this.state.s);

  }

  render() {
    return (
      <div>
        {/* <h1> {this.state.time / 1000} </h1> */}
        <h1>
          {this.state.h < 10 ? 0 : ''}
          {this.state.h} :

          {this.state.m < 10 ? 0 : ''}
          {this.state.m} :

          {this.state.s < 10 ? 0 : ''}
          {this.state.s}
        </h1>



        <button disabled={this.state.isRunning} onClick={this.start}>start</button>
        <button disabled={!this.state.isRunning} onClick={this.stop}>stop</button>
        <button disabled={this.state.isRunning} onClick={this.resume}>resume</button>



      </div>
    );
  }

}