var card=document.getElementById("card");
var card2=document.getElementById("card2");
var removeItem=document.getElementById("remove-item");
var remove2=document.getElementById("remove2");
   
  removeItem.addEventListener("click",function(){

       card.style.display="none"
       


  });
  remove2.addEventListener("click",function(){

    card2.style.display="none"
    


});
//////  these all code for card 1
var plusBtn=document.getElementById("plus-btn");
plusBtn.addEventListener("click",function(){
    
     plusBtn2("taka","input1","subtotal","total");
   
 });


var minusBtn=document.getElementById("minus");
minusBtn.addEventListener("click",function(){

minusBtn2("input1","taka","subtotal","total")









});

 function plusBtn2(doubleId,inputValue,subTotal,total){
   var double=document.getElementById(doubleId).innerText;
   var doubleNumber=parseFloat(double);
   var doubleThisNumber=doubleNumber+1219;
   
   document.getElementById(doubleId).innerText=doubleThisNumber;
//inputValue
  var inputMan=document.getElementById(inputValue).value;
  var inputManToNumber=parseFloat(inputMan);
  var inputManGrater=inputManToNumber+1;
  document.getElementById(inputValue).value=inputManGrater;
//subTotal

var subtotal=document.getElementById(subTotal).innerText;
var subtotalToNumber=parseFloat(subtotal);
var subtotalManGrater=subtotalToNumber+1219;
document.getElementById(subTotal).innerText=subtotalManGrater;
//total
var total0=document.getElementById(total).innerText;
var totalToNumber=parseFloat(total0);
var totalManGrater=totalToNumber+1219;
document.getElementById(total).innerText=totalManGrater;

 }
 ////////////////////////////////

function minusBtn2(inputValue2,doubleId2,subtotal,total){
  if(document.getElementById(inputValue2).value<1){
    alert("You should choice at least 1 item");

  }
  else{

    var minusBtn=document.getElementById(inputValue2).value;
 var minusBtnToNumber=parseFloat(minusBtn);
 var minusKoro=minusBtnToNumber-1;
 document.getElementById(inputValue2).value=minusKoro;
//-- value decrease

var doubleId=document.getElementById(doubleId2).innerText;
var doubleIdNumber=parseFloat(doubleId);
var doubleDecrease=doubleIdNumber-1219;
document.getElementById(doubleId2).innerText=doubleDecrease;

//-- subtotal value decrease

var subtotal2=document.getElementById(subtotal).innerText;
var subtotalToNumber=parseFloat(subtotal2);
var subtotalManIncrease=subtotalToNumber-1219;
document.getElementById(subtotal).innerText=subtotalManIncrease;
//-- total value decrease
var total0=document.getElementById(total).innerText;
var totalToNumber=parseFloat(total0);
var totalManDecrease=totalToNumber-1219;
document.getElementById(total).innerText=totalManDecrease;
}
 };

//  these all codes for card2

var plusBtn3=document.getElementById("plus-btn2");
plusBtn3.addEventListener("click",function(){
    
     plusBtn4("taka2","input2","subtotal","total");
   
 });


var minusBtn3=document.getElementById("minus-btn2");
minusBtn3.addEventListener("click",function(){

minusBtn4("input2","taka2","subtotal","total")


});

function plusBtn4(doubleId,inputValue,subTotal,total){
  var double=document.getElementById(doubleId).innerText;
  var doubleNumber=parseFloat(double);
  var doubleThisNumber=doubleNumber+59;
  
  document.getElementById(doubleId).innerText=doubleThisNumber;
//inputValue
 var inputMan=document.getElementById(inputValue).value;
 var inputManToNumber=parseFloat(inputMan);
 var inputManGrater=inputManToNumber+1;
 document.getElementById(inputValue).value=inputManGrater;
//subTotal

var subtotal=document.getElementById(subTotal).innerText;
var subtotalToNumber=parseFloat(subtotal);
var subtotalManGrater=subtotalToNumber+59;
document.getElementById(subTotal).innerText=subtotalManGrater;
//total
var total0=document.getElementById(total).innerText;
var totalToNumber=parseFloat(total0);
var totalManGrater=totalToNumber+59;
document.getElementById(total).innerText=totalManGrater;

}
////////////////////////////////

function minusBtn4(inputValue2,doubleId2,subtotal,total){
  if(document.getElementById(inputValue2).value<1){
    alert("You should choice at least 1 item");

  }
  else{

    var minusBtn=document.getElementById(inputValue2).value;
 var minusBtnToNumber=parseFloat(minusBtn);
 var minusKoro=minusBtnToNumber-1;
 document.getElementById(inputValue2).value=minusKoro;
//-- value decrease

var doubleId=document.getElementById(doubleId2).innerText;
var doubleIdNumber=parseFloat(doubleId);
var doubleDecrease=doubleIdNumber-59;
document.getElementById(doubleId2).innerText=doubleDecrease;

//-- subtotal value decrease

var subtotal2=document.getElementById(subtotal).innerText;
var subtotalToNumber=parseFloat(subtotal2);
var subtotalManIncrease=subtotalToNumber-59;
document.getElementById(subtotal).innerText=subtotalManIncrease;
//-- total value decrease
var total0=document.getElementById(total).innerText;
var totalToNumber=parseFloat(total0);
var totalManDecrease=totalToNumber-59;
document.getElementById(total).innerText=totalManDecrease;
}
 };



