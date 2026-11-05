//findthe sum of the given number 
function sumofNumber()

{
    let number=123456;
    let sum=0;

    while(number>0)

        {
            let add = number%10;
            sum=sum+add;
            number = Math.floor(number / 10);
                         
              
        } console.log(`The sum of ${number} is`,sum) ;

         
} sumofNumber()


