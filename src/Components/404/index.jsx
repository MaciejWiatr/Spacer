import React from "react";
import notFoundImg from "./404.png";
import { Link, useNavigate } from "@reach/router";
import "./style.scss";

const NotFound = () => {
    const navi = useNavigate();
    setTimeout(() => navi(`/`), 5000);

    return (
        <div className="not-found__section">
            <img src={notFoundImg} alt="404 img"></img>
            <h2>Sorry but this page doesnt exist </h2>
            <Link to="/">Take me home!</Link>

            <p>You will be navigated to home page in 5 seconds</p>
        </div>
    );
};

export default NotFound;
