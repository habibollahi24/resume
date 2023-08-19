import tapsiImage from "../assets/images/tapsi.jpg";
import storeRomeImage from "../assets/images/storerome.jpg";
import userTable from "../assets/images/user-table.jpg";
import shipnowImage from "../assets/images/shipnow-todo.jpg";
import dnjImage from "../assets/images/dnj.jpg";
import stickyImage from "../assets/images/stickynote.jpg";
import dosmaImage from "../assets/images/dosma.jpg";
import contactListImahe from "../assets/images/contactlist.jpg";
import calcImage from "../assets/images/calc.jpg";
import weatherappImage from "../assets/images/weatherapp.jpg";
import oopShopingImage from "../assets/images/oop-shop.jpg";
import signupImage from "../assets/images/signup.jpg";
import reactShopy from "../assets/images/react-shopy.jpg";
import landingPageImage from "../assets/images/landingpage.jpg";
import formikFormImage from "../assets/images/formik.jpg";
import pizzaRaminImage from "../assets/images/pizzaRamin.jpg";
import todoMongo from "../assets/images/todo-mongo.jpg";

const trains = [
  {
    id: 17,
    title: "Todo DB",
    screenshot: todoMongo,
    slug: "todo-db",
    descriptions: "Nextjs , Typescript , MongoDB , Nodejs . Tailwind",
    isCompleted: true,
    date: "the 10th month",
    demo: "https://todo-3kpgj3311-habibollahi24.vercel.app/",
    github: "https://github.com/habibollahi24/todo-mdb",
    technology: ["Nextjs", "Typescript", "Tailwind", "MongoDB", "Nodejs"],
  },
  {
    id: 16,
    title: "Pizza Ramin",
    screenshot: pizzaRaminImage,
    slug: "pizza-ramin",
    descriptions: "the latest project with nextjs",
    isCompleted: false,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/pizza-ramin",
    technology: ["Nextjs", "Redux-Toolkit", "Tailwind", "SWR"],
  },
  {
    id: 15,
    title: "Shipnow Todo",
    screenshot: shipnowImage,
    slug: "shipnow-todo",
    descriptions: "first project with typescript and redux-toolkit and Next",
    isCompleted: true,
    date: "the 10th month",
    demo: "https://shipnowtodo.vercel.app",
    github: "https://github.com/habibollahi24/TapsiDemo",
    technology: ["Typescript", "Next", "Redux-toolkit", "Material-ui"],
  },
  {
    id: 14,
    title: "Dosma",
    screenshot: dosmaImage,
    slug: "dosma",
    descriptions: "Part of a real project / Dosma application",
    isCompleted: true,
    date: "the 10th month",
    demo: "https://dosma.vercel.app",
    github: "https://github.com/habibollahi24/dosma",
    technology: ["react", "Tailwind"],
  },
  {
    id: 13,
    title: "Comment App",
    screenshot: dnjImage,
    slug: "comment-app",
    descriptions: "linkedin comment by fake backend in json-server",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/dnj-challenge",
    technology: ["React", "SASS", "Typescript", "json-server"],
  },

  {
    id: 12,
    title: "Store Room",
    screenshot: storeRomeImage,
    slug: "store-room",
    descriptions: "context api with useReducer",
    isCompleted: true,
    date: "the 8th month",
    demo: "https://storerome.vercel.app",
    github: "https://github.com/habibollahi24/TapsiDemo",
    technology: ["React", "Tailwind", "Context Api"],
  },
  {
    id: 11,
    title: "User Table",
    screenshot: userTable,
    slug: "user-table",
    descriptions: "work with json-placeholder and pagination and filter data",
    isCompleted: true,
    date: "the 10th month",
    demo: "https://table-content.vercel.app",
    github: "https://github.com/habibollahi24/TapsiDemo",
    technology: ["React", "Tailwind"],
  },

  {
    id: 10,
    title: "Sticky Note",
    screenshot: stickyImage,
    slug: "sticky-note",
    descriptions: "with pure javascript / clean code / functional paradigm ",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/sticky-note-app",
    technology: ["javascript", "functional paradigm", "localStorage"],
  },

  {
    id: 9,
    title: "Contact List",
    screenshot: contactListImahe,
    slug: "contact-list",
    descriptions: "get data and post to fake backend with json-server",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/contact-list-",
    technology: ["react", "Tailwind", "json-server"],
  },
  {
    id: 8,
    title: "Landing Page",
    screenshot: landingPageImage,
    slug: "landing-page",
    descriptions: "first project with Tailwind.",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/firt-challenge",
    technology: ["React", "Tailwind"],
  },
  {
    id: 7,
    title: "Formik & Yup",
    screenshot: formikFormImage,
    slug: "formik-yup",
    descriptions: "a form with react and popular library",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/formik",
    technology: ["React", "Formik", "Yup"],
  },
  {
    id: 6,
    title: "SignUp",
    screenshot: signupImage,
    slug: "sign-up",
    descriptions: " useEffect and state and props train.",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/signUp-form",
    technology: ["React", "CSS"],
  },
  {
    id: 5,
    title: "React Shopy",
    screenshot: reactShopy,
    slug: "react-shopy",
    descriptions: "first project with react.",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/shopping-with-react",
    technology: ["React", "CSS", "context-api"],
  },

  {
    id: 4,
    title: "Weather App",
    screenshot: weatherappImage,
    slug: "weather-app",
    descriptions:
      "Implement by HTML, CSS and Javascript. first api project . get and post request",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/weather-app",
    technology: ["HTML", "CSS", "javascript", "Api"],
  },
  {
    id: 3,
    title: "Shopping OOP",
    screenshot: oopShopingImage,
    slug: "shopping-oop",
    descriptions:
      "Implement by HTML, CSS and Javascript. object oriented programming.",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/shopping-cart",
    technology: ["HTML", "CSS", "javascript", "oop"],
  },

  {
    id: 2,
    title: "Tapsi Demo",
    screenshot: tapsiImage,
    slug: "tapsi-demo",
    descriptions:
      "Implement by HTML, CSS and Javascript. This project has been implemented in a responsive design without freamwork.",
    isCompleted: true,
    date: "the 4th month",
    demo: "https://tapsi-demo-virid.vercel.app",
    github: "https://github.com/habibollahi24/TapsiDemo",
    technology: ["HTML", "CSS", "javascript"],
  },
  {
    id: 1,
    title: "Calculator",
    screenshot: calcImage,
    slug: "calculator",
    descriptions: "Implement by HTML, CSS and Javascript. First real project.",
    isCompleted: true,
    date: "the 10th month",
    github: "https://github.com/habibollahi24/calculator",
    technology: ["HTML", "CSS", "javascript"],
  },
];

export default trains;
