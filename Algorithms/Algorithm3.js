// 1.
function printAverage(x){
    var sum = 0;
    var avg;
    // your code here
    for(var i=0; i<x.length; i++)
    { sum += x[i]; }
    avg = sum/ x.length;
    return avg;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8,11,14]);
 console.log(y); // should log 8

//2
function returnOddArray(){
    // your code here
    var x=[];
    for(var i=1;i<=255;i+=2)
    { x.push(i); }
    return x;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]
 
//3
function squareValue(x){
    // your code here
    for(var i=0;i<x.length;i++)
    { x[i] = x[i]*x[i]; }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]