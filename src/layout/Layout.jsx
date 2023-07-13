import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Layout(){
    return <>
        <Header />
       
        <Suspense fallback={<>...</>}>
            <Outlet/>
        </Suspense>
        <Footer/>
        
    </>
}