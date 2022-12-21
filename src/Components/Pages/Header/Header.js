import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-slate-100 shadow-md fixed w-full py-3" style={{ zIndex: 200 }}>
      <div className="flex justify-between w-4/5 mx-auto">
        <div className="flex items-center font-bold text-xl">Capture</div>
        <div>
          <ul className="flex justify-between">
            <li>
              <NavLink to={"/"} className="mx-3 my-2 font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/servicedetails"} className="mx-3 my-2 font-bold">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to={"/addservice"} className="mx-3 my-2 font-bold">
                Add Service
              </NavLink>
            </li>
            <li>
              <NavLink to={"/allblogs"} className="mx-3 my-2 font-bold">
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
