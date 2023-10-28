let otp="";
for(let i=0;i<4;i++){
    otp+=Math.floor(Math.random()*10);
}
alert(`The otp is ${otp}`);

let otp_array=otp.split("");
console.log(otp_array);

let otp_res=document.getElementsByClassName("otp")

setTimeout(()=>{
    otp_res[0].innerHTML=otp_array[0]
},500);
setTimeout(()=>{
    otp_res[1].innerHTML=otp_array[1]
},1000);
setTimeout(()=>{
    otp_res[2].innerHTML=otp_array[2]
},1500);
setTimeout(()=>{
    otp_res[3].innerHTML=otp_array[3]
},2000);

function verify(){
    document.getElementById("ver").innerHTML="OTP is Verified";
}

// for(let i=0;i<otp_array.length;i++){
//     otp_res[i].innerHTML=otp_array[i];
// }