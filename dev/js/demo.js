import {gsap} from "gsap";

gsap.set("#red-box",{transformOrigin: "center"});


const redBoxTL = gsap.timeline();
// redBoxTL.from("#red-box",{duration:1, rotation: 360, repeat:-1, ease: "none"});
redBoxTL.from("#red-box",{duration:1, x: -400, fill:"#8ce6fd", ease: "none"})
        .to("#red-box",{duration:1, x: 400, ease: "none"});

export function redBoxAnimation(){
    return redBoxTL;
}