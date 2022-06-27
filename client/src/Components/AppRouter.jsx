import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";

const AppRouter = () => {

    const isAuth = false;

    return (
        <Routes>
            {publicRoutes.map((item, index) =>
                <Route path={item.path} key={index} element={<item.Component/>} >   </Route>
            )}
        </Routes>
    );
};

export default AppRouter;