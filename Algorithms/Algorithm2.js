//1. Print 1 to x:
function printUpTo(x){
   if(x >0) {
       for(var i=1;i<=x;i++)
       { console.log(i); }
   }
   else {
       console.log("Negative number");
       return false;
   }
  }
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

//2. PrintSum:
function printSum(x){
    var sum = 0;
    //your code here
    for (var i=0; i<=x; i++)
    {   sum += i;
        console.log(i,sum);}
    return sum;
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

//3. PrintSumArray:
function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i];
      //your code here
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6