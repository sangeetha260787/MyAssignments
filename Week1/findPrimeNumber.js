//find a number is prime number or Not

function isPrime(number)

{
    if(number > 1)

    for (let i = 2; i < number; i++) 

   {
        if (number % i === 0) 
        {
               
            console.log("The number is not a prime number")
        }

               
    
    }    
    
    console.log("The number is  a prime number")

         

} isPrime(8)
