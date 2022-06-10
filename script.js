//** assign the variables !! using querySelector*/
const acBtn = document.querySelector(".functionAC");
const pmBtn = document.querySelector(".functionPM");
const perBtn = document.querySelector(".functionPER");
const divide = document.querySelector(".divide");
const num7 = document.querySelector(".num-7");
const num8 = document.querySelector(".num-8");
const num9 = document.querySelector(".num-9");
const multiple = document.querySelector(".multiple");
const num4 = document.querySelector(".num-4");
const num5 = document.querySelector(".num-5");
const num6 = document.querySelector(".num-6");
const minus = document.querySelector(".minus");
const num1 = document.querySelector(".num-1");
const num2 = document.querySelector(".num-2");
const num3 = document.querySelector(".num-3");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
let displayUp = document.querySelector(".displayUp");
let displayDown = document.querySelector(".displayDown");
let firstNumber ;
let secondNumber ;
let splitWord;

//* number*//
num1.addEventListener("click", ()=>{
    displayDown.innerHTML += num1.textContent;  
});
num2.addEventListener("click", ()=>{
    displayDown.innerHTML += num2.textContent 
});
num3.addEventListener("click", ()=>{
    displayDown.innerHTML += num3.textContent 
});
num4.addEventListener("click", ()=>{
    displayDown.innerHTML += num4.textContent 
});
num5.addEventListener("click", ()=>{
    displayDown.innerHTML += num5.textContent 
});
num6.addEventListener("click", ()=>{
    displayDown.innerHTML += num6.textContent 
});
num7.addEventListener("click", ()=>{
    displayDown.innerHTML += num7.textContent 
});
num8.addEventListener("click", ()=>{
    displayDown.innerHTML += num8.textContent 
});
num9.addEventListener("click", ()=>{
    displayDown.innerHTML += num9.textContent   
});
zero.addEventListener("click", ()=>{
    displayDown.innerHTML += zero.textContent 
});

//**  basic operators */
plus.addEventListener("click", () => {
  if (!displayDown.innerHTML.includes("+") ) {
    displayDown.innerHTML += plus.innerHTML;
  } 
   else if (
    displayDown.innerHTML.includes("-") &&
    displayDown.innerHTML.includes("x") &&
    displayDown.innerHTML.includes("÷")
  ) {
    result(); 
    displayUp.innerHTML = displayDown.innerHTML;
    
  } else {
    displayUp.innerHTML = displayDown.innerHTML;
    result();
  }
});
minus.addEventListener("click", () => {
  if (!displayDown.innerHTML.includes("-")) {
    displayDown.innerHTML += minus.innerHTML;
  } else {
    displayUp.innerHTML = displayDown.innerHTML;
    result();
  }
});
multiple.addEventListener("click", () => {
  if (!displayDown.innerHTML.includes("x")) {
    displayDown.innerHTML += multiple.innerHTML;
  } else {
    displayUp.innerHTML = displayDown.innerHTML;
    result();
  }
});
divide.addEventListener("click", () => {
  if (!displayDown.innerHTML.includes("÷")) {
    displayDown.innerHTML += divide.innerHTML;
  } else {
    displayUp.innerHTML = displayDown.innerHTML;
    result();
  }
});
equal.addEventListener("click", ()=>{
    if(!displayUp.innerHTML){
        displayUp.innerHTML += displayDown.innerHTML
        result();
    }else {
        displayUp.innerHTML = displayDown.innerHTML
        result();
    };
    
    
    
});
//** special operators */
acBtn.addEventListener("click", ()=>{
    displayDown.innerHTML ="";
    displayUp.innerHTML ="";
})
pmBtn.addEventListener("click", ()=>{
    // pm function;
})
perBtn.addEventListener("click", ()=>{
    // pm function;
})
dot.addEventListener("click", ()=>{
    if (!displayDown.innerHTML.includes(".")) {
      displayDown.innerHTML += ".";
    }else {
        displayDown.innerHTML += "";
    };
})
//** result function */
let result = ()=>{
    if (displayUp.innerHTML.includes("+")) {
       splitWord= displayUp.innerHTML.split("+");
       displayDown.innerHTML = +splitWord[0] + +splitWord[1];
    } else if (displayUp.innerHTML.includes("-")) {
      splitWord = displayUp.innerHTML.split("-");
      displayDown.innerHTML = +splitWord[0] - +splitWord[1];
    } else if (displayUp.innerHTML.includes("x")) {
      splitWord = displayUp.innerHTML.split("x");
      displayDown.innerHTML = +splitWord[0] * +splitWord[1];
    } else if (displayUp.innerHTML.includes("÷")) {
      splitWord = displayUp.innerHTML.split("÷");
       displayDown.innerHTML = (+splitWord[0] / +splitWord[1]).toFixed(2);
    }
};




















// document.querySelector("buttons").addEventListener("click", (e) => {
//   if (e.target.classList.contains("num-7")) {
//     displayDown.innerHTML += 7;
//   }
// });
// buttons.addEventListener(`click`, (e) => {
//     if (e.target.classList.contains(`num 1`)) {
//         displayUp.innerText = ` `;
//         displayDown.innerText = 1;
//     }
//   });
