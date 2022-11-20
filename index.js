
let result = document.getElementsByTagName("input");

let calculate=(number)=>{
    result[0].value += number;
}



let Result=()=>{
    
        result[0].value = eval(result[0].value)
    
   

function clr() {
    result[0].value="0";
}

function del() {
    result[0].value=result[0].value.slice(0,-1);
}