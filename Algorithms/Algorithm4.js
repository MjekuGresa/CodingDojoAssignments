//1.Given an array and a value Y, count and print the number of array values greater than Y.
function GreaterThan(arr,y)
{
    var count=0;
    var new_arr=[];
    for(var i=0;i<arr.length; i++)
    {
        if( arr[i] > y )
        {
            count++;
            new_arr.push(arr[i]);
        }
    }
    console.log(new_arr)
    return count;
}
console.log(GreaterThan([1,2,3,4,5],2));


//2.Given an array, print the max, min and average values for that array.
function MaxMinAvg(arr)
{
    var max,min,avg,sum=0;
    max = arr[0];
    min = arr[0];
    for(var i=0;i<arr.length;i++)
    {
        sum += arr[i];
        if(arr[i]>max) { max = arr[i];}
        else if (arr[i]<min) { min = arr[i]; }
    }
    avg=sum/arr.length;
    console.log(max,min,avg);
}
MaxMinAvg([1,2,3,4,5]);


//3.Given an array of numbers, create a function that returns a new array where negative values 
//were replaced with the string ‘Dojo’.   
//For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr)
{
    var new_arr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i] < 0) { new_arr[i] = 'Dojo';}
        else { new_arr[i] = arr[i];}
    }
    return new_arr;
}
console.log(replaceNegatives([1,2,-3,-5,5]));


//4.Given array, and indices start and end, remove values in that index range, 
//working in-place (hence shortening the array).  
//For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr,x,y)
{
        var z = y-1;
        arr.splice(x,z);  //splice first parameter: index position; second parameter: how many elements to remove
        return arr;
}
console.log(removeVals([20,30,40,50,60,70],2,4));