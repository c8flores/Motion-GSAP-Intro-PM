import {gsap} from "gsap";


export function redBoxAnimation(){
    var tl = gsap.timeline();
    tl.to(".red-box",{duration: 2, x: 300})
        .to(".red-box",{duration: 2, y: 300})
        .to(".red-box",{duration: 2, rotation: 300});
    return tl;
}