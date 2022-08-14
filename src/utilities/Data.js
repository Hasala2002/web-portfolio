
import arke from "../img/work/arke.png"
import bomlivescore from "../img/work/bomlivescore.png"
import c19st from "../img/work/c19st.png"
import catalyst from "../img/work/catalyst.png"
import catalystfusion from "../img/work/catalystfusion.png"
import chronos from "../img/work/chronos.png"
import eve from "../img/work/eve.png"
import mythicon from "../img/work/mythicon.png"
import nytevision from "../img/work/nytevision.png"
import panthera from "../img/work/panthera.png"
import parceljsboilerplate from "../img/work/parceljsboilerplate.png"
import prizegiving from "../img/work/prizegiving.png"
import telegramtextformatter from "../img/work/telegramtextformatter.png"
import wanderer from "../img/work/wanderer.png"
import rivi from "../img/work/rivi.png"
import graphisort from "../img/work/graphisort.png"
import crtrctprcl from "../img/work/crtrctprcl.png"
import techrev from "../img/work/techrev.png"
import mihrealty from "../img/work/mihrealty.png"
import costa from "../img/work/costa.png"

export const WorkDB = {
    fullstack:{
        title: "Full Stack Projects",
        work:[
            {
                title: "Catalyst.LMS",
                img:catalyst,
                desc: "CATALYST.LMS Learning Management System is an easy-to-use LMS designed for easy management of online classes and assignments, for both the teachers and the students. We hope to create a free flowing UI/UX that improves the efficiency and speed of work done by online schools. It was built by a team of 5 for School Hackathon",
                tags: ["node js","react","redux","firebase"],
                links: ["https//untitledlms-5029c.web.app/"]
            },
            {
                title: "Prize Giving Presentation",
                img: prizegiving,
                desc: "In wake of not being able to use powerpoint due a constant animated backgroud and the sheer number of students in our school, I built a dashboard/display of sorts to control and display name and prize titles with everthing being customizable via a simple and easy to use dashboard",
                tags: ["jquery","sass","firebase"],
                links: ["https://ibb.co/5xjW0rw"]
            },
            {
                title: "Catalyst Fusion",
                img: catalystfusion,
                desc: "Zoom Clone I build specifically to be used as alternative in my LMS i built for an Hackathon, had a built in chatbox and basic video call features",
                tags: ["node js","ejs","socket io","peer js"]
            },
            {
                title: "BOM Live Score App",
                img: bomlivescore,
                desc: "With another partner, I built the 2021 new rendition of an yearly tradition to make a live scoreboard app for my school's annual cricket tournament. Though it was never released because of the pandemic (> _ <). I was also a junior developer in the 2020 rendition.",
                tags: ["node js","react native","firebase"],
                links: ["https://play.google.com/store/apps/details?id=io.acicts.live.bom"]
            },
            {
                title: "Eve",
                img: eve,
                desc: "Eve is a event planning and sharing app I made for personal use, also as a learning project for React. Also included weather information via APIs",
                tags: ["node js","react","redux","firebase"]
            },
            {
                title: "Arkē",
                img: arke,
                desc: "With Arkē Chat you can create your own disposable chatroom, invite other people to chat with you and not worry about anyone else snooping into your conversation. Nothing is saved.",
                tags: ["node js","ejs","socket io","peer js"],
                links: ["https://arkechat.herokuapp.com/"]
            }
        ]
    },
    uiux:{
        title: "UI/UX Designs",
        work:[
            {
                title: "Nytevision",
                img: nytevision,
                desc: "The perfect site for Cyber Security software. Designed in Figma and Coded for school website competition.",
                tags: ["html","css","javascript","figma"],
                links: ["https://nytevision.netlify.app/","https://github.com/Hasala2002/NyteVision-Static"]
            },
            {
                title: "Mythicon",
                img: mythicon,
                desc: "Imaginary site for toy company. Designed in Figma and Coded for school website competition.",
                tags: ["html","css","javascript","figma"],
                links: ["https://hasala2002.github.io/Mythicon/","https://github.com/Hasala2002/Mythicon"]
            },
            {
                title: "The Wanderer",
                img: wanderer,
                desc: "The ultimate professional travel blog site. Designed in Figma and Coded for school website competition.",
                tags: ["html","css","javascript","figma"],
                links: ["https://the-wanderer-travelling-blog.netlify.app/","https://github.com/Hasala2002/the-wanderer"]
            },
            {
                title: "Arkē",
                img: arke,
                desc: "With Arkē Chat you can create your own disposable chatroom, invite other people to chat with you and not worry about anyone else snooping into your conversation. Nothing is saved.",
                tags: ["node js","ejs","socket io","peer js"],
                links: ["https://arkechat.herokuapp.com/"]
            },
        ]
    },
    webtools:{
        title: "Web Tools",
        work:[
            {
                title: "Chronos",
                img: chronos,
                desc: "Chronos is a light weight time and date string manipulation function. It is more or less a clone of moment js, and I built it to understand npm packages more. Its the first open source npm package I made.",
                tags: ["node js"],
                links: ["https://www.npmjs.com/package/@hasala2002/chronos","https://github.com/Hasala2002/chronos"]
            },
            {
                title: "create-react-parcel",
                img: crtrctprcl,
                desc: "This is a simple Parcel React JS boilerplate project for anyone to use. I got tired of the bulky and ever so annoying create-react-app, so I built my own using the Parcel bundler system, and shared it to the world as an open source npm project",
                tags: ["node js", "parcel js"],
                links: ["https://www.npmjs.com/package/@hasala2002/create-react-parcel","https://github.com/Hasala2002/create-react-parcel"]
            },
            {
                title: "Parcel JS Boilerplate",
                img: parceljsboilerplate,
                desc: "This is a simple Parcel JS boilerplate project for anyone to use. I built to learn more about Parcel JS and ended up sharing this very basic setup boilerplate as an open source repository",
                tags: ["node js", "parcel js"],
                links: ["https://github.com/Hasala2002/parcel-boilerplate"]
            },
            {
                title: "C19ST",
                img: c19st,
                desc: "Covid 19 status tracker I build for Sri Lanka, while stuck in the pandemic.",
                tags: ["html", "css", "jquery"],
                links: ["https://c19st.netlify.app","https://github.com/Hasala2002/c19st"]
            },
            {
                title: "Graphisort",
                img: graphisort,
                desc: "Website that visualizes sorting algorithms, that I built to understand the algorithms a bit more.",
                tags: ["html", "css", "jquery"],
                links: ["https://graphisort.netlify.app","https://github.com/Hasala2002/graphisort"]
            },
            {
                title: "Telegram Text Formatter",
                img: telegramtextformatter,
                desc: "A very niche use case site, where you can edit text messages in the native Telegram markdown text format",
                tags: ["html", "css", "jquery"],
                links: ["https://telegram-format.netlify.app/","https://github.com/Hasala2002/Telegram-Text-Formatter"]
            },
        ]
    },
    freelance:{
        title: "Freelance",
        work:[
            {
                title: "Panthera",
                img: panthera,
                desc: "Webapp / Android app designed and built for local Leo Club. It was a simple social media app with a live chat room, event posts and other information about the club",
                tags: ["react", "scss", "ionic capacitor"],
                links: ["https://play.google.com/store/apps/details?id=io.ionic.panthera21"]
                
            },
            {
                title: "Technology Revolutions",
                img: techrev,
                desc: "Company site built for Technology Revolutions company",
                tags: ["html", "css", "adobe dimension"],
                links: ["http://techrevinc.com"]
            },
            {
                title: "MIHRealty",
                img: mihrealty,
                desc: "Company site built for MIHRealty company",
                tags: ["react", "parcel js", "scss"],
                links: ["http://mihrealty.com"]
            },
            {
                title: "COSTA",
                img: costa,
                desc: "Company site built for Costa Volcanic Water company",
                tags: ["react", "parcel js", "scss"],
                links: ["https://costavolcanicwater.com"]
            }
        ]
    },
}

