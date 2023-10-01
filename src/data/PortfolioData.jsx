import synergy1 from "../assets/synergy/synergy1.png";
import synergy2 from "../assets/synergy/synergy2.png";
import synergy3 from "../assets/synergy/synergy3.png";
import synergy4 from "../assets/synergy/synergy4.png";
import gameworld1 from "../assets/gameworld/gameworld1.png";
import gameworld2 from "../assets/gameworld/gameworld2.png";
import gameworld3 from "../assets/gameworld/gameworld3.png";
import gameworld4 from "../assets/gameworld/gameworld4.png";
import campusdirectory1 from "../assets/campusdirectory/campusdirectory1.png";
import campusdirectory2 from "../assets/campusdirectory/campusdirectory2.png";
import campusdirectory3 from "../assets/campusdirectory/campusdirectory3.png";
import campusdirectory4 from "../assets/campusdirectory/campusdirectory4.png";
import example1 from "../assets/example1.jpeg"
import example2 from "../assets/example2.jpeg";
import example3 from "../assets/example3.jpeg";
const PortfolioData = [
  {
    id: 1,
    title: "Synergy Connect",
    role: "Fullstack Developer",
    shortDesc: "Centralized collaborative website.",
    detailDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    RouteLink: {
      name: "Synergy Connect Trailer",
      link: "https://www.youtube.com/watch?v=9Va7-mlmslE",
    },
    Images: [synergy1, synergy2, synergy3, synergy4],
  },
  {
    id: 2,
    title: "Game World",
    role: "Fullstack Developer",
    shortDesc: "E-commerce website focused on selling games",
    detailDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    RouteLink: {
      name: "Deployed Website",
      link: "https://game-world-qei9.onrender.com/",
    },
    Images: [gameworld1, gameworld2, gameworld3, gameworld4],
  },
  {
    id: 3,
    title: "Portfolio Website",
    role: "Front-end Devoloper",
    shortDesc: "My Portfolio Website",
    detailDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    RouteLink: {
      name: "Portfolio Website",
      link: "https://synergyconnect-front.onrender.com/",
    },
    Images: [example1, example2, example3, example1],
  },
  {
    id: 4,
    title: "Campus/Athlete Directory",
    role: "Fullstack Developer",
    shortDesc: "Web platform allowing management of students & campuses",
    detailDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    RouteLink: {
      name: "Campus/Athlete Directory",
      link: "https://github.com/Obamg3017/2303-FSA-ET-WEB-FT-SF-JPFP",
    },
    Images: [
      campusdirectory1,
      campusdirectory2,
      campusdirectory3,
      campusdirectory4,
    ],
  },
];
export default PortfolioData;
