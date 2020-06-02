import React, { useState } from "react";
import { render } from "react-dom";
import SearchContext from "./SearchContext";
import Search from "./Components/Search";
const App = () => {
    const searchHook = useState({});
    return (
        <SearchContext.Provider value={searchHook}>
            <Search />
        </SearchContext.Provider>
    );
};

render(<App />, document.getElementById("root"));
