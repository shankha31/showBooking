import React from "react";
import Image from "./image";
import { NavLink } from "react-router-dom";
 
function Card(props) {
    return (
        <>
            <div className="cardArea" align="center" key={props.id}>
                <div className="card">
                    <Image imgsrc={props.imgsrc} />
                    <div className="cardContent">
                        <h3 className="title">{props.title}</h3>
                        <div className="info">
                            <p className="infoTxt">{props.language}</p>
                            <p className="infoTxt" style={{borderLeft : '1px solid black'}}>Genres : {props.genres.map((currItm)=>{
                                return <span style={{marginLeft : '5px'}}>{currItm}</span>
                            })}</p>
                        </div>
                        <NavLink to={`movie/${props.id}`} className="link" >
                            <button className="moredetails">More Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;