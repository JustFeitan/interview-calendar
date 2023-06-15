import React from "react";
import {Route, Routes} from "react-router-dom";
import CalendarPage from "../pages/CalendarPage";
import Layout from "../pages/Layout/Layour";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<CalendarPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
