import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TwitterIcon from "mdi-react/TwitterIcon";
import InstagramIcon from "mdi-react/InstagramIcon";
import FacebookIcon from "mdi-react/FacebookIcon";

const style = {
    background: "white"
};

export default class Welcome extends Component {
    render() {
        return (
            <div className="intro-header">
                <div className="intro-message">
                    <h1> Theta Tau Zeta Delta</h1>
                    <h3> Professional Engineering Fraternity</h3>
                    <hr className="intro-divider" />>
                    <ul className="intro-social-buttons">
                        <li className="list-inline">
                            <a href="https://twitter.com/thetatauzd?lang=en">
                                <Button
                                    variant="contained"
                                    className="network-name cssRoot"
                                    style={style}
                                >
                                    <TwitterIcon
                                        color="#000 "
                                        className="icon"
                                    />
                                    Twitter
                                </Button>
                            </a>
                        </li>
                        <li className="list-inline">
                            <a href="https://www.instagram.com/thetatauzd/?hl=en">
                                <Button
                                    variant="contained"
                                    className="network-name cssRoot"
                                    style={style}
                                >
                                    <InstagramIcon
                                        color="#000 "
                                        className="icon"
                                    />
                                    Instagram
                                </Button>
                            </a>
                        </li>
                        <li className="list-inline">
                            <a href="https://www.facebook.com/ThetaTauZetaDelta/">
                                <Button
                                    variant="contained"
                                    className="network-name cssRoot"
                                    style={style}
                                >
                                    <FacebookIcon
                                        color="#000 "
                                        className="icon"
                                    />
                                    Facebook
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
