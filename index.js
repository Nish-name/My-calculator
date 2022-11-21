

function calc(number) {
document.getElementsByTagName("input")[0].value+=number;
console.log(number)
}



let Result=()=>{
    document.getElementsByTagName("input")[0].value=eval(document.getElementsByTagName("input")[0].value)
}


function clr() {
document.getElementsByTagName("input")[0].value="";
}

function del() {

document.getElementsByTagName("input")[0].value=document.getElementsByTagName("input")[0].value.slice(0,-1);
}