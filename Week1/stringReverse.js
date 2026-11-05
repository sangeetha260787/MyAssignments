//String Reversal

function reverseString()

{    
    let originalString ="sangeetha"
    let reversedstring =" ";
    for(let i=originalString.length-1;i>=0;i--)
    {
        reversedstring+=originalString[i];
    }
   console.log(reversedstring)
}
reverseString()