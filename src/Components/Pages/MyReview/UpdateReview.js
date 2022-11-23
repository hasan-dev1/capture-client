import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const update = useLoaderData();
  const navigate = useNavigate();

  //update form
  const handleupdateForm = (e) => {
    e.preventDefault();
    const form = e.target;

    //updateformvalue
    const userimage = form.userimage.value;
    const websitename = form.websitename.value;
    const descryption = form.descryption.value;
    const ratingnumber = form.ratingnumber.value;

    const updatedinfo = { userimage, websitename, descryption, ratingnumber };

    fetch(`https://captureserver.vercel.app/updatereview/${update._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review Updated Successfully");
        navigate("/myreview");
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <div>
      <div className="w-1/3 mx-auto ">
        <h3 className="text-center font-bold text-4xl my-5">
          Update Your Review
        </h3>
        <div className="my-6">
          <form onSubmit={handleupdateForm}>
            <div className="my-4">
              <p className="italic text-bold ml-1 mb-2">
                <span>
                  UserName - <sup>Read Only</sup>{" "}
                </span>
              </p>
              <input
                readOnly
                defaultValue={update?.username}
                className="input input-bordered w-full rounded"
                type="text"
              />
            </div>
            <div className="my-4">
              <p className="italic text-bold ml-1 mb-2">
                User Email - <sup>Read Only</sup>
              </p>
              <input
                readOnly
                defaultValue={update?.useremail}
                className="input input-bordered w-full rounded"
                type="text"
              />
            </div>
            <div className="my-4">
              <p className="italic text-bold ml-1 mb-2">
                Update Your Image Link
              </p>
              <input
                name="userimage"
                defaultValue={update?.userimg}
                className="input input-bordered w-full rounded"
                type="text"
              />
            </div>
            <div className="my-4">
              <p className="italic text-bold ml-1 mb-2">Update Website Link</p>
              <input
                name="websitename"
                defaultValue={update?.userwebsite}
                className="input input-bordered w-full rounded"
                type="text"
              />
            </div>
            <div className="my-4">
              <p className="italic text-bold ml-1 mb-2">Update Descryption</p>
              <textarea
                name="descryption"
                defaultValue={update?.desctext}
                className="w-full p-3"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="my-4">
              <p className="text-xl ml-1 mb-2">Update Rating</p>
              <input
                name="ratingnumber"
                defaultValue={update?.ratingpoint}
                className="input input-bordered w-full rounded"
                type="number"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 mx-auto bg-green-500 px-4 py-2 rounded block font-bold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
