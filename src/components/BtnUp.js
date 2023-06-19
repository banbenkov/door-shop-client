import React, {useEffect} from 'react';

const BtnUp = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(handleUpButton, 8)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div onClick={handleUpButton} className={scroll > 400 ? 'btn-up' : 'btn-up_hide'}>

        </div>
    );
};

export default BtnUp;