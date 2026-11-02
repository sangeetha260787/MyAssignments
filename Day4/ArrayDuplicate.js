
//Display the  duplicates in the Array
let numbers =[10, 20, 10, 30, 20, 40, 10]
for (let i=0;i<numbers.length;i++)
{
   for(let j= i+1; j<numbers.length;j++)

      {
         if(numbers[i]===numbers[j])

            { 
               console.log("Duplicate values:", numbers[i]);

            }
          
        }

}

