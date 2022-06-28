import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import News from "../pages/News";

const AppRouter = () => {

    const isAuth = false;

    return (
        <Routes>
            {publicRoutes.map((item, index) =>
                <Route path={item.path} key={index} element={<item.Component/>} >   </Route>
            )}
            <Route
                path="*"
                element={<News/>}
            />
        </Routes>
    );
};

export default AppRouter;