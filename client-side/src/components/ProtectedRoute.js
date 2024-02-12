import React, { useContext, useEffect } from 'react';
import Mycontext from "../components/Mycontext";
import { useNavigate } from 'react-router-dom';
import IsLoggedIn from './IsLoggedIn';

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate();
    const { isLoggedIn, setisLoggedIn } = useContext(Mycontext);

    async function fetchData() {
        const response = await IsLoggedIn();
        console.log(response);
        setisLoggedIn(response);
        if (response.ok) {
            navigate("/");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (isLoggedIn == false) {
            navigate("/login");
        }
    });
    return (
        <>
            <Component />
        </>
    );
};

export default ProtectedRoute