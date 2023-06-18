import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Error from "../components/Error";
import Breadcrumbs from "../components/Breadcrumbs";

const ErrorPage = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="container mb-1 mt-1">
            <div className="bg-white p-1">
                <Error/>
            </div>
        </div>
    );
};

export default ErrorPage;