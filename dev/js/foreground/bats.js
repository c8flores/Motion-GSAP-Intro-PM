import {
    gsap
} from "gsap";
import {
    MotionPathPlugin
} from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);



// Bat 1
gsap.set("#bat-1-container", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%"
});

const batOneTL = gsap.timeline();

export function bat1Animation() {

    // start bat 1 flying animation
    bat1Flying();

    batOneTL.to("#bat-1-container", {
        duration: 7,
        ease: "none",
        motionPath: {
            path: "#bat-1-path",
            align: "#bat-1-path"
        },
        onComplete: bat1FlyAway
    });
}

function bat1Flying() {
    const batOneFlyingTL = gsap.timeline();
    batOneFlyingTL.fromTo("#bat-1", {
        y: "-=10"
    }, {
        y: "+=10",
        duration: 0.25,
        yoyo: true,
        repeat: 40,
        scale: 0.95
    });
}

function bat1FlyAway() {
    batOneTL.to("#bat-1-container", {
        duration: 1,
        scale: 0,
        alpha: 0,
        y: "-50"
    });
}

// Bat 4
gsap.set("#bat-4-container", {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%"
});
const bat4TL = gsap.timeline();

export function bat4Animaiton() {

    // call function to make bat bounce
    bat4Flying();

    bat4TL.to("#bat-4-container", {
        duration: 6,
        ease: "none",
        motionPath: {
            path: "#bat-4-path",
            align: "#bat-4-path"
        },
        onComplete: bat4FlyAway
    });

    return bat4TL;
}


function bat4Flying() {
    const batFourFlyingTL = gsap.timeline();
    batFourFlyingTL.fromTo("#bat-4", {
        y: "-=20"
    }, {
        y: "+=20",
        duration: 0.25,
        yoyo: true,
        repeat: 120
    });
}

function bat4FlyAway() {
    bat4TL.to("#bat-4-container", {
        duration: 1,
        scale: 0,
        alpha: 0,
        y: "-50"
    });
}


// bat eyes

const batEyesTL = gsap.timeline();

export function batEyesAnimation() {

    batEyesWingsAnimation();

    batEyesTL.fromTo("#bat-eyes", {
        x: "-=350",
        y: "+=300",
        scale: 0.5
    }, {
        y: "-=600",
        x: "+=1500",
        duration: 5,
        scale: 4
    });
    return batEyesTL;
}

gsap.set("#bat-eyes-left-wing", {
    transformOrigin: "right bottom"
});
gsap.set("#bat-eyes-right-wing", {
    transformOrigin: "left bottom"
});

function batEyesWingsAnimation() {
    const batEyeWingTL = gsap.timeline();
    batEyeWingTL.fromTo("#bat-eyes-left-wing", {
            rotation: 25
        }, {
            rotation: -45,
            duration: 0.25,
            yoyo: true,
            repeat: 40
        }, "wings")
        .fromTo("#bat-eyes-right-wing", {
            rotation: -20
        }, {
            rotation: 45,
            duration: 0.25,
            yoyo: true,
            repeat: 40
        }, "wings");
}