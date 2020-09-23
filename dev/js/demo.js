import {gsap} from "gsap";

var redSpeed = 1;
var blueSpeed = 1;


// TweenMax.to(".red-box",redSpeed, {x: 300, borderRadius: "50px", alpha: 0});
// TweenLite.to(".red-box",redSpeed,{x:800, borderRadius: "200px", delay: redSpeed});


// what do you want to animate? / How long should animation be? / What is it you want to animate?
gsap.to(".red-box",{duration: redSpeed, x: 300, borderRadius: "50px", alpha: 0});
gsap.to(".red-box",{duration: redSpeed, x:800, borderRadius: "200px", delay: redSpeed});


gsap.from(".blue-box",{duration: blueSpeed, x: 300, borderRadius: "100px"});
gsap.to(".blue-box",{duration: blueSpeed, x: 800, borderRadius: "100px", delay:blueSpeed });
