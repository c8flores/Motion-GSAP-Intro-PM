import {gsap} from "gsap";

import {boxSpeed} from "./animationSpeed.js"


export function blueBoxAnimation(){
    var tl = gsap.timeline();
    tl.from(".blue-box",{duration: 2, scale: 3})
        .to(".blue-box",{duration: boxSpeed, alpha: 0.5});
    return tl;
}