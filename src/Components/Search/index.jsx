import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../SearchContext";
import axios from "axios";

const Search = () => {
    const [results, setResults] = useContext(SearchContext);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        requestData(e.target.elements.query.value);
    };

    const requestData = async (q) => {
        try {
            setLoading(true);
            const resp = await axios.get(
                `https://images-api.nasa.gov/search?q=${q}&media_type=image`
            );
            let data = resp.data.collection.items;
            console.log(data);
            data = data.map((data) => {
                const img = data.links[0].href;
                const description = data.data[0].description;
                return { img, description };
            });
            setLoading(false);
            setResults(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search__container">
            <div className="search__header">
                <h1>Spacer</h1>
                <h4>Superowa apka</h4>
            </div>
            <form onSubmit={handleSearch} className="search__form">
                <input name="query"></input>
            </form>

            <div className="search__results">
                {results.length > 0 ? (
                    results.map((res, index) => (
                        <div key={res.description + index}>
                            <p>{res.description}</p>
                            <img src={res.img} alt="img"></img>
                        </div>
                    ))
                ) : loading ? (
                    <p>Loading...</p>
                ) : null}
            </div>
        </div>
    );
};

export default Search;
