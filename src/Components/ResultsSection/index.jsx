import React from "react";
import Search from "../Search";
import Results from "../Results";
import "./style.scss";
import { Link } from "@reach/router";

const ResultsSection = (props) => {
    document.addEventListener("scroll", (e) => {
        const searchBar = document.querySelector(".search__container");
        const title = document.querySelector(".results__title");
        const scrollHeight = window.pageYOffset;

        if (scrollHeight > searchBar.offsetTop) {
            console.log("el");
            title.style.fontSize = "2rem";
        } else {
            title.style.fontSize = "4rem";
        }
    });

    //.search__container
    return (
        <div className="results__section">
            <header>
                <Link to="/">
                    <h1 className="results__title">SPACER</h1>
                </Link>
            </header>

            <Search style={{ position: "fixed" }} inputValue={props.q} />

            <Results />
        </div>
    );
};
export default ResultsSection;
