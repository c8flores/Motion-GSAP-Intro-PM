//const { default: gsap } = require("gsap/gsap-core");
import gsap from "gsap";

gsap.set(".to-center",{transformOrigin: "center"});
gsap.set(".to-center-bottom",{transformOrigin: "center bottom"});


const middleBackTL = gsap.timeline();

export function middleBackAnimation(){

   middleBackTL.from("#back",{duration:3, scale:6, y:1000})
                .from("#middle",{duration:2, scale:6, y:1000},"-=1.5")
                .from("#grass",{duration:2, scale:6, y:1000},"-=2")
                
                //trees
                .from("#tree-back-left-cp",{duration:0.5, scale:0, alpha:0},"-=1.5")
                .from("#tree-front-right-cp",{duration:0.5, scale:0, alpha:0})
                
                // crosses
                .from("#cross-left",{duration:0.5, scaleY:0},"-=0.25")
                .from("#cross-right",{duration:0.5, scaleY:0},"-=0.25");

   return middleBackTL;

} 