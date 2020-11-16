import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// const morphTL = gsap.timeline();

const monsterTL = gsap.timeline();


export function drawAnimation(){

    // morphTL.to("#blue",{duration: 1, morphSVG:"#star", fill:"#650467"});
    // return morphTL;

    monsterTL.to("#dark-red-1",{duration: 1, morphSVG:"#dark-red-2", fill:"#242424"},"monster")
            .from("#dark-red-1",{duration: 1,drawSVG:"0"})
            .to("#light-red-1",{duration: 1, morphSVG:"#light-red-2" , fill:"#6e6e6e"},"monster")
            .to("#left-eye-1",{duration: 1, morphSVG:"#left-eye-2", fill:"#fff"},"monster")
            .to("#right-eye-1",{duration: 1, morphSVG:"#right-eye-2", fill:"#fff"},"monster")
            .to("#mouth-1",{duration: 1, morphSVG:"#mouth-2", fill:"#fff"},"monster")
            .to("#leg-1",{duration: 1, morphSVG:"#horn-1"},"monster")
            .to("#leg-2",{duration: 1, morphSVG:"#horn-2"},"monster")
            .to("#shadow-1",{duration: 1, morphSVG:"#shadow-2"},"monster")
            //.to("#dark-red-1",{duration: 1, morphSVG:"#dark-red-1"});
    return monsterTL;
}