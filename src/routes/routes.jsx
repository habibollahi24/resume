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
    path: "/resume",
    element: <HomePage />,
  },
  {
    path: "/resume/train",
    element: <TrainPage />,
  },
  {
    path: "/resume/about-me",
    element: <AboutMe />,
  },
  {
    path: "/resume/train/:slug",
    element: <SingleTrain />,
  },
  {
    path: "/resume/projects",
    element: <Projects />,
  },
  {
    path: "/resume/projects/:slug",
    element: <SingleProject />,
  },
  {
    path: "/resume/skils",
    element: <Skils />,
  },
  {
    path: "/resume/references",
    element: <References />,
  },
  {
    path: "/resume/contact",
    element: <Contact />,
  },
]);

export default router;
