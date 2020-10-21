import {gsap} from "gsap"

const backgroundTL = gsap.timeline();

gsap.set(".rings",{transformOrigin: "center"});


export function backgroundAnimation(){
    backgroundTL.from("#moon-rings",{duration:3, y:1000})
    .from(".rings",{duration:1, scale:0, stagger:-0.5, ease: "back.out(1.7)"},"-=2");

    return backgroundTL;

}