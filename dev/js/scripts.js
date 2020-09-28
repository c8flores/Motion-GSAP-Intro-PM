//import * as Demo from './demo.js';

import {gsap} from "gsap";
import {redBoxAnimation} from './redBox.js';
import {blueBoxAnimation} from './blueBox.js';
import {orangeBoxAnimation} from './orangeBox.js';

// this will keep CodeKit quite!
//console.log(redBoxAnimation);


var mainTL = gsap.timeline();

mainTL.add(redBoxAnimation())
        .add(blueBoxAnimation())
        .add(orangeBoxAnimation());