import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import Post from "../components/Post";
import PolicyText from "../components/PolicyText";

const PrivacyPolicy = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Политика конфиденциальности - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <PolicyText/>
        </div>
    );
};

export default PrivacyPolicy;