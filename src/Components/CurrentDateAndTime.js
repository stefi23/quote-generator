import React, { PureComponent } from "react";
import "./CurrentDateAndTime.css";

class CurrentDateAndTime extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: "day",
      time: "Now",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tic(), 1000);
  }

  tic = () => {
    const now = new Date();

    this.setState(() => {
      const date = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (seconds < 10) {
        seconds = "0" + now.getSeconds();
      }
      if (minutes < 10) {
        minutes = "0" + now.getMinutes();
      }
      if (hours < 10) {
        hours = "0" + now.getHours();
      }

      const day = now.getDay();
      const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return {
        date: `${weekDays[day]}| ${date}/${month}/${year}`,
        time: `${hours}:${minutes}:${seconds}`,
      };
    });
  };

  render() {
    const { date, time } = this.state;
    return (
      <div className="pt-5">
        <div className="row">
          <div className="col-6 offset-3 date">{date}</div>
        </div>
        <div className="row">
          <div className="col-6 offset-3 text-white time">{time}</div>
        </div>
        <hr size="30" color="white" />
      </div>
    );
  }
}

export default CurrentDateAndTime;
