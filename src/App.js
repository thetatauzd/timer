import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Grid from "@material-ui/core/Grid";
import Welcome from "./Welcome";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Welcome />
                <Grid container className="content-section-a root" spacing={16}>
                    <Grid item xl={2} />
                    <Grid item xl={3}>
                        <img alt="" src={require("./img/logo.jpg")} />
                        <p className="lead leftjust">
                            Welcome to the official site of the University of
                            South Carolina's chapter of Theta Tau! Theta Tau has
                            become the oldest and largest Fraternity for
                            Engineers, with chapters across the country, and
                            members around the world. Our mission is to develop
                            engineering leaders for <b>Service</b>,{" "}
                            <b>Profession</b>, and <b>Brotherhood</b>.{" "}
                        </p>
                    </Grid>
                    <Grid item xl={2} />
                    <Grid item xl={3}>
                        <video controls className="vc" data-vscid="0i604jfia">
                            <source
                                src={require("./img/video.mp4")}
                                type="video/mp4"
                            />
                        </video>
                    </Grid>
                    <Grid item xl={2} />
                </Grid>
                <Grid container className="content-section-b root" spacing={16}>
                    <Grid item xl={2} />
                    <Grid item xl={3}>
                        <b>
                            <h1 className="leftjust">About Theta Tau</h1>
                        </b>
                        <p className="lead leftjust">
                            Since its founding at the University of Minnesota in
                            1904, over 40,000 have been initiated over the
                            years. With emphasis on quality and a strong
                            fraternal bond, the Fraternity has chapters only at
                            ABET accredited schools and limits the number of
                            student members in any one of its chapters across
                            the nation.
                            <br />
                            <br />
                            <b>Purpose</b>
                            <br /> The purpose of Theta Tau is to develop and
                            maintain a high standard of professional interest
                            among its members, and to unite them in a strong
                            bond of fraternal fellowship.
                        </p>
                    </Grid>
                    <Grid item xl={2} />
                    <Grid item xl={3}>
                        <img
                            alt=""
                            className="shrinkImg"
                            src={require("./img/logo2.jpg")}
                        />
                        <p className="lead">
                            <br />
                            <i>
                                "Whatsoever thy hand findeth to do, do it with
                                thy might."
                                <br /> <b>~Ecclesiastes 9:10</b>
                            </i>
                        </p>
                    </Grid>
                    <Grid item xl={2} />
                </Grid>
                <Grid container className="content-section-a root" spacing={16}>
                    <Grid item xl={3} />
                    <Grid item xl={6}>
                        <Carousel autoPlay>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7557.JPG?alt=media&amp;token=1653d497-2967-4117-b64f-57ef97d3bda7"
                                    alt=""
                                    data-caption="Big Little Reveal - Fall 2017"
                                />
                                <p className="legend">
                                    Big Little Reveal - Fall 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7590.JPG?alt=media&amp;token=88f3454a-9f70-4568-a565-d5e4451cace5"
                                    alt=""
                                    data-caption="Big Little Reveal - Fall 2017"
                                />
                                <p className="legend">
                                    Big Little Reveal - Fall 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7598.JPG?alt=media&amp;token=c1debd92-6ecf-44d3-b415-589133869117"
                                    alt=""
                                    data-caption="Pumpkin Chunkin - Fall 2017"
                                />
                                <p className="legend">
                                    Pumpkin Chunkin - Fall 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7626.JPG?alt=media&amp;token=c6dcf899-a052-4e25-9b55-2822430c1f2d"
                                    alt=""
                                    data-caption="Pumpkin Chunkin - Fall 2017"
                                />
                                <p className="legend">
                                    Pumpkin Chunkin - Fall 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7675.JPG?alt=media&amp;token=c270cfa8-58a8-4900-af39-9a1a27ca95a3"
                                    alt=""
                                    data-caption="Initiation - Fall 2017"
                                />
                                <p className="legend">Initiation - Fall 2017</p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FIMG_7700.JPG?alt=media&amp;token=83264d59-9d5c-4ec4-a05c-826c21b0804f"
                                    alt=""
                                    data-caption="Initiation - Fall 2017"
                                />
                                <p className="legend">Initiation - Fall 2017</p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FSp171.JPG?alt=media&amp;token=97486e29-dd13-4b4a-a59a-4efcc48b020c"
                                    alt=""
                                    data-caption="Derby - Spring 2017"
                                />
                                <p className="legend">Derby - Spring 2017</p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FSp172.JPG?alt=media&amp;token=7aa2b8a4-4391-4b07-8c37-e62a030b2408"
                                    alt=""
                                    data-caption="Senior Night - Spring 2017"
                                />
                                <p className="legend">
                                    Senior Night - Spring 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2FSp174.JPG?alt=media&amp;token=5e88e60b-9fac-4eec-b37b-1e5b8cd40fca"
                                    alt=""
                                    data-caption="Semi Formal - Spring 2017"
                                />
                                <p className="legend">
                                    Semi Formal - Spring 2017
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2Fimg1.JPG?alt=media&amp;token=464660c1-243d-477a-9932-2242128025f2"
                                    alt=""
                                    data-caption="Car Smash - Fall 2016"
                                />
                                <p className="legend">Car Smash - Fall 2016</p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2Fimg5.JPG?alt=media&amp;token=bbfc0d0a-f9f6-481e-9b30-af119c7fac88"
                                    alt=""
                                    data-caption="Big Little Reveal - Fall 2016"
                                />
                                <p className="legend">
                                    Big Little Reveal - Fall 2016
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2Fimg7.JPG?alt=media&amp;token=4929c2a0-e340-4c6d-abec-af485a09329e"
                                    alt=""
                                    data-caption="Big Little Reveal - Fall 2016"
                                />
                                <p className="legend">
                                    Big Little Reveal - Fall 2016
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2Fimg8.JPG?alt=media&token=a4e3937a-da31-4207-8e6b-000fc23dd30c"
                                    alt=""
                                    data-caption="Veeblefetzer - Fall 2016"
                                />
                                <p className="legend">
                                    Veeblefetzer - Fall 2016
                                </p>
                            </div>
                            <div className="center">
                                <img
                                    className="img-responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/thetatauzd-4d942.appspot.com/o/Images%2Fimg10.JPG?alt=media&token=565bd3c8-e531-4075-87ee-fafdb0f0eab6"
                                    alt=""
                                    data-caption="Senior Night - Fall 2016"
                                />
                                <p className="legend">
                                    Senior Night - Fall 2016
                                </p>
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid item xl={3} />
                </Grid>
                <Grid
                    container
                    className="content-section-b root"
                    spacing={16}
                />
            </div>
        );
    }
}

export default App;
