import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { DotLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return (
          <div className="block ml-10" style={{ marginLeft: "50%", marginTop:'50px', marginBottom:'100px' }}>
            <DotLoader
              color={"green"}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            ></DotLoader>
          </div>
        );
    }
    
    if(user?.uid){
        return children
    }else{
        return <Navigate to={'/login'} state={{ from:location }} replace ></Navigate>
    }
};

export default PrivateRoute;