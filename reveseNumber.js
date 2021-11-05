function reverseNumber(number)
{
    var rem=0;
    while(number)
    {
        rem *= 10;
        rem += n%10;
        n = Math.floor(number/10);
    }
    return rem;
}

console.log(reverseNumber(876)); //output: 678
console.log(reverseNumber(2340)); //output: 432
console.log(reverseNumber(1737822)); //output: 2287371
console.log(reverseNumber(124746)); //output: 647421
