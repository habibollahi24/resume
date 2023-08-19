import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import Projects from "../pages/projects";
import SingleProject from "../pages/singleProject";
import SingleTrain from "../pages/singleTrain";
import TrainPage from "../pages/trains";
import AboutMe from "./../pages/aboutMe";
import Skils from "./../pages/skils";
import References from "./../pages/references";
import Contact from "./../pages/contact";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/train",
      element: <TrainPage />,
   },
   {
      path: "/about-me",
      element: <AboutMe />,
   },
   {
      path: "/train/:slug",
      element: <SingleTrain />,
   },
   {
      path: "/projects",
      element: <Projects />,
   },
   {
      path: "/projects/:slug",
      element: <SingleProject />,
   },
   {
      path: "/skils",
      element: <Skils />,
   },
   {
      path: "/references",
      element: <References />,
   },
   {
      path: "/contact",
      element: <Contact />,
   },
]);

export default router;
