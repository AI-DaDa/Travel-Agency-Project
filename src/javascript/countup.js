let finalValue = 99;
let startValue = 0;
let time;
let x;
let numString ='';
let valueLength = finalValue.toString().length;

//to increase speed, reduce the value of "i"
for (let i = 10; i < valueLength; i++) {
  numString += '1';
}
x = Number(numString);
function upValue(){
  if(startValue <= finalValue){
    setTimeout(function(){
      document.getElementById('number_up').innerText = startValue;
      if(x > 0){
        startValue = startValue + x;
        time = 1;
      }else{
        startValue = startValue + 1;
        time = 5;
      }
      upValue();
    },time);
  }else{
    setTimeout(function(){
      document.getElementById('number_up').innerText = finalValue;
    },time);
  }
}
upValue();



