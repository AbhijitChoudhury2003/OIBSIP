let input = document.querySelector(".inputBox");
let button = document.querySelectorAll(".button");


let string = "";
let arr = Array.from(button).forEach((buttons)=>{
  buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
    string = string.substring(0,string.length - 1);
    input.value = string;

    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    input.value = string;
      }
  })
})