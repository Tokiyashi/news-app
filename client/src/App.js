import './index.css';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {

    return (

    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
