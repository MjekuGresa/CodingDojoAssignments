//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function returnArr(){
    var arr = [];
    for(var i=1; i<= 255; i++) 
        arr.push(i);
    return arr;
}
console.log(returnArr());

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function evenSum(){
    var sum=0;
    for(var i=1; i<=1000;i++)
    {
        if(i%2 == 0) 
            sum +=i;
    }
    return sum;
}
console.log(evenSum());

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function oddSum(){
    var sum=0;
    for(var i=1; i<=5000;i++)
    {
        if(!(i%2 == 0))
            sum += i;
    }
    
    return sum;
}
console.log(oddSum());

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function ArraySum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++)
        sum += arr[i];
    return sum;
}
console.log(ArraySum([1,2,5]));
console.log(ArraySum([-5,2,5,12]));

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function ArrayMax(arr){
    var max = arr[0];
    for(var i=1;i<arr.length;i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}
console.log(ArrayMax([-3,3,5,7]));

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function ArrayAvg(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++)
    { sum += arr[i];}
    return sum/arr.length;
}
console.log(ArrayAvg([1,3,5,7,20]));

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function ArrayOdd(){
    var arr = [];
    for(var i=1;i<50;i+=2)
        arr.push(i);
    return arr;
}
console.log(ArrayOdd());

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function GreaterThanY(arr,y){
    var count=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]>y)
            count++;
    }
    return count;
}
console.log(GreaterThanY([1,3,5,7],3));

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function ArraySquare(arr){
    for(var i=0;i<arr.length;i++)
        arr[i] = arr[i] * arr[i]; 
    return arr;
}
console.log(ArraySquare([1,5,10,-2]));

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function ReplaceNegatives(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0 )
            arr[i] = 0;
    }
    return arr;
}
console.log(ReplaceNegatives([1,5,10,-2]));

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function MaxMinAvg(arr){
    var new_arr = [];
    var max=arr[0],min=arr[0],sum=0,avg;
    for(var i=0;i<arr.length;i++)
    {
        sum += arr[i];
        if(arr[i] > max )
            max = arr[i];
        if(arr[i] < min)
            min = arr[i];
    }
    avg = sum/arr.length;
    new_arr.push(max,min,avg);
    return new_arr;
}
console.log(MaxMinAvg([1,5,10,-2]));

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function SwapValues(arr){
    if(arr.length >=2){
        var temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;
    }
    return arr;
}
console.log(SwapValues([1,5,10,-2]));

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numberTostring(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i] < 0)
            arr[i] = 'Dojo';
    }
    return arr;
}
console.log(numberTostring([-1,-3,2]));