import {gsap} from "gsap";


export function orangeBoxAnimation(){
    var tl = gsap.timeline();
    tl.to(".orange-box",{duration: 2, y: 300})
        .to(".orange-box",{duration: 2, x: 300})
        .to(".orange-box",{duration: 2, rotation: -300});
    return tl;
}