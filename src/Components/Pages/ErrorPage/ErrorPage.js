import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="w-1/4 mx-auto my-96 text-center">
        <span className='text-3xl'>
          Page Not Found{" "}
          <Link to={"/"} className={"text-purple-600"}>
            Back To HOME
          </Link>
        </span>
      </div>
    );
};

export default ErrorPage;