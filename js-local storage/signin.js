let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault(); // avoid reloading of the form
    let un=document.getElementById("u_name").value;
    let ph=document.getElementById("ph_no").value;
    let un2 = localStorage.getItem("username");
    let ph2 = localStorage.getItem("ph_no");
    if(un=="" && ph==""){
        alert("The username and phone number should not be empty");
    }
    else if(un==""){
        alert("The username should not be empty")
    }
    else if(ph==""){
        alert("The phone number should not be empty")
    }
    else if(un==un2||ph==ph2){
        alert("User already Regisrtered");
    }
    else if(un!=="" && ph!==""){
        localStorage.setItem("username", un);
        localStorage.setItem("phone_no", ph);
        let special_char="!@#$%^&*()";
        let random="";
        for(let i=0; i<3;i++){
            random+=special_char[Math.floor(Math.random()*special_char.length)]
        }
        let pwd=un.slice(0,4).concat(ph.slice(-4)).padStart(11,random); //padStart(11,random) generates 3 special characters at the starting of the 
        localStorage.setItem("password", pwd);
        alert(`The password is ${pwd}`);
        window.open("Login.html");
    }
})