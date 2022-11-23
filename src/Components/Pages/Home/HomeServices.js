import React, { useState } from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { PhotoView } from "react-photo-view";
import { NavLink } from 'react-router-dom';

const HomeServices = ({ serviceData }) => {
    const {img, name, descryption, rating, price, _id} = serviceData;


    //handle see more action

    const row = []
    for(let i=0; i<=rating; i++){
      row.push(<FaStar className='inline text-amber-300' />)
    }
  return (
    <div className="card card-compact rounded bg-base-100 shadow-xl">
      <figure>
        <PhotoView src={img}>
          <img src={img} className="w-full h-96" alt="serviceItem" />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-start font-bold">Price : ${price}</p>
        <p className="text-start">
          {descryption.slice(0, 100)+'....'}{" "}
        </p>
        <div className="card-actions lg:justify-end md:justify-end justify-center lg:my-0 md:my-0 my-6">
          <NavLink to={`/servicedetaile/${_id}`} className="bg-sky-600 px-4 py-2 rounded text-white text-xl font-bold lg:w-auto md:w-auto w-full flex items-center lg:justify-between md:justify-between justify-center">
            {" "}
            <FaArrowRight className="inline mx-3"></FaArrowRight>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;