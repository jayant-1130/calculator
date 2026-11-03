
let inputVal  = document.querySelector("#inputVal")
let opretor = document.querySelectorAll("#opretor")
let clear = document.querySelector("#clear")
let del = document.querySelector("#delete")
let num = document.querySelectorAll("#number")
let equal = document.querySelector("#equal")
let decimal = document.querySelector("#decimal")
let button = document.querySelectorAll("button")// all button select
del.addEventListener("click",()=>{
    inputVal.value = ""
    inputVal.value = "0"
})
clear.addEventListener("click",()=>{
   inputVal.value = inputVal.value.slice(0,-1)
   if(inputVal.value ===""){
    inputVal.value ="0"
   }
})
num.forEach(function(num){
    num.addEventListener("click",()=>{
        if(inputVal.value ==="0"){//default value 0 hoto waha par jo click ho raha hai vo add kar do
            inputVal.value = num.innerText
        }else{
            inputVal.value += num.innerText
        }
    })
})
opretor.forEach(function(op){
    op.addEventListener("click",()=>{
        const lastC = inputVal.value.slice(-1)
        if(["%","*","-","+","/"].includes(lastC)){
            return
        }
        inputVal.value += op.innerText
        console.log(op.in)
    })
})
equal.addEventListener("click",()=>{
    inputVal.value = eval(inputVal.value)
})
decimal.addEventListener("click",()=>{
    if(!inputVal.value.includes(".")){
        inputVal.value += "."
    }
})