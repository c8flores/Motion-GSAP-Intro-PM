import {gsap} from "gsap"

const backgroundTL = gsap.timeline();


export function backgroundAnimation(){
    backgroundTL.from("#moon",{duration:3, y:1000});

    return backgroundTL;

}