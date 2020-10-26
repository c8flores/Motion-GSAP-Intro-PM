
import gsap from "gsap";

const catTL = gsap.timeline();

export function catAnimation(){

    catTL.to(".cat-eyes",{duration:0.25, scaleY:0, yoyo:true, repeat:1});
    return catTL;
}