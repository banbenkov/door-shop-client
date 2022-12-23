import React from 'react';
import Gallery from "../components/Gallery";
import {Helmet} from "react-helmet";

const Portfolio = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Портфолио - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Gallery />
        </div>
    );
};

export default Portfolio;