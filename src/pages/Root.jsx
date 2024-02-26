import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorBoundary from "./ErrorBoundary";

export default function RootLayout() {
    return(
        <ErrorBoundary>
            <Header/>
            <Outlet />
            <Footer/>
        </ErrorBoundary>
    )

}