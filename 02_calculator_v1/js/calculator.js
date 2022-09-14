'use strict';

const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqual = document.getElementById("btnEqual");
const elementbtn99 = document.getElementById("btn99");
/* 03-02 // event
elementSelect.addEventListener("change",
 function(){
     // ket qua
     let num1 = Number(elementNum1.value);
     let num2 = Number(elementNum2.value);
     let calcType = elementSelect.value;
     let result;
     // xu li
     switch (calcType){
     case "type-add": 
         result = num1 + num2 ;
         break;
     case "type-substract":
         result = num1 - num2 ;
         break; 
     case "type-multiply":
         result = num1 * num2 ;
         break;
     case "type-divide":
         result = num1 / num2 ;
         break;
   }
   //hien thi man hinh
   elementResult.innerHTML = result;
　},false
);

elementNum1.addEventListener("change",
 function(){
     // ket qua
     let num1 = Number(elementNum1.value);
     let num2 = Number(elementNum2.value);
     let calcType = elementSelect.value;
     let result;
     // xu li
     switch(calcType){
        case "type-add": 
            result = num1 + num2 ;
            break;
        case "type-substract":
            result = num1 - num2 ;
            break; 
        case "type-multiply":
            result = num1 * num2 ;
            break;
        case "type-divide":
            result = num1 / num2 ;
            break;
      }
      //hien thi man hinh
      elementResult.innerHTML = result;
   　},false
   );

elementNum2.addEventListener("change",
 function(){
     // ket qua
     let num1 = Number(elementNum1.value);
     let num2 = Number(elementNum2.value);
     let calcType = elementSelect.value;
     let result;
     // xu li
     switch(calcType){
        case "type-add": 
            result = num1 + num2 ;
            break;
        case "type-substract":
            result = num1 - num2 ;
            break; 
        case "type-multiply":
            result = num1*num2 ;
            break;
        case "type-divide":
            result = num1 / num2 ;
            break;
      }
      //hien thi man hinh
      elementResult.innerHTML = result;
   　},false
   ); */

   /* 03-03a
elementSelect.addEventListener("change",
 function(){
     const result = calculate(
      Number(elementNum1.value),
      Number(elementNum2.value),   
      elementSelect.value
     );
     elementResult.innerHTML = result;
    },false
);

elementNum1.addEventListener("change",
 function(){
     const result = calculate(
      Number(elementNum1.value),
      Number(elementNum2.value),   
      elementSelect.value
     );
     elementResult.innerHTML  = result;
    },false
);

elementNum2.addEventListener("change",
 function(){
     const result = calculate(
      Number(elementNum1.value),
      Number(elementNum2.value),   
      elementSelect.value
     );
     elementResult.innerHTML  = result;
    },false
);
*/

//03-03b
elementSelect.addEventListener("change",clear);
elementNum1.addEventListener("change",clear);
elementNum2.addEventListener("change",clear);

elementbtnEqual.addEventListener("click",update);
elementbtn99.addEventListener("click",clear);

function update(){
    const result = calculate(
        Number(elementNum1.value),
        Number(elementNum2.value), 
        elementSelect.value
    );
    elementResult.innerHTML  = result;
}

function calculate(num1,num2,calcType){
    let result;

    switch(calcType){
        case "type-add": 
            result = num1 + num2 ;
            break;
        case "type-substract":
            result = num1 - num2 ;
            break; 
        case "type-multiply":
            result = num1*num2 ;
            break;
        case "type-divide":
            result = num1 / num2 ;
            break;
      }
      return result;
}

function clear(){
    elementResult.innerHTML  ="";
}
