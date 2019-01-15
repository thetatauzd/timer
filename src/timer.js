import React, { Component } from "react";
import "./App.css";
import { reset, startTimer, keepTime } from "./api";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const password = "zd4life";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        keepTime((err, timestamp, setting) =>
            this.setState({
                timestamp,
                setting
            })
        );
        this.state = {
            timestamp: "no time",
            disabled: true,
            rotateTime: 0,
            setting: true,
            buttonDisabled: true
        };
    }

    handleStart = () => {
        startTimer(10, () => console.log("timer app started"));
        this.setState({
            buttonDisabled: false
        });
    };

    reset = () => {
        reset(10, () => console.log("timer app restarted"));
        this.setState({
            buttonDisabled: true
        });
    };

    handleRotate = () => {
        startTimer(15, () => console.log("switched to rotate"));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.setting !== this.state.setting && !this.state.disabled) {
            if (this.state.setting) {
                startTimer(10, () => console.log("switched to rotate"));
            } else {
                startTimer(15, () => console.log("switched to rotate"));
            }
        }
    }

    secondsToTime(secs) {
        let devisor_for_Minutes = secs % (60 * 60);
        let minutes = Math.floor(devisor_for_Minutes / 60);

        let devisor_for_Seconds = devisor_for_Minutes % 60;
        let seconds = Math.ceil(devisor_for_Seconds);
        let obj = {
            m: minutes,
            s: seconds
        };
        return obj;
    }

    checkPassword = e => {
        this.setState({
            disabled: e.target.value !== password ? true : false
        });
    };

    render() {
        const time = this.state.timestamp;
        const seconds = this.secondsToTime(time).s;
        const minutes = this.secondsToTime(time).m;
        const timerView = (
            <div className={"timerText"}>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={this.state.disabled || !this.state.buttonDisabled}
                    onClick={this.handleStart}
                >
                    Start
                </Button>
                <span className={"timerText"}>
                    min: {minutes} sec: {seconds}
                </span>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={this.state.disabled || this.state.buttonDisabled}
                    onClick={this.reset}
                >
                    stop
                </Button>
                <div className={"timerText"}>
                    <Input
                        onChange={this.checkPassword}
                        disabled={!this.state.disabled}
                    />
                </div>
            </div>
        );
        const rotateView = (
            <div className={"timeUp"}>
                {" "}
                Time Up! Rotate ends in:{" "}
                {this.secondsToTime(this.state.timestamp).s}{" "}
            </div>
        );
        return this.state.setting ? timerView : rotateView;
    }
}
