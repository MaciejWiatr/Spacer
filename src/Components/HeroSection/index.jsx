import React from "react";
import Search from "../Search";
import { Link } from "@reach/router";
import "./style.scss";

const HeroSection = () => (
    <div className="hero__section">
        <div className="search__section">
            <div className="search__header">
                <Link to="/">
                    <h1>SPACER</h1>
                </Link>
                <p>
                    Search anything related to space!
                </p>
            </div>
            <Search />
        </div>
    </div>
);

export default HeroSection;
