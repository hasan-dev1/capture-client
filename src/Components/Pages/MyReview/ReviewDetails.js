import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Time from "react-time/lib/Time";
import { AuthContext } from "../../Others/UserContext/UserContext";

const ReviewDetails = ({ number, review, reminingreview }) => {
  const { setLoading } = useContext(AuthContext);
  const { _id, ratingpoint, reviewdate, desctext, postheader } = review;

  //handle deleting
  const handleDelete = (deletepostId) => {
    const agree = window.confirm(`Are You Sure To Delete ${deletepostId}`);
    if (agree) {
      setLoading(true);
      fetch(`https://captureserver.vercel.app/userownreview/${deletepostId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review Deleted Successfully");
            reminingreview(deletepostId);
            setLoading(false);
          }
        });
    } else {
      toast.error("Delete Cancel");
    }
  };
  return (
    <div className=" border-2 rounded-lg p-3 grid lg:grid-cols-12 items-center gap-2 lg:w-2/3 justify-center lg:text-start text-center md:w-1/2 mx-auto">
      <h1 className="font-bold col-span-1 lg:w-auto w-48 lg:inline text-center flex justify-center items-center">
        <span className="lg:bg-inherit bg-green-400 lg:inline flex justify-center items-center  rounded-full w-12 h-12 ">
          {number + 1}
        </span>
      </h1>
      <h4 className="col-span-3 ">
        {postheader ? postheader : "Header Not Found"}
      </h4>
      <h4 className="col-span-2 ">
        {desctext
          ? desctext.slice(0, 15) + "..."
          : "You didn't set Any Comment"}
      </h4>
      <h4 className="col-span-2">
        {ratingpoint ? `You Set ${ratingpoint} Star` : "Rating Not Set"}
      </h4>
      <h3 className="col-span-2 ">
        {reviewdate ? (
          <Time value={reviewdate} format="MM/DD/YYYY"></Time>
        ) : (
          "Date Not Set"
        )}
      </h3>

      <div className="flex justify-center items-center col-span-2 text-end">
        <NavLink
          to={`/updatereview/${_id}`}
          className="w-8 h-8 rounded-full p-2 bg-red-500 flex justify-center  items-center text-white"
        >
          <span>
            <FaPen></FaPen>
          </span>
        </NavLink>
        <button
          onClick={() => handleDelete(_id)}
          className="w-8 h-8 rounded-full p-2 bg-red-500 flex justify-center  items-center text-white mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;
