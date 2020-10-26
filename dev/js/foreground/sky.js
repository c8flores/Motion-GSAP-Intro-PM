import gsap from "gsap";


const starsTL = gsap.timeline();


export function starAnimation(){
    starsTL.from(".stars",{duration:0.5, alpha:0, stagger:-0.25});
    return starsTL;
}

const cloudsTL = gsap.timeline();

export function cloudsAnimation(){
    cloudsTL.from("#cloud-1",{duration:300, x:400},"moveCloud")
        .from("#cloud-2",{duration:300, x:300},"moveCloud");

    return cloudsTL;
}