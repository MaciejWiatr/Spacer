import React, { useState } from "react";
import { render } from "react-dom";
import SearchContext from "./SearchContext";
import { Router } from "@reach/router";
import HeroSection from "./Components/HeroSection";
import ResultsSection from "./Components/ResultsSection";
import ErrorBoundary from "./ErrorBoundary";

const NotFound = () => <p>Sorry, nothing here</p>;

const App = () => {
    const searchHook = useState({ data: {}, loading: false });
    return (
        <ErrorBoundary>
            <SearchContext.Provider value={searchHook}>
                <Router id="router">
                    <HeroSection path="/" />
                    <ResultsSection path="results/:q"></ResultsSection>
                    <NotFound default />
                </Router>
            </SearchContext.Provider>
        </ErrorBoundary>
    );
};

render(<App />, document.getElementById("root"));
