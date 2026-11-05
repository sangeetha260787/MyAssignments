//Reverse the given number
function reverseAnumber()

{

let beforeReverse= 12121;
let reverse=0;
while(beforeReverse>0)
{
   let reminder= beforeReverse%10;
   reverse=reverse*10+reminder ;
   beforeReverse=Math.floor(beforeReverse/10)
   
} 

console.log("After reversal:",reverse)


}reverseAnumber()

