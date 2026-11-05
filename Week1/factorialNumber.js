//To find the factorial of a given number

function findFactorial()

{   let number = 6;
 
    let factorial = 1;
     
 for (let i=1;i<=number;i++)

    {
          factorial= factorial*i;

           }

    console.log(`The factorial of ${number} is `, factorial)


}findFactorial()