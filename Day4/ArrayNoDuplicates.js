//Display if no duplicates in the Array

let numbers =[1,2,3,4,5]
for (let i=0;i<=numbers.length;i++)
{
   for(let j= i+1; j<=numbers.length;j++)

      {

         if(numbers[i]===numbers[j])

            {
          
               console.log("Duplicate values:", numbers[i]);

            }
                      
      }

} console.log("No Duplicates found")