import css from '../img/skills/css.png'
import figma from '../img/skills/figma.png'
import firebase from '../img/skills/firebase.png'
import gatsby from '../img/skills/gatsby.png'
import github from '../img/skills/github.png'
import html from '../img/skills/html.png'
import js from '../img/skills/js.png'
import node from '../img/skills/node.png'
import parcel from '../img/skills/parcel.png'
import react from '../img/skills/react.png'
import sass from '../img/skills/sass.png'
import sql from '../img/skills/sql.png'
import photoshop from '../img/skills/photoshop.png'
import dimensions from '../img/skills/dimensions.png'

export const Skills = [
    {
        title: "HTML5",
        img: html
    },
    {
        title: "CSS3",
        img: css
    },
    {
        title: "JS/ES",
        img: js
    },
    {
        title: "NODE JS",
        img: node
    },
    {
        title: "REACT",
        img: react
    },
    {
        title: "SASS",
        img: sass
    },
    {
        title: "FIREBASE",
        img: firebase
    },
    {
        title: "GITHUB",
        img: github
    },
    {
        title: "FIGMA",
        img: figma
    },
    {
        title: "GATSBY",
        img: gatsby
    },
    {
        title: "PARCEL",
        img: parcel
    },
    {
        title: "SQL/GRAPHQL",
        img: sql
    },
    {
        title: "PHOTOSHOP",
        img: photoshop
    },
    {
        title: "DIMENSIONS",
        img: dimensions
    }
]