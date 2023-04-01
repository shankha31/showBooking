import React from "react";
import "./index.css";
import Home from "./Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import MovieSummary from "./MovieSummary";
import BookingPage from "./BookingPage";

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<MovieSummary />} />
                    <Route path="/booking/:id" element={<BookingPage />} />
                </Routes>
            </HashRouter>

        </>

    );
}

export default App;