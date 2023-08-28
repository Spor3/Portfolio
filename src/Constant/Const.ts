import Html from "../Asset/html-logo.png";
import Css from "../Asset/css-logo.png";
import Js from "../Asset/javaScript-logo.png";
import Ts from "../Asset/typescript-logo.png";
import React from "../Asset/react-logo.png";
import Net from "../Asset/net-logo.png";
import Scss from "../Asset/scss-logo.png";
import Bootstrap from "../Asset/bootstrap-logo.png";
import Chakra from "../Asset/chkraui-logo.png";
import Firebase from "../Asset/firebase-logo.png";
import SqlServer from "../Asset/sqlserver-logo.png";
import Linux from "../Asset/linux-logo.png";
import Windows from "../Asset/windowsserver-logo.png";
import Drinks from "../Asset/drinks.png";
import AiTool from "../Asset/aitool.png";
import TvMaze from "../Asset/tvmaze.png";
import { Variants } from "framer-motion";
import { Timestamp } from "firebase/firestore";

export const FEtechnologies = 
[
    {
        name: "REACT",
        logo: React
    },
    {
        name: "TS",
        logo: Ts
    },
    {
        name:"CHAKRAUI",
        logo: Chakra
    },
    {
        name: "HTML",
        logo: Html
    },
    {
        name:"CSS",
        logo: Css
    },
    {
        name:"SCSS",
        logo: Scss
    },
    {
        name:"JS",
        logo:Js
    },
    {
        name:"BOOTSTRAP",
        logo: Bootstrap
    }
]

export const BEtechnologies = 
[
    {
        name: "NET",
        logo:Net
    },
    {
        name:"SQLSERVER",
        logo: SqlServer
    },
    {
        name:"FIREBASE",
        logo: Firebase
    },
    {
        name:"Linux",
        logo: Linux
    },
    {
        name: "WindowServer",
        logo: Windows
    }
]


export const Projects = 
[
    {
        title: "AiTool",
        description: "WebApplication with multiple artificial intelligence tools like OpenAI, Tensorflow...",
        image: AiTool,
        technologies: [".NET","React","ChakraUI","AWS"],
        schoolProject:false,
        link:"http://www.aitoolapi.pt",
        externalLink:null
    },
    {
        title: "CineSearcHub",
        description: "Progressive WebApp for the search and management of movies and TV series, realized thanks to the use of",
        image: TvMaze,
        technologies: ["React","Bootstrap","SCSS","Firebase"],
        schoolProject:true,
        link:"https://react-tv-maze-api.web.app/",
        externalLink:"https://www.tvmaze.com/api"
    },
    {
        title: "DrinkQuest",
        description: "WebApplication for the search and creation of drinks, realized thanks to the use of",
        image: Drinks,
        technologies: ["Angular","Bootstrap","SCSS","Firebase"],
        schoolProject:true,
        link:"https://angular-330b6.web.app/home",
        externalLink: "https://www.thecocktaildb.com/api.php"
    }
]

export const textVariantsY: Variants = {
    offscreen: {
      y: 150,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8
      }
    }
  };
  
export const textVariantsX: Variants = {
      offscreen: {
        x: -150,
        opacity: 0
      },
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.8
        }
      }
    };

export interface Message {
    from:string;
    subject:string;
    message:string;
    dateTime:Timestamp;
}