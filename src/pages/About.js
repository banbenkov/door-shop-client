import React, {useEffect} from 'react';
import Post from "../components/Post";
import {useLocation} from "react-router-dom";

const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Post />
    );
};

export default About;