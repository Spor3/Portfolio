import Html from "../Asset/html-logo.webp";
import Css from "../Asset/css-logo.webp";
import Js from "../Asset/javaScript-logo.webp";
import Ts from "../Asset/typescript-logo.webp";
import React from "../Asset/react-logo.webp";
import Net from "../Asset/net-logo.webp";
import Scss from "../Asset/scss-logo.webp";
import Bootstrap from "../Asset/bootstrap-logo.webp";
import Chakra from "../Asset/chkraui-logo.webp";
import Firebase from "../Asset/firebase-logo.webp";
import SqlServer from "../Asset/sqlserver-logo.webp";
import Linux from "../Asset/linux-logo.webp";
import Windows from "../Asset/windowsserver-logo.webp";
import Drinks from "../Asset/drinks.webp";
import AiTool from "../Asset/aitool.webp";
import TvMaze from "../Asset/tvmaze.webp";
import { Variants } from "framer-motion";

export const navItems = [
    {
        name:"Contact",
        to:"#contact"
    },
    {
        name:"Projects",
        to:"#projects"
    },
    {
        name:"Overview",
        to:"#overview"
    }
].reverse();

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

export const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

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