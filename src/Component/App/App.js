import { React, Component } from "react";
import s from "./App.module.css";

class StopWatch extends Component {
  state = {
    timer: null,
    hours: "00",
    counter: "00",
    seconds: "00",
    startDisabled: true,
    stopDisabled: false,
    isClicked: false,
  };

  constructor(props) {
    super(props);

    this.onPageLoad = this.onPageLoad.bind(this);
    this.onButtonStart = this.onButtonStart.bind(this);
    this.onButtonStop = this.onButtonStop.bind(this);
    this.onButtonWait = this.onButtonWait.bind(this);
    this.onButtonReset = this.onButtonReset.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  start() {
    let self = this;
    let timer = setInterval(() => {
      let num = (Number(this.state.seconds) + 1).toString(),
        count = this.state.counter;
      let hour = this.state.hours;

      if (Number(this.state.seconds) === 59) {
        count = (Number(this.state.counter) + 1).toString();
        num = "00";
      }
      if (Number(this.state.counter) === 59) {
        hour = (Number(this.state.hours) + 1).toString();
        count = this.state.hours;
        num = "00";
      }
      self.setState({
        hours: hour.length === 1 ? "0" + hour : hour,
        counter: count.length === 1 ? "0" + count : count,
        seconds: num.length === 1 ? "0" + num : num,
      });
    }, 1000);
    this.setState({ timer });
  }

  onPageLoad() {
    this.start();
    this.setState({ startDisabled: true, stopDisabled: false });
  }

  onButtonStart() {
    clearInterval(this.state.timer);
    this.start();
    this.setState({ startDisabled: true, stopDisabled: false });
  }

  onButtonStop() {
    clearInterval(this.state.timer);
    this.setState({ startDisabled: false, stopDisabled: true });
    this.setState({
      timer: null,
      hours: "00",
      counter: "00",
      seconds: "00",
    });
  }

  onButtonWait() {
    if (this.state.isClicked) {
      this.setState({
        isClicked: false,
        startDisabled: false,
        stopDisabled: true,
      });

      return clearInterval(this.state.timer);
    }

    this.setState({
      isClicked: true,
    });

    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 300);
  }

  onButtonReset() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      hours: "00",
      counter: "00",
      seconds: "00",
      startDisabled: false,
      stopDisabled: true,
    });

    this.state.timer && this.start();
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.hourse}>
          <p className={s.timer}>
            {this.state.hours ? this.state.hours : "counter state is empty"}:
          </p>
          <p className={s.timer}>
            {this.state.counter ? this.state.counter : "counter state is empty"}
            :
          </p>
          <p className={s.timer}>
            {this.state.seconds ? this.state.seconds : "seconds state is empty"}
          </p>
        </div>

        <div className={s.containeBbuttons}>
          <button
            className={s.button}
            onClick={() => this.onButtonStart()}
            title="Start"
          >
            Start
          </button>
          <button
            className={s.button}
            onClick={() => this.onButtonStop()}
            title="Stop"
          >
            Stop
          </button>
          <button
            className={s.button}
            onClick={() => this.onButtonWait()}
            title="Wait"
          >
            Wait
          </button>
          <button
            className={s.button}
            onClick={() => this.onButtonReset()}
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
