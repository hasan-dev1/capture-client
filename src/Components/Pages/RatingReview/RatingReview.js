import React from "react";
import { FaStar } from "react-icons/fa";
import Time from "react-time/lib/Time";

const RatingReview = ({ userRating }) => {
  const {
    username,
    userimg,
    ratingpoint,
    reviewdate,
    userwebsite,
    desctext,
  } = userRating;

  const row = [];
  for (let i = 1; i <= ratingpoint; i++) {
    row.push(<FaStar key={i} className="inline text-amber-300 mb-1" />);
  }
  return (
    <div className="userPreview grid grid-cols-12 bg-slate-200 my-3 rounded p-2">
      <div className="col-span-1 flex justify-center">
        <img
          className="w-16 h-16 rounded-full m-4 border bottom-1 border-slate-400"
          src={
            userimg
              ? userimg
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="img not found"
        />
      </div>
      <div className="text-xl col-span-10 p-4 ">
        <h3 className="bg-slate-400 p-1 rounded mb-2">
          {username ? username : "New User"} - {row} -{" "}
          <Time value={reviewdate} format="YYYY/DD/MM"></Time> - {userwebsite}
        </h3>
        <h3>{desctext}</h3>
      </div>
    </div>
  );
};

export default RatingReview;
