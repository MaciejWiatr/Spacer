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
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {/* array of JSX items */}

                {searchData.data.length > 0 && !searchData.loading ? (
                    searchData.data.map((res, index) => (
                        <div
                            className="result__card"
                            key={res.description + index}
                        >
                            <p>{res.description}</p>
                            <img src={res.img} alt="img"></img>
                        </div>
                    ))
                ) : searchData.loading ? (
                    <p>Loading...</p>
                ) : null}
            </Masonry>
        </div>
    );
};

export default Results;
