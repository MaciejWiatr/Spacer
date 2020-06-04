import React, { useContext } from "react";
import SearchContext from "../../SearchContext";
import Masonry from "react-masonry-css";

const Results = () => {
    const [searchData] = useContext(SearchContext);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <div className="results__container">
            {searchData.data.length > 0 && !searchData.loading ? (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {searchData.data.map((res, index) => (
                        <div
                            className="result__card"
                            key={res.description + index}
                        >
                            <p>{res.description}</p>
                            <img src={res.img} alt="img"></img>
                        </div>
                    ))}
                </Masonry>
            ) : searchData.loading ? (
                <div className="loading__container">
                    <p>Loading...</p>
                    <img
                        src="https://i.imgur.com/5LazrM8.gif"
                        alt="loading-gif"
                    ></img>
                </div>
            ) : null}
        </div>
    );
};

export default Results;
