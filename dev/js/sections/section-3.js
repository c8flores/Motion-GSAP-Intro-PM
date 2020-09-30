import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//x: left | center | right
//y: top | center | bottom

gsap.set(".scale-left", {transformOrigin: "left"});


const section3TL = gsap.timeline();
section3TL.from("#section-3 aside",{duration:0.5,alpha:0})
            .from("#section-3-container",{duration:0.5,scaleX:0})
            .from("#section-3-content h1",{duration:0.5,alpha:0})
            .from("#section-3-content p",{duration:0.5,alpha:0})
            .from(".bottom",{duration:0.5,scaleX:0, stagger: 0.25})
            .from(".yellow-bar",{duration:0.5,scaleX:0, stagger: 0.25}, "-=0.25")
            .from(".top h5",{duration:0.5, y:20, alpha:0, stagger: 0.25}, "textAni")
            .from(".top h4",{duration:0.5, y:20, alpha:0, stagger: 0.25}, "textAni");


export function section3Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "restart none reverse none",
        scrub: 1,
        trigger: "#section-3",
        start:"top, 70%",
        end: "bottom 70%"
    });
}