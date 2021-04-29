 const clockBox = document.querySelector(".first-bar"),
    clockfather = clockBox.querySelector(".first-bar_wifi"),
    clockChild = clockBox.querySelector(".clock");

 function getTime(){
     const date = new Date();
     const minute = date.getMinutes();
     const hour = date.getHours();
     clockChild.innerText = `${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}`;
 }




    function init(){
        getTime();
        setInterval(getTime,1000);
    }
    init();
    console.dir(document);