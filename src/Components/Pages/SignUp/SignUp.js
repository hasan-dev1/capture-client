import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaKey, FaUserAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hoks/useHoks";
import { AuthContext } from "../../Others/UserContext/UserContext";
import '../Login/Login.css'


const Signup = () => {
  useTitle('SignUp')

  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate()
  const { handleCreatingUser, handleUpdateProfile } =
      useContext(AuthContext);
  const [error, setError] = useState();

  //handleloginform
  const handleSignUpform = (e) => {
    e.preventDefault();

    //input field
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    const checkbox = form.checkbox.checked;
    
    if(password === confirmpassword && checkbox){
        handleCreatingUser(email, password)
        .then(result =>{
          const user = result.user;
          setError("");
          profileInfo(name, photoURL);
          toast.success("Account Created Succesfully");

          //jwt
          fetch(`https://captureserver.vercel.app/jwt`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ currentuser: user.email }),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("jwtToken", data.token);
            })
            .catch((err) => console.error(err.message));
          navigate(from, { replace: true });
          form.reset();
        })
        .catch(err => setError(err.message))
    }else{
        setError('Password Didnt Match or checkbox unChecked')
    }

    //updateprofile
    const profileInfo = (profileName, profilePhoto)=>{
        const profile = {
            displayName:profileName,
            photoURL:profilePhoto
        }
        handleUpdateProfile(profile)
        .then(result =>{})
        .catch(err => setError(err.message))
    }

  };
  return (
    <div>
      <div className="bg-sky-600 h-[100vh] p-12">
        <div className="lg:w-1/3 mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded p-4">
          <p className="text-4xl text-center text-white font-bold my-12">
            Sign Up
          </p>
          <div className="px-8 logincss">
            <form onSubmit={handleSignUpform}>
              <div className="form-control flex flex-row border-b-4 rounded px-8  ">
                <label className="label">
                  <span className="label-text">
                    <FaUserAlt className="tex-xl text-white"></FaUserAlt>{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input w-full bg-transparent focus:outline-none text-white text-xl placeholder-white"
                />
              </div>

              <div className="form-control flex flex-row border-b-4 rounded px-8 my-8 ">
                <label className="label">
                  <span className="label-text">
                    <FaUserAlt className="tex-xl text-white"></FaUserAlt>{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input w-full bg-transparent focus:outline-none text-white text-xl placeholder-white"
                />
              </div>

              <div className="form-control flex flex-row border-b-4 rounded px-8 my-8 ">
                <label className="label">
                  <span className="label-text">
                    <FaUserAlt className="tex-xl text-white"></FaUserAlt>{" "}
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input w-full bg-transparent focus:outline-none text-white text-xl placeholder-white"
                />
              </div>

              <div className="form-control flex flex-row border-b-4 rounded px-8 my-8 ">
                <label className="label">
                  <span className="label-text">
                    <FaKey className="tex-xl text-white"></FaKey>{" "}
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input w-full bg-transparent focus:outline-none text-white text-xl placeholder-white"
                />
              </div>
              <div className="form-control flex flex-row border-b-4 rounded px-8 mb-2 ">
                <label className="label">
                  <span className="label-text">
                    <FaKey className="tex-xl text-white"></FaKey>{" "}
                  </span>
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="input w-full bg-transparent focus:outline-none text-white text-xl placeholder-white"
                />
              </div>
              {error ? (
                <div className="error">
                  <p className="bg-slate-200 p-1 rounded text-red-500 mb-6">
                    {error}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className=" text-white font-bold">
                <p>
                  {" "}
                  <input type="checkbox" name="checkbox" id="" /> Check Terms
                  and Conditions
                </p>
              </div>
              <button className="btn btn-primary w-full text-white rounded px-4 py-2 text-bold mt-8 mb-6">
                SignUp
              </button>
            </form>
            <div>
              <h2 className="text-xl text-white text-center">SignUp with...</h2>

              <div className="flex justify-between mt-6 mb-3 gap-4">
                <button className="w-full btn-primary text-white font-bold px-3 py-2 rounded flex justify-center items-center">
                  <FaGoogle className="inline mx-2"></FaGoogle>
                  Google
                </button>
                <button className="w-full btn-primary text-white font-bold px-3 py-2 rounded flex justify-center items-center">
                  <FaGithub className="inline mx-2"></FaGithub>
                  Github
                </button>
              </div>

              <h3 className="text-slate-50 text-center">
                Already have an Account?{" "}
                <Link to={"/login"} className=" font-bold ">
                  {" "}
                  Login
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
