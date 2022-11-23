import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import AllBlogs from "../../Pages/AllBlogs/AllBlogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import AddedingNewService from "../../Pages/Service/AddedingNewService";
import Service from "../../Pages/Service/Service";
import ServicePage from "../../Pages/Service/ServicePage";
import Signup from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addservice",
        element: <AddedingNewService></AddedingNewService>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicedetails",
        loader: () => fetch(`https://captureserver.vercel.app/allservices`),
        element: (<Service></Service>),
      },
      {
        path: "/servicedetaile/:id",
        loader: async ({ params }) =>
          fetch(`https://captureserver.vercel.app/allservices/${params.id}`),
        element: (<ServicePage></ServicePage>),
      },
      {
        path: "/updatereview/:reviewId",
        loader: ({ params }) => {
          return fetch(`https://captureserver.vercel.app/updatereview/${params.reviewId}`
          );
        },
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
