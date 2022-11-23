import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import useTitle from "../../Hoks/useHoks";
import { AuthContext } from "../../Others/UserContext/UserContext";
import ReviewDetails from "./ReviewDetails";

const MyReview = () => {
  useTitle("My Review");
  const { user, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(`https://captureserver.vercel.app/userownreview/${user?.email}`, {
      headers: {
        authdata: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error(err.message));
  }, [user?.email]);

  const reminingreview = (reviewid) => {
    const remining = reviews.filter((review) => review._id !== reviewid);
    setLoading(false);
    setReviews(remining);
  };
  return (
    <div className="w-4/5 mx-auto mt-12 mb-[30%]">
      <div className="grid grid-cols-1 gap-4">
        {reviews?.length > 0 ? (
          reviews?.map((review, idx) => (
            <ReviewDetails
              key={idx}
              number={idx}
              review={review}
              reminingreview={reminingreview}
            ></ReviewDetails>
          ))
        ) : reviews?.length === 0 ? (
          <span className="text-6xl font-semibold mt-[10%] block text-center">
            You have no reviews
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyReview;
