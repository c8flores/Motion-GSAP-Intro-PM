import {gsap} from "gsap";


import {backgroundAnimation} from "./background/background.js"


const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation());

