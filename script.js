function run(){
    
    let inputs=document.getElementById("input").value;

   if(inputs==""){
    alert("Enter the Date and Time !")
   }
   else{
   let oldday=new Date(inputs);

    oldtime=oldday.getTime();
    today=new Date();
    nowtime=today.getTime();
    value=nowtime-oldtime;
    sec=Math.floor(value/1000);
    min=Math.floor(value/(1000*60));
    hour=Math.floor(value/(1000*60*60));
    day=Math.floor(value/(1000*60*60*24));
    week=Math.floor(value/(1000*60*60*24*7));
    month=Math.floor(value/(1000*60*60*24*30.4375));
    year=Math.floor(value/(1000*60*60*24*365.25));
    document.getElementById("year").innerHTML=year+" Years";
    document.getElementById("month").innerHTML=month +" Months";
    document.getElementById("weak").innerHTML=week+" Weeks";
    document.getElementById("day").innerHTML=day+" Days";
    document.getElementById("hour").innerHTML=hour+" Hours";
    document.getElementById("min").innerHTML=min+" Mins";
    document.getElementById("sec").innerHTML=sec+" Sec";
    setInterval(run,1000);
   }    
     
}

