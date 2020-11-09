import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {backgroundAnimation} from "./background/background.js";
import {middleBackAnimation} from "./foreground/middle-back.js";
//import {catAnimation} from "./foreground/cat.js";
import {starAnimation} from "./foreground/sky.js";
//import {cloudsAnimation} from "./foreground/sky.js"

import {bat4Animaiton} from "./foreground/bats.js";
import {bat1Animation} from "./foreground/bats.js";
import {batEyesAnimation} from "./foreground/bats.js";

import {leftWebAnimation } from "./foreground/webs.js";
import {rightWebAnimation } from "./foreground/webs.js";

// play clouds Animation
//cloudsAnimation();

// make bat one fly
bat1Animation();

// made bat 4 fly
bat4Animaiton();

const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation(),"spookyAnimation")
        .add(starAnimation(),"spookyAnimation")
        .add(middleBackAnimation(),"spookyAnimation")
        .add(batEyesAnimation(),"-=3")
        .add(leftWebAnimation(),"webs")
        .add(rightWebAnimation(),"webs");

//instantiate GSDevTools with default settings
GSDevTools.create();

