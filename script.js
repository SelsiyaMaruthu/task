
  
  // 1.Print the odd numbers in an array
// function example
  var arr = [5,6,7,8,9];
  var result = [];
  function odd(arr) {
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0)
      {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(odd(arr));
  
  //Anonyomus Function
  var arr = [5,6,7,8,9];
  var result = [];
  var odd = function (arr) {
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0)
       {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(odd(arr));
  
  //IIFE (Immediately Invoked Function Expression)
  (function odd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0) 
      {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([8,9,10,11,12]);
  
  //Arrow Function (ES6)
  const od = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(od([9,10,11,12,13,14]));


 // 2.Convert all the strings to title caps in a string array 

  //function example
  function caps(a) {
    var b = a.toLowerCase().split(" ");
    var result = [];
    for(var i = 0; i< b.length; i++){
       b[i] = b[i][0].toUpperCase() + b[i].slice(1);
    }
    result.push(b);
 return b.join(" ");
 }
 console.log(caps("guvi is a learning platform"));

//anonymous function example
var caps = function (a) {
  var b = a.toLowerCase().split(" ");
  var result = [];
  for(var i = 0; i< b.length; i++){
     b[i] = b[i][0].toUpperCase() + b[i].slice(1);
  }
  result.push(b);
return b.join(" ");
}
console.log(caps("guvi is a learning platform"));

//IIFE (Immediately Invoked Function Expression)
(function caps(a) {
      var b = a.toLowerCase().split(" ");
      var result = [];
      for(var i = 0; i< b.length; i++){
         b[i] = b[i][0].toUpperCase() + b[i].slice(1);
      }
      result.push(b);
   console.log(b.join(" "));
   })
   ("guvi is a learning platform");

 //Arrow Function (ES6)
var caps =(a) =>{
    var b = a.toLowerCase().split(" ");
    var result = [];
    for(var i = 0; i< b.length; i++){
       b[i] = b[i][0].toUpperCase() + b[i].slice(1);
    }
    result.push(b);
 return b.join(" ");
 }
 console.log(caps("guvi is a learning platform"));


//3.Sum of all numbers in an array   
//function example
var a = [1,2,3,4,5];
var add = 0;
function sum(a)
{
  for(var i=0; i<a.length; i++)
  {
    add = a[i]+add;
  }
  return add;
}
console.log(sum(a));

// Anonyomus Function
 var a = [1,2,3,4,5];
var add = 0;
 var sum = function (a)
{
  for(var i=0; i<a.length; i++)
  {
    add = a[i]+add;
  }
  return add;
}
console.log(sum(a));

//IIFE (Immediately Invoked Function Expression)
     (function sum(a) {
       var add = 0
         for (var i = 0; i < a.length; i++) 
        {
          add = a[i]+add; 
        }
        console.log(add);
      })([1,2,3,4,5]);

     // arrow function
      var sum = (a) => {
           var add = 0
             for (var i = 0; i < a.length; i++) 
            {
              add = a[i]+add; 
            }
            return add;
          } 
          console.log(sum([1,2,3,4,5]));
    

     e
