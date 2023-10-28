let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let un_log=document.getElementById("user_name").value;
    let pwd_log=document.getElementById("pass_word").value;
    let un1 = localStorage.getItem("username");
    let pwd1 = localStorage.getItem("password");
    if(un_log=="" && pwd_log==""){
        alert("The fields should not be empty");
    }
    else if(un_log==""){
        alert("The username should not be empty");
    }
    else if(pwd_log==""){
        alert("The password should not be empty");
    }
    else if(un_log==un1 && pwd_log==pwd1){
        alert("Logged in Successfully");
        window.open("Home.html");
    }
    else if(un_log!==un1 || pwd_log!==pwd1){
        alert("Log in not Successful");
    }
})