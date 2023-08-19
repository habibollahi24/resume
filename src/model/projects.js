import erythrogenImage from "../assets/images/erythrogen.jpg";
import paanizImage from "../assets/images/paaniz.jpg";

const projects = [
   {
      id: 1,
      title: "Erythrogen",
      screenshot: erythrogenImage,
      slug: "erythrogen",
      descriptions: "first real project by Byte company",
      isCompleted: true,
      date: "the 4th month",
      demo: "https://erythrogen.com/",
      github: "",
      technology: ["HTML", "CSS", "javascript", "bootstrap"],
   },
   {
      id: 2,
      title: "Paaniz",
      screenshot: paanizImage,
      slug: "paaniz",
      descriptions: "create a portfilio for client",
      isCompleted: true,
      date: "the 8th month",
      demo: "https://paaniz.vercel.app/",
      github: "",
      technology: ["HTML", "CSS", "javascript"],
   },
];

export default projects;
