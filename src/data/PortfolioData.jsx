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
import portfolio1 from "../assets/portfolio/portfolio1.png"
import portfolio2 from "../assets/portfolio/portfolio2.png";
import portfolio3 from "../assets/portfolio/portfolio3.png";
import portfolio4 from "../assets/portfolio/portfolio4.png";
import campusdirectory4 from "../assets/campusdirectory/campusdirectory4.png";
const PortfolioData = [
  {
    id: 1,
    title: "Synergy Connect",
    role: "Fullstack Developer",
    shortDesc: "Centralized collaborative website.",
    detailDesc:
      "Synergy Connect is a versatile collaboration tool offering users a centralized platform to communicate with friends, family, and colleagues. It enables diverse communication methods, chat rooms for shared interests, public/private chatrooms, video conferences, bi-directional whiteboards, and calendar events. Users can personalize their experience by adding friends, enhancing productivity for their organization or group. Created with a team of 6 using React, Express, Node.js, Redux, Tailwind CSS, and API's.",
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
      "GameWorld is your go-to e-commerce platform, offering a curated selection of RPG, sports, action, and fantasy games. Easily browse and choose your favorite games by genre, add them to your cart, and make secure purchases. Enjoy hassle-free shopping with options to delete items and edit quantities, ensuring a seamless experience tailored to your gaming preferences.",
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
      "Welcome to my personal website portfolio, where my story unfolds. I am a dedicated professional with a passion for coding and creative exploration. Here, you'll delve into my professional journey, exploring a diverse array of projects in my portfolio section. Beyond coding, the About Me tab offers a glimpse into my interests and hobbies, painting a holistic picture of who I am. This project was created using React, React Router, Vite, and Tailwind CSS. Join me in exploring my website to discover my work, my passions, and the essence of who I am.",
    RouteLink: {
      name: "Portfolio Website",
      link: "https://synergyconnect-front.onrender.com/",
    },
    Images: [portfolio1, portfolio2, portfolio3, portfolio4],
  },
  {
    id: 4,
    title: "Campus/Student Directory",
    role: "Fullstack Developer",
    shortDesc: "Management of students & campuses",
    detailDesc:
      "As the CTO of a campus and enrollment management company, I spearheaded the development of a RESTful web platform. This innovative system allows seamless management of students (represented as NBA players) and campuses (analogous to NBA arenas). This project focused on creating a user-friendly campus directory, utilizing a technology stack comprising Node.js, Express, JavaScript, React, and Redux. The platform facilitates smooth interactions between students and campuses, offering comprehensive insights into resources and individuals.",
    RouteLink: {
      name: "Campus/Student Directory",
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
