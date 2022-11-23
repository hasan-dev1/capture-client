import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaKey, FaUserAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hoks/useHoks";
import { AuthContext } from "../../Others/UserContext/UserContext";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  console.log(location , 'loc')
  useTitle("Login");
  const { handleLogin, withGoogle } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleloginform = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    handleLogin(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Loged In Successfully");
        form.reset();

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

          const servicelocation = localStorage.getItem('location')
          if(servicelocation){
            navigate(`${servicelocation}`)
            localStorage.removeItem('location')
          }else{
            navigate(from, { replace: true });
          }
      })
      .catch((err) => setError(err.message));
  };

  const googleprovider = new GoogleAuthProvider();
  const handleGoogleSubmit = () => {
    withGoogle(googleprovider).then((result) => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="logincss bg-sky-600 h-[100vh] p-12">
        <div className="lg:w-1/3 mx-auto bg-gradient-to-b from-cyan-500 to-blue-500 rounded p-4">
          <p className="text-4xl text-center text-white font-bold my-12">
            Login
          </p>
          <div className="px-8">
            <form onSubmit={handleloginform}>
              <div className="form-control flex flex-row border-b-4 rounded px-8  ">
                <label className="label">
                  <span className="label-text">
                    <FaUserAlt className="tex-xl text-white"></FaUserAlt>{" "}
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="User Name or Email"
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
              {error ? (
                <div className="error">
                  <p className="bg-slate-200 p-1 rounded text-red-500 mb-6">
                    {error}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-between text-white font-bold">
                <p>
                  {" "}
                  <input type="checkbox" name="checkbox" id="" /> Check Terms
                  and Conditions
                </p>
                <p>Forget Your Password?</p>
              </div>
              <button className="btn btn-primary rounded text-white w-full px-4 py-2 text-bold mt-16 mb-12">
                Login
              </button>
            </form>
            <div>
              <h2 className="text-xl text-white text-center">Login with...</h2>

              <div className="flex justify-between mt-6 mb-3 gap-4 ">
                <button
                  onClick={handleGoogleSubmit}
                  className="w-full btn-primary text-white font-bold px-3 py-2 rounded flex justify-center items-center "
                >
                  <FaGoogle className="inline mx-2"></FaGoogle>
                  Google
                </button>
                <button className="w-full btn-primary text-white font-bold px-3 py-2 rounded flex justify-center items-center ">
                  <FaGithub className="inline mx-2"></FaGithub>
                  Github
                </button>
              </div>

              <h3 className="text-slate-50 text-center">
                New in Volunteer?{" "}
                <Link to={"/signup"} className=" font-bold ">
                  Create Account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
