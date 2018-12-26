//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i] > 0)
      arr[i] = 'big';
  }
  return arr;
}
console.log(makeItBig([-1,3,5,-5]));

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function LowHigh(arr){
  var low=arr[0], high=arr[0];
  for(var i=0;i<arr.length;i++){
    if(arr[i] < low) 
      low = arr[i];
    else if(arr[i] > high)
      high = arr[i];
  }
  console.log(low );
  return high;
}
console.log(LowHigh([-1,-2,4,5,10]));

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function OneAnother(arr){
  var firstOdd, secondLast = arr[arr.length-2];
  for(var i=0;i<arr.length;i++)
  {
    if(!(arr[i] % 2 === 0))
    { 
      firstOdd = arr[i];
      break; 
    }
  }
  console.log(secondLast);
  return firstOdd;
}
console.log(OneAnother([2,3,5,6,7]));

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(arr){
  var new_arr=[];
  for(var i=0;i<arr.length;i++)
    new_arr[i] = 2*arr[i];
  return new_arr;
}
console.log(double([1,2,3]));

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr){
  var count =0;
  for(var i=0;i<arr.length;i++){
    if(arr[i] > 0)
      count++;
  }
  arr[arr.length-1] = count;
  return arr;
}
console.log(countPositives([-1,1,1,1]));

//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementSecond(arr){
  for(var i=0;i<arr.length;i++){
    if(!(i%2 ==0))
      arr[i] = arr[i]+1;
    console.log(arr[i]);
  }
  return arr;
}
console.log(incrementSecond([1,2,3,4,5]));

//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr)
{
    for(var i=arr.length-1;i>=0;i--)
    {
       if(i === 0) 
        break;
      else
       arr[i] = arr[i-1].length; 
    }
  return arr;
}
console.log(previousLengths(['hello','dojo','awesome']));

//Add Seven to Most - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr){
  var new_arr = [];
  for(var i=0;i<arr.length;i++)
    new_arr.push(arr[i] + 7);
  return new_arr;
}
console.log(addSeven([1,2,3]));

//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values)
function reverse(arr){
  for(var i=0;i<arr.length;i++)
    arr.reverse();
  return arr;
}
console.log(reverse([3,1,6,4,2]));

//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negative(arr){
  var new_arr = [];
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i] > 0)
      new_arr[i] = arr[i] * (-1);
    else
      new_arr[i] = arr[i];
  }
  return new_arr;
}
console.log(negative([1,-3,5]));

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hungry(arr){
  var countFood=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i] == 'food'){
      console.log('yummy');
      countFood ++;
    }
  }
  if(countFood == 0)
  console.log('I am hungry');
}
hungry([1,2,3,food,food,4]);
hungry([1,2,3,4]);

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr,num){
  for(var i=0;i<arr.length;i++)
    arr[i] = arr[i] * num;
  return arr;
}
console.log(scaleArray([1,2,3],3));





