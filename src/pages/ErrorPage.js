import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Error from "../components/Error";

const ErrorPage = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <section className="hero bg-white mb-2">
            <div>
                <Error/>
            </div>
        </section>
    );
};

export default ErrorPage;