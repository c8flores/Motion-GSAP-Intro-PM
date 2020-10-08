import $ from "jquery";
import {section1Animation} from "./sections/section-1.js";
import {section2Animation} from "./sections/section-2.js";
import {section3Animation} from "./sections/section-3.js";
import {movePage} from "./nav/nav.js"


section1Animation();
section2Animation();
section3Animation();

// this will keep CodeKit quite!
//console.log(redBoxAnimation);

// listener for the main nav clicks
$(".nav-btn").on("click", movePage);

