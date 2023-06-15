import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import { LayoutWrapper } from "./styles/LayoutWrapper";
import { MainContainer } from "./styles/MainContainer";
import Header from "../../components/Header/Header";


const Layout: FC = () => {
    return (
        <LayoutWrapper>
            <MainContainer>
                <Header/>
                <Outlet/>
            </MainContainer>
        </LayoutWrapper>
    );
};

export default Layout;
