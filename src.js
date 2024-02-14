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
    Min=parseInt(Min)
    Hour=parseInt(Hour)
}



function checktime(){
    time()
    console.log(Day)
    console.log(Hour)
    console.log(Min)
    if (Hour===16 && Min>9 && Min<20 && Day==="Sun"){
        REQUEST.textContent="Request Sent for Apple Berry Juice at "+Hour+":"+Min;
        BUTTON.disabled="false"
    }
    if (Hour>16 && Hour<24 && Day==="Sun") {
        REQUEST.textContent="Request Sent for Apple Berry Juice at 4:10:04 PM GMT-0800 Pacific Standard Time"
    } else if (Hour===16 && Min>9 && Day==="Sun"){
        REQUEST.textContent="Request Sent for Apple Berry Juice at 4:10:04 PM GMT-0800 Pacific Standard Time"
    }
    TIME.textContent=d
    
}

checktime()
setInterval(checktime, 60000)





