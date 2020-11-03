import {
    gsap
} from "gsap";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// Bat 4
gsap.set("#bat-4-container",{xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});
const bat4TL = gsap.timeline();

export function bat4Animaiton() {

    // call function to make bat bounce
    bat4Flying();

    bat4TL.to("#bat-4-container", {
        duration: 7,
        ease:"none",
        repeat:1,
        motionPath: {
            path: "#bat-4-path",
            align:"#bat-4-path"
        },
        onComplete: bat4FlyAway
    });

    return bat4TL;
}


function bat4Flying(){
    const batFourFlyingTL = gsap.timeline();
    batFourFlyingTL.fromTo("#bat-4",{y:"-=20"},{y:"+=20", duration:0.25, yoyo:true, repeat:120});
}

function bat4FlyAway(){
    bat4TL.to("#bat-4-container",{duration:1, scale:0, alpha:0, y:"-50"});
}