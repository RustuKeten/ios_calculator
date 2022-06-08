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
//* number*//
num1.addEventListener("click", ()=>{
    displayUp.innerHTML += num1.textContent    
});
num2.addEventListener("click", ()=>{
    displayUp.innerHTML += num2.textContent 
});
num3.addEventListener("click", ()=>{
    displayUp.innerHTML += num3.textContent 
});
num4.addEventListener("click", ()=>{
    displayUp.innerHTML += num4.textContent 
});
num5.addEventListener("click", ()=>{
    displayUp.innerHTML += num5.textContent 
});
num6.addEventListener("click", ()=>{
    displayUp.innerHTML += num6.textContent 
});
num7.addEventListener("click", ()=>{
    displayUp.innerHTML += num7.textContent 
});
num8.addEventListener("click", ()=>{
    displayUp.innerHTML += num8.textContent 
});
num9.addEventListener("click", ()=>{
    displayUp.innerHTML += num9.textContent   
});
zero.addEventListener("click", ()=>{
    displayUp.innerHTML += zero.textContent 
});

//**   operators */
plus.addEventListener("click", ()=>{
    displayUp.innerHTML += plus.textContent 
});
minus.addEventListener("click", ()=>{
    displayUp.innerHTML += minus.textContent; 
});
multiple.addEventListener("click", ()=>{
    displayUp.innerHTML += "*"; 
});
divide.addEventListener("click", ()=>{
    displayUp.innerHTML += "÷"; 
});
equal.addEventListener("click", ()=>{
    result();
});

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
//** functions(+-*/) */
let result = ()=>{
    if(displayUp.contains()){
        displayDown.innerHTML = displayUp.innerHTML[0] + displayUp.innerHTML[2];
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
