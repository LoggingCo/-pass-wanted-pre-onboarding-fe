import { useRef } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // login auth : redirect "/"
    const auth = useRef<string | null>(
        localStorage.getItem(process.env.REACT_APP_TOEKN_KEY as string),
    );

    return auth.current ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
