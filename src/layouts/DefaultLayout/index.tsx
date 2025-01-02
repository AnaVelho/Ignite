import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayountContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayountContainer>
            <Header />
            <Outlet />
        </LayountContainer>
    )
}