import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./Pages/Layout";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile"
import Gellery from "./Components/Gallery/GalleryPage";
import About from "./Components/About/AboutPage";
import SignIn from "./Components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/gallery",
        element: <Gellery />,
      },
      {
        path: "/about",
          element: <About/>,
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;