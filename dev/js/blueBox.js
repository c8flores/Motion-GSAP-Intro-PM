import {gsap} from "gsap";


export function blueBoxAnimation(){
    var tl = gsap.timeline();
    tl.to(".blue-box",{duration: 2, scale: 3})
        .to(".blue-box",{duration: 2, alpha: 0});
    return tl;
}