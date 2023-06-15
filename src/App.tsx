import React, {useState} from 'react';
import AppRouter from "./routing/AppRouter";
import {Normalize} from "styled-normalize";
import { GlobalStyle } from './theme/globalStyles';

function App() {

    return (
        <>
            <Normalize/>
            <GlobalStyle/>
            <AppRouter/>
        </>

    );
}

export default App;
