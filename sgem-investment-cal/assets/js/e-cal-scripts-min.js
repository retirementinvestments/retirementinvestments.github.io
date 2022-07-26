if (!window.jQuery) {
    var a = document.createElement("script");
    a.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"), document.head.appendChild(a);
}
var sgem_head = document.getElementsByTagName("head")[0],
    sgem_xs = document.getElementsByTagName("head")[0],
    sgem_style = document.createElement("link");
	
let b = document.createElement("script");
    b.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/338422/ResizeSensor.js"), document.body.appendChild(b);

let c = document.createElement("script");
    c.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/338422/ElementQueries.js"), document.body.appendChild(c);

		
function runCal() {
    let a = document.createElement("script");
    a.setAttribute("src", "https://retirementinvestments.github.io/sgem-investment-cal/assets/js/e-cal-scripts-min-all.js"), document.body.appendChild(a);
}
(sgem_style.id = "sgem-re-cal-styles"),
    (sgem_style.rel = "stylesheet"),
    (sgem_style.type = "text/css"),
    (sgem_style.href = "https://retirementinvestments.github.io/sgem-investment-cal/assets/css/styles.min.css"),
    (sgem_style.media = "all"),
    sgem_head.appendChild(sgem_style),
    setTimeout(runCal, 1000);
	
	
