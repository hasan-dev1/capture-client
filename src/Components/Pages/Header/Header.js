import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Others/UserContext/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

    const headerItem = <div className='text-center'>
        <NavLink to={'/'} key={1} className={'btn bg-sky-500 border-0 text-white w-32 font-bold mx-2 my-1 px-4 rounded'}>Home</NavLink>
        <NavLink to={'/servicedetails'} key={2} className={'btn bg-sky-500 border-0 text-white w-32 font-bold mx-2 my-1 px-4 rounded'}>Services</NavLink>
        { user?.uid ? <NavLink to={'/addservice'} key={4} className={'btn bg-sky-500 border-0 text-white w-32 font-bold mx-2 my-1 px-4 rounded'}>Add Service</NavLink> : ''}
        <NavLink to={'/allblogs'} key={5} className={'btn bg-sky-500 border-0 text-white w-32 font-bold mx-2 my-1 px-4 rounded'}>Blogs</NavLink>
    </div>

    const handleLogOut = ()=>{
      logOut()
    }
    return (
      <div className="bg-base-300 text-white font-bold">
        <div className="navbar w-4/5 m-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn bg-sky-500 rounded border-sky-400 text-white font-bold mx-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48"
              >
                {headerItem}
              </ul>
            </div>
            <div className="flex bg-sky-500 px-4 rounded items-center lg:inline-flex hidden">
              <span>
                <img
                  className="mx-2 "
                  src="favicon.ico"
                  style={{ height: "50px" }}
                  alt=""
                />
              </span>
              <span className="text-2xl mb-1 hidden lg:block">Captured</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-center">
              {headerItem}
            </ul>
          </div>
          <div className="navbar-end">
            {user?.uid ? (
              <>
                <NavLink
                  onClick={handleLogOut}
                  className="btn bg-sky-500 border-0 rounded font-bold text-white mr-1 lg:inline-flex hidden "
                >
                  LogOut
                </NavLink>

                <NavLink
                  to={`/myreview`}
                  className="btn bg-sky-500 border-0 rounded font-bold text-white lg:inline-flex hidden"
                >
                  My Review
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/login"}
                  className="btn bg-sky-500 border-0 rounded font-bold text-white mr-1"
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/signup"}
                  className="btn bg-sky-500 border-0 rounded font-bold text-white"
                >
                  SignUp
                </NavLink>
              </>
            )}
            {user?.uid ? (
              <span>
                <img
                  className="h-12 w-12 rounded-full ml-2 border border-sky-300"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt=""
                />
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;