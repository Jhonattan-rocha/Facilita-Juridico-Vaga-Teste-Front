import React from "react";
import { Route, Routes } from "react-router-dom";

import NoPage from "../pages/NoPage";
import Cliente from "../pages/Clientes";

export default function Rotas(){
    return (
        <>
            <Routes>
                <Route path="/" index element={
                    <Cliente></Cliente>
                }/>
                <Route path="/404" index element={
                    <NoPage></NoPage>
                }/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </>
    );
};
