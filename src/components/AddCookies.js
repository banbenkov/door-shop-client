import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import CryptoJS from "crypto-js";
import {sendGuest} from "../actions/guest";

const AddCookies = () => {
    const [cookies, setCookie] = useCookies(['userId']);
    const dispatch = useDispatch();

    //Запись в БД хэша из куков

    useEffect(() => {
        if (!cookies.hasOwnProperty('userId') || cookies.userId === '') {
            let date = new Date();
            date.toString();
            let hashUserId = CryptoJS.AES.encrypt(`${date}${Math.random()}`, 'dveri').toString();
            debugger
            const userId = hashUserId.split('/').join('');
            setCookie('userId', userId, { path: '/' });
            dispatch(sendGuest({userId: hashUserId}));
        }
    }, [])
    return (
        <div>
        </div>
    );
};

export default AddCookies;