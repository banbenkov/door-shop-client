import React, {useEffect} from 'react';
import Post from "../components/Post";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

const About = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>О нас - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные ламинированные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Post/>
        </div>
    );
};

export default About;