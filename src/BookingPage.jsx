import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { useParams } from "react-router-dom";

function BookingPage() {
    const movieData = useGlobalContext();
    const {id} = useParams();
    const filteredMovieData =  movieData.filter((obj) => {return obj.show.id === parseInt(id)});
    
    const[showName,setShowName] = useState(filteredMovieData[0]?.show?.name);
    const[customerName,setCustomerName] = useState('');
    const[tickitQuantity,setTickitQuantity] = useState(0);
    const[day,setDay] = useState('');
    const[timing,setTiming] = useState(filteredMovieData[0]?.show?.schedule?.time);

    const handleSubmit = ()=>{
        localStorage.setItem('showName',showName);
        localStorage.setItem('customerName',customerName);
        localStorage.setItem('tickitQuantity',tickitQuantity);
        localStorage.setItem('day',day);
        localStorage.setItem('timing',timing);
    }
    return (
        <>
        <div className="bookingPageStructure">
        <div className="bookingFormStructureParent">
                    <h1 className="formHeading"> Hurry!!<br />Few Tickits Left...</h1>
                    <form className="bookingForm">
                        <label>Show Name</label>
                        <input 
                            type="text" 
                            name="showName" 
                            autoComplete="off"
                            style={{textTransform : 'capitalize'}}
                            value={filteredMovieData[0]?.show?.name}
                            required
                            onChange={(e)=>setShowName(e.target.value)}
                        />
                        <label>Name of Customer</label>
                        <input
                            type="text"
                            name="customerName" 
                            autoComplete="off" 
                            required
                            onChange={(e)=>setCustomerName(e.target.value)}
                        />
                        <label>Number of tickits</label>
                        <select 
                            required
                            onChange={(e)=>setTickitQuantity(e.target.value)}
                        >
                            <option>Select...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <label>Day</label>
                        <select 
                            required
                            onChange={(e)=>setDay(e.target.value)}
                        >
                            <option>Select...</option>
                            {filteredMovieData[0]?.show?.schedule.days.map((currItm)=>{
                                return <option>{currItm}</option>
                            })}
                        </select>
                        <label>Timing</label>
                        <input 
                            type="text" 
                            name="timing" 
                            autoComplete="off"
                            value = {filteredMovieData[0]?.show?.schedule?.time}
                            required
                            onChange={(e)=>setTiming(e.target.value)}
                        />
                        <input onClick={handleSubmit} type='submit' value='Book' />
                    </form>
                </div>
        </div>
        </>
    );
}

export default BookingPage;