import React from "react";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSummary from "./MovieSummary";
import BookingPage from "./BookingPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<MovieSummary />} />
                    <Route path="/booking/:id" element={<BookingPage />} />
                </Routes>
            </BrowserRouter>

        </>

    );
}

export default App;