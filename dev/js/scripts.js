import gsap from "gsap/gsap-core"
import {redBoxAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(redBoxAnimation());
