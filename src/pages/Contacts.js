import React, {useEffect} from 'react';
import Info from "../components/Info";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

const Contacts = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Контакты - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные ламинированные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Info/>
        </div>

    );
};

export default Contacts;