let second=0;
let minute=0;
let hour=0;
setInterval(() => {
   let d = new Date();
   second= d.getSeconds()*6;
   minute=d.getMinutes()*6;
   hour=d.getHours()*30+Math.round(minute/12);
   document.getElementById("secondh").style.transform=`rotate(${second}deg)`;
   document.getElementById("minuteh").style.transform=`rotate(${minute}deg)`;
    document.getElementById("hourh").style.transform=`rotate(${hour}deg)`;


},1000);
