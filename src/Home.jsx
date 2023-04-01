import React from "react";
import Card from './components/Card';
import "./index.css";
import { useGlobalContext } from "./context";

function Home() {
    const movieData = useGlobalContext();
    return (
        <>
            <div className="header">
                <h1>List of Shows</h1>
            </div>
            <div className="cards">
                {movieData.map((cardItem)=>{
                    return (<Card
                        key={cardItem.show.id}
                        id={cardItem.show.id}
                        imgsrc={cardItem.show.image?.original}
                        language={cardItem.show.language}
                        title={cardItem.show.name}
                        genres={cardItem.show.genres}
                    />)
                })}

            </div>
        </>

    );
}

export default Home;