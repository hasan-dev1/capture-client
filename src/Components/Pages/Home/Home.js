import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HomeBanner from "./HomeBanner";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import HomeServices from "./HomeServices";
import HomePricingPlan from "./HomePricingPlan";
import PreviewsWorkSlider from "../PreviewsWorkSlider/PreviewsWorkSlider";
import useTitle from "../../Hoks/useHoks";
import useLoadData from "../../Hoks/useLoadData";
import { DotLoader } from "react-spinners";

const Home = () => {
  useTitle("Home");
  const [bannerItem, setBannerItem] = useState([]);
  const { loadedData, homeLoading } = useLoadData(
    "https://captureserver.vercel.app/services"
  );
  const [pricing, setPricing] = useState();
  const [previousWorks, setPreviousWorks] = useState([]);
  
  console.log(homeLoading);

  //load services data
  

  //load the pricing data
  useEffect(() => {
    fetch(`https://captureserver.vercel.app/pricingplan`)
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);

  //load previous work
  useEffect(() => {
    fetch(`https://captureserver.vercel.app/previouswork`)
      .then((res) => res.json())
      .then((data) => setPreviousWorks(data));
  }, []);
  return (
    <div>
      {homeLoading ? (
        <div className=" flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="w-16 h-16 bg-green-500 rounded-full animate-spin border-4 p-2 border-white border-dashed">
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
        </div>
      ) : (
        <div className="">
          {/* //Home Banner  */}
          <div>
            <HomeBanner></HomeBanner>
          </div>
          {/* //Service part */}
          <div className="text-center my-12">
            <div className="px-3">
              <h4 className="text-6xl font-bold pt-6">Services</h4>
              <p>
                We provided Some services you should check it out and if You
                need more facilities{" "}
                <Link className="text-sky-600 font-bold underline">
                  buy a plan
                </Link>
              </p>
            </div>
            <div className="w-4/5 m-auto text-center">
              <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                {loadedData.map((serviceData) => (
                  <HomeServices
                    key={serviceData._id}
                    serviceData={serviceData}
                  ></HomeServices>
                ))}
              </div>

              <div>
                <NavLink
                  to={"/servicedetails"}
                  className="btn btn-secondary px-12 py-2 rounded text-white font-bold"
                >
                  See All
                </NavLink>
              </div>
            </div>
          </div>

          {/* //pricing plan  */}
          <div className="bg-slate-200 pt-4 pb-8">
            <div className="w-4/5 m-auto">
              <div className="text-center py-6">
                <h4 className="text-6xl font-bold">Choose Your Pricing Plan</h4>
                <p className="my-3">
                  Planning is the process of thinking regarding the activities
                  required to achieve a desired goal. Planning is based on
                  foresight, the fundamental capacity
                </p>
              </div>
              <div className="my-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                {pricing?.map((plan) => (
                  <HomePricingPlan key={plan._id} plan={plan}></HomePricingPlan>
                ))}
              </div>
            </div>
          </div>

          {/* //previews Work */}
          <div className="w-4/5 m-auto">
            <div className="text-center py-6">
              <h4 className="text-6xl font-bold">
                Have a Look My Previous Work
              </h4>
              <p className="my-3">
                Planning is the process of thinking regarding the activities
                required to achieve a desired goal. Planning is based on
                foresight, the fundamental capacity
              </p>
            </div>
            <div className="py-12">
              <Splide
                options={{
                  perPage: 3,
                  perMove: 1,
                  height: "100%",
                  autoplay: true,
                  pauseOnHover: false,
                  type: "loop",
                  resetProgress: false,
                  width: "100vw",
                  rewind: true,
                  gap: "1rem",
                }}
              >
                {previousWorks.map((previousWork) => (
                  <PreviewsWorkSlider
                    key={previousWork._id}
                    previousWork={previousWork}
                  ></PreviewsWorkSlider>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
