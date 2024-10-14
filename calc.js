let str="";
const button=document.querySelectorAll(".box");
const output=document.querySelector(".result");

Array.from(button).forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(e.target.innerHTML === "AC"){
            str="";
            output.value=str;
            output.innerHTML="";
        }
        else if(e.target.innerHTML==="="){
            str= eval(str);
            output.value=str;
            output.innerHTML=str;
        }
        else{
        console.log(e.target);
        str = str + e.target.innerHTML;
        output.value =str;
        output.innerHTML=str;
        }
    });
    });
