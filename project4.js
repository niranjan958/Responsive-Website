function frontp() {
    let n = document.getElementById("fname").value
    let m=/^[A-Za-z]+$/;
    if(n== ""){
        document.getElementById("call1").innerHTML= "Enter the name";
    }
    else if(!m.test(n)){
        document.getElementById("call1").innerHTML= "Enter the valid username";
    }
    else{
        document.getElementById("call1").innerHTML= "";
    }

    let a = document.getElementById("lname").value
    let b=/^[A-Za-z]+$/;
    if(a== ""){
        document.getElementById("call2").innerHTML= "Enter the name";
    }
    else if(!b.test(a)){
        document.getElementById("call2").innerHTML= "Enter the valid username";
    }
    else{
        document.getElementById("call2").innerHTML= "";
    }

     let c = document.getElementById("ename").value
    let d=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(c== ""){
        document.getElementById("call3").innerHTML= "Enter the email id";
    }
    else if(!d.test(c)){
        document.getElementById("call3").innerHTML= "Enter the valid email";
    }
    else{
        document.getElementById("call3").innerHTML= "";
    }

    let e = document.getElementById("pname").value
    let f=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(e= ""){
        document.getElementById("call5").innerHTML= "Enter the phone number";
    }
    else if(!f.test(e)){
        document.getElementById("call5").innerHTML= "Enter the valid phone number";
    }
    else{
        document.getElementById("call5").innerHTML= "";
    }

    let g = document.getElementById("passname").value
    let h=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(g= ""){
        document.getElementById("call6").innerHTML= "Enter the password";
    }
    else if(!g.test(h)){
        document.getElementById("call6").innerHTML= "Enter the valid password";
    }
    else{
        document.getElementById("call6").innerHTML= "";
    }
    let i = document.getElementById("passname").value
    let j=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(i= ""){
        document.getElementById("call6").innerHTML= "Enter the password";
    }
    else if(!j.test(i)){
        document.getElementById("call6").innerHTML= "Enter the valid password";
    }
    else{
        document.getElementById("call6").innerHTML= "";
    }


 }
