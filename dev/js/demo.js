import {gsap} from "gsap";

gsap.set("#ice-cream-cp",{transformOrigin:"center"});

const iceCreamTL = gsap.timeline();
iceCreamTL.from("#clip-demo",{duration:3, x:-400, ease:"none", scale:3},"startIceCream")
            .from("#ice-cream",{duration:1, y:-400, ease:"none"})
            .to("#ice-cream",{duration:3, y:400, ease:"none"},"startIceCream");


export function iceCreamAnimation(){
    return iceCreamTL;
}