let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');


let DigitalClock = ()=>{
    
    let currenttime = new Date();
    second.innerHTML =  (currenttime.getSeconds()<10?'0':'') + currenttime.getSeconds();
    minute.innerHTML =( currenttime.getMinutes()<10?'0':'') + currenttime.getMinutes();
    hour.innerHTML = ( currenttime.getHours()<10?'0':'' )+  currenttime.getHours();

};

   


setInterval( DigitalClock,1000);