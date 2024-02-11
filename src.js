let Day=""
let Hour=""
let Min=""
const REQUEST = document.querySelector("#request")
const TIME = document.querySelector("#time")
const BUTTON = document.querySelector("#button")
const RESETTIME = document.querySelector("#lastreset")
d=""
function time(){    
    d = new Date();
    d=d.toString()
    Day=d.substring(0,3);
    Hour=d.substring(16,18);
    Min=d.substring(19,21);
}

checktime()

function checktime(){
    time()
    if (Hour===16 && Min===10 && Min===11 && Min===12 && Min===13 && Min===14 && Min===15){
        REQUEST.textContent="Request Sent for Apple Berry Juice at "+Hour+":"+Min;
        BUTTON.disabled="false"
    }
    if (Hour>16 && Hour<24) {
        REQUEST.textContent="Request Sent for Apple Berry Juice at 4:10:04 PM GMT-0800 Pacific Standard Time"
    }
    TIME.textContent=d
    
}



BUTTON.onclick = function (){
    REQUEST.textContent="No Request"
    BUTTON.disabled="true"
    RESETTIME.textContent=new Date()
}

setInterval(checktime, 60000)

