import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivetRoute from "../Provider/PrivetRoute";
import NewsDetails from "../Pages/NewsDetails";
import Loading from "../Pages/Loading";

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: HomeLayouts,
      children: [
        {
          path: '',
          Component: Home
        },
        {
          path: '/category/:id',
          Component: CategoryNews,
          loader: ()=> fetch('/news.json'),
          hydrateFallbackElement: <Loading/>
        }
      ]
    },
    {
      path:'/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          Component: Login
        },
        {
          path: '/auth/register',
          Component: Register
        }
      ]
    },
    {
      path: '/news-details/:id',
      element: (<PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>),
      loader: () => fetch('/news.json'),
      hydrateFallbackElement: <Loading/>
    },
    {
      path: '/*',
      element: <h2>Error404</h2>
    }
  ]
);


export default router;