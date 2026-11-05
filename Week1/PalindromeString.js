function palindromeString()

{    
    let originalString ="madam"
    let reversedstring =" ";
    for(let i=originalString.length-1;i>=0;i--)
    {
        reversedstring+=originalString[i];
    }
   console.log(reversedstring)
}
palindromeString()