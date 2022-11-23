import React from "react";
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import RatingReview from "../RatingReview/RatingReview";
import { useContext } from "react";
import { AuthContext } from "../../Others/UserContext/UserContext";
import toast from "react-hot-toast";

const ServicePage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const { _id, img, name, price, rating, descryption } = useLoaderData();
  const [userRatings, setUserRatings] = useState([]);
  const [slectvalue, setslectvalue] = useState(0);

  //rating preview
  const row = [];
  for (let i = 0; i <= rating; i++) {
    row.push(<FaStar className="inline text-amber-300" />);
  }
  //https://captureserver.vercel.app
  //load reviewed data
  useEffect(() => {
    fetch(`https://captureserver.vercel.app/allreviewduserdata/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRatings(data);
      });
  }, [userRatings, _id]);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();


    if(!user){
      toast.error('You Need To Login First')
      localStorage.setItem('location',location.pathname)
      navigate("/login")
      return
    }


    const form = e.target;

    const reviewedpostid = _id;
    const desctext = form.desctext.value;
    const username = form.name.value;
    const userimg = user?.photoURL;
    const useremail = form.email.value;
    const userwebsite = form.website.value;
    const ratingpoint = slectvalue || 1;
    const reviewdate = new Date();
    const postheader = name;

    const ratingInfo = {
      reviewedpostid,
      desctext,
      username,
      useremail,
      userimg,
      userwebsite,
      ratingpoint,
      reviewdate,
      postheader,
    };

    fetch("https://captureserver.vercel.app/allreviewduserdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setslectvalue(0);
        toast.success("Review Added Successfully");
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="card card-compact rounded bg-base-100 shadow-xl w-4/5 mx-auto my-3 ">
      <figure>
        <PhotoView src={img}>
          <img
            src={img}
            style={{ height: "80vh" }}
            className="w-full"
            alt="Shoes"
          />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-6xl text-4xl my-6 px-8">{name}</h2>
        <p className="text-start text-2xl font-bold px-8">Price : ${price}</p>
        <p className="text-xl my-3 px-8">{descryption}</p>
      </div>

      {/* //rating section */}
      <div>
        <div>
          <div className="lg:px-8 md:px-8 px-12 py-4 flex justify-between items-center bg-slate-400 rounded mx-12">
            <h3 className="text-xl text-white">
              Reviewed by {userRatings.length} users
            </h3>
          </div>

          <div className="mx-12">
            {userRatings?.length > 0 ? (
              userRatings.map((userRating, idx) => (
                <RatingReview
                key={idx}
                userRating={userRating}
                ></RatingReview>
              ))
            ) : (
              <span className="text-2xl font-bold my-3 block text-center">
                No Review Available
              </span>
            )}
          </div>
        </div>
      </div>

      {/* //submit rating  */}
      <div>
        <div className="mx-14 mt-12">
          <h3 className="text-3xl">Leave feedback about this</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 my-4 mx-12 bg-slate-300 p-4 rounded">
            <div>
              <textarea
                className="w-full p-3"
                placeholder="Write Your Valuable Text ....."
                name="desctext"
                cols="30"
                rows="14"
              ></textarea>
            </div>
            <div>
              Name :
              <input
                placeholder="Name*"
                name="name"
                readOnly
                defaultValue={user?.displayName || "AnonnyMouse"}
                className="input input-bordered w-full rounded mb-10"
                type="text"
              />
              Email :
              <input
                placeholder="Email*"
                name="email"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full rounded mb-10"
                type="email"
              />
              Website :
              <input
                placeholder="Website"
                name="website"
                className="input input-bordered w-full rounded mb-10"
                type="text"
              />
              <div>
                <span className="text-xl font-bold">
                  Review{" "}
                  <select
                    name="select"
                    required
                    className="px-4 bg-slate-400 rounded"
                    onChange={(e) => setslectvalue(e.target.value)}
                  >
                    <option key={1} value="1">
                      1
                    </option>
                    <option key={2} value="2">
                      2
                    </option>
                    <option key={3} value="3">
                      3
                    </option>
                    <option key={4} value="4">
                      4
                    </option>
                    <option key={5} value="5">
                      5
                    </option>
                  </select>
                  <span> / 5</span>
                </span>
              </div>
            </div>
          </div>
          <div className="px-12 text-center">
            <button
              type="submit"
              className="px-12 my-12 py-2 w-1/2 rounded font-bold text-white bg-green-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicePage;
