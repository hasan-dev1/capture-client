import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hoks/useHoks";

const AddedingNewService = () => {
  useTitle("Add Service");
  const navigate = useNavigate()


  //add service
  const handleServiceAddeding = (e) => {
    e.preventDefault();
    const form = e.target;

    //inputField
    const img = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const descryption = form.descryption.value;
    const addedDate = new Date();

    const serviceItem = { img, name, price, descryption, addedDate };

    if (img !== "" && name !== "" && price !== "" && descryption !== "") {
      fetch(`https://captureserver.vercel.app/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceItem),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Add A Service Succesfully");
          form.reset();
          navigate('/')
        });
    } else {
      toast.error("Please Complete All Fields");
    }
  };
  return (
    <div className="mb-4">
      <div className="w-2/3 mx-auto   p-5">
        <div className="bg-slate-300 mt-12 py-4 rounded">
          <h2 className="text-4xl text-center mt-12 font-bold">
            Add A Service
          </h2>
          <form onSubmit={handleServiceAddeding}>
            <div className="grid lg:grid-cols-2 grid-cols-1 px-6">
              <div>
                <div className="mb-4 mt-1">
                  <span className="font-bold">Image</span>
                  <input
                    className="input input-bordered w-full rounded "
                    placeholder="Add Servide Image*"
                    name="image"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <span className="font-bold">Name</span>
                  <input
                    className="input input-bordered w-full rounded "
                    placeholder="Add Service Header*"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <span className="font-bold">Price</span>
                  <input
                    className="input input-bordered w-full rounded "
                    placeholder="Add Price*"
                    name="price"
                    type="text"
                  />
                </div>
              </div>
              <div className=" mx-3">
                <span>Descryption</span>
                <textarea
                  className="w-full focus:outline-none border-2 p-3 rounded"
                  name="descryption"
                  placeholder="Write Your Service Descryption ...."
                  cols="30"
                  rows="9"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success text-white text-bold block rounded w-1/2 my-5 mx-auto "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddedingNewService;
