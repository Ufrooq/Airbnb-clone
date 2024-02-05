import React, { useEffect } from 'react';
import Mycontext from "../../components/Mycontext";
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate();
    const { isLoggedIn, setisLoggedIn } = useContext(Mycontext);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    });
    return (
        <div>
            <Component />
        </div>
    );
};

export default ProtectedRoute