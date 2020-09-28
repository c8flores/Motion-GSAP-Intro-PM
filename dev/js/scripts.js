//import * as Demo from './demo.js';

import {gsap} from "gsap";
import {redBoxAnimation} from './redBox.js';
import {blueBoxAnimation} from './blueBox.js';
import {orangeBoxAnimation} from './orangeBox.js';

// this will keep CodeKit quite!
//console.log(redBoxAnimation);


var mainTL = gsap.timeline({paused:true});

mainTL.add(redBoxAnimation())
        //.addLabel("blue")
        .addPause()
        .add(blueBoxAnimation())
       
        .add(orangeBoxAnimation())
        .seek("blue")
        .play();