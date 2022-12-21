import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomeBanner = () => {
  return (
    <div className="w-4/5 mx-auto lg:h-[70vh] border-b-2">
      <div className="flex justify-between lg:flex-row flex-col  pt-8 items-center">
        <div className="lg:w-1/2 lg:pt-0 pt-12">
          <h3 className="text-4xl font-bold">Do you need a photographer?</h3>
          <p className="my-5 ">
            Here you will find expert photographers who will help you capture
            your memories beautifully
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
            autem tenetur commodi praesentium laborum porro. Magnam perferendis
            a esse veritatis non, blanditiis iure dolor, mollitia consequatur
            animi error in quod quisquam rem obcaecati totam adipisci
            repellendus deserunt hic voluptatibus provident nisi odio. Voluptas,
            eveniet quibusdam quae tempora soluta reprehenderit est.
          </p>
          <Link to={"/servicedetails"} className="btn btn-primary btn-sm rounded mt-5">
            Buy a Service
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full lg:h-[80vh]"
            src="camerasphotography.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
