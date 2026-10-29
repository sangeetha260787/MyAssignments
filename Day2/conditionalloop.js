
var inputnumber=10;

if(inputnumber==0)
{
    console.log("The number is zero");
}

else if(inputnumber<0 && inputnumber%2==0 )
{
     console.log("Negative even number")
}

else if(inputnumber<0 && inputnumber%2!=0 )
{
     console.log("Negative odd number")
}

else if(inputnumber%2==0)
{
    console.log("Positive even number")
}
else
    console.log("Negative odd number")