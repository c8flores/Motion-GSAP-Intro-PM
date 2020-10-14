import gsap from "gsap/gsap-core"
import {iceCreamAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(iceCreamAnimation());
