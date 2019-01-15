import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    navBar: {
        background: "#8b0000"
    },
    rightdiv: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end"
    },
    textColor: {
        color: "white",
        opacity: 1
    },
    tabLink: {
        display: "flex",
        alignItems: "right",
        justifyContent: "right"
    }
};
const NavBar = props => {
    return (
        <div>
            <AppBar position="static" className={props.classes.navBar}>
                <Toolbar className={props.classes.navBar}>
                    <Typography variant="title" style={{ color: "white" }}>
                        <Link className="textColor" to="/">
                            Theta Tau Zeta Delta
                        </Link>
                    </Typography>
                    <div className={props.classes.rightdiv}>
                        <Tabs
                            indicatorColor="primary"
                            textColor="inherit"
                            className={props.classes.tabLink}
                        >
                            <Link
                                to="/rush"
                                className={props.classes.textColor}
                            >
                                <Tab label="Rush" />
                            </Link>
                            <Link
                                to="/timer"
                                className={props.classes.textColor}
                            >
                                <Tab label="Timer" />
                            </Link>
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default withStyles(styles)(NavBar);
