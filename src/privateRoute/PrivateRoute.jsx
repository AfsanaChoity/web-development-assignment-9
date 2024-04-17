import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if ( loading) {
        return <div className="text-center mt-20"><span className=" loading loading-spinner loading-lg"></span></div>
    }
    if (!user){
        return <Navigate to='/login' state={location?.pathname || '//'}></Navigate>
    }
     
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;