import React, { useContext, useState } from "react";
import SearchContext from "../../SearchContext";
import axios from "axios";
import { useNavigate } from "@reach/router";

const Search = ({ inputValue }) => {
    const [searchData, setSearchData] = useContext(SearchContext);
    let query;
    const [location, setLocation] = useState(inputValue ? inputValue : "");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        requestData(e.target.elements.query.value);
        navigate(`/results/${query}`);
    };

    const requestData = async (q) => {
        query = q;
        try {
            setSearchData({ ...searchData, loading: true });
            const resp = await axios.get(
                `https://images-api.nasa.gov/search?q=${q}&media_type=image`
            );
            let data = resp.data.collection.items;
            data = data.map((data) => {
                const img = data.links[0].href;
                const description = data.data[0].description;
                return { img, description };
            });
            setSearchData({ query, data, loading: false });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search__container">
            <form onSubmit={handleSearch} className="search__form">
                <input
                    onChange={(e) => setLocation(e.target.value)}
                    name="query"
                    value={location}
                ></input>
                <label htmlFor="query">Search</label>
            </form>
        </div>
    );
};

export default Search;
