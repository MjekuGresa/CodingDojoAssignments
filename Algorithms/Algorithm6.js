// Challenge 1
function a(){
    return 35;
}
console.log(a())
// Prediction: 35
// Output: 35

// Challenge 2
function a(){
    return 4;
}
console.log(a()+a());
// Prediction: 8
// Output: 8

// Challenge 3
function a(b){
    return b;
}
console.log(a(2)+a(4));
// Prediction: 6
// Output: 6

// Challenge 4
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));    
// Prediction: 3 9
// Output: 3 9

// Challenge 5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
// Prediction: 40
// Output: 40

// Challenge 6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// Prediction: 4
// Output: 4

// Challenge 7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// Prediction: 10 3 30
// Output: 10 3 30

// Challenge 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// Prediction: 3 4
// Output: 3 4

// Challenge 9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// Prediction: 2 5 8 11
// Output: 2 5 8 11

// Challenge 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// Prediction: 0 1 ... 9 0 1 ... 9 0
// Output: 0 1 ... 9 0 1 ... 9 0

// Challenge 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// Prediction: Nothing, the function is never called
// Output: Nothing

// Challenge 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// Prediction: Nothing, the function is never called
// Output: Nothing

// Challenge 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// Prediction: 10
// Output: 10

// Challenge 14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// Prediction: 15
// Output: 10

// Challenge 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// Prediction: 15 15
// Output: 15 15
