import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

function MovieSummary() {
    function createMarkup() {
        return {__html: filteredMovieData[0]?.show?.summary};
    }
    const movieData = useGlobalContext();
    const {id} = useParams();
    const filteredMovieData =  movieData.filter((obj) => {return obj.show.id === parseInt(id)});

    return (
        <>
            <div className="summaryStructure">
                <div className="summaryCard">
                    <h2 className="headerTxtSummary">Summary </h2>
                    <div className="summaryTxt" dangerouslySetInnerHTML={createMarkup()} />
                    <NavLink to={`/booking/${id}`} className="link">
                        <button className="bookNowBtn">Book Now</button>  
                    </NavLink>            
                </div>
            </div>
        </>

    );
}

export default MovieSummary;