import React, { useEffect, useState } from "react";
import { useContext } from "react";

let API = 'https://api.tvmaze.com/search/shows?q=all';

const AppContext = React.createContext();

const AppProvider = ({children})=>{

    const[movieData,setMovieData] = useState([]);

    const fetchData = async(url)=>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovieData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData(API);
    },[])
    
    return(
        <>
            <AppContext.Provider value={movieData}>
                {children}
            </AppContext.Provider>
        </>
    )
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext}