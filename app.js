// CHAPTER # 26-30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var user = +prompt("Enter a positive number...");
// var number = document.write("Number  :" + " " + user + "<br>")
// var number1 = document.write("Round Off :" + " " + Math.round(user) + "<br>")
// var number = document.write("Floor :" + " " + Math.floor(user)+ "<br>")
// var number = document.write("Ceil :" + " " + Math.ceil(user)+ "<br>")
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var user = +prompt("Enter a negative number...");
// var number = document.write("Number  :" + " " + user + "<br>")
// var number1 = document.write("Round Off :" + " " + Math.round(user) + "<br>")
// var number = document.write("Floor :" + " " + Math.floor(user)+ "<br>")
// var number = document.write("Ceil :" + " " + Math.ceil(user)+ "<br>")
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var user_input = +prompt("Enter any number");
// var number_abs = Math.abs(user_input)
// document.write("The absolute number" + " " + user_input + " " + "is" + " "+ number_abs)

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice = Math.ceil(Math.random() * 6)

// document.write("Random Dice Value :" + " " + dice + "<br>")

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.ceil(Math.random() * 2)
// document.write(toss + "<br>")
// if(toss === 2){
//     document.write("toss : head")
// }
// else{
//     document.write("toss : tail")
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var number = Math.ceil(Math.random() * 100)
// document.write("The random number between 1 - 100 is :" + " " + number)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var user_weight = parseFloat(prompt("Enter Your Weigth..."))
// document.write("The weight of user is :" + " " + user_weight + "  " + "  kilograms" )

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

// var secret = 7;
// var user = +prompt("Enter a number between 1 - 10")
// if(user === secret){
//     alert("Congratulations")
// }
// else {
//     alert("You guess it wrong!")
// }

// 1. Write a program that displays current date and time in
// your browser

// var current_date = new Date()
// document.write("DATE : "+ " " +current_date)

// 2. Write a program that alerts the current month in words.
// For example December.

// var months= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
//  var date = new Date();
//  var month = date.getMonth()
//  var monthName = months[month]

//  alert(monthName)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var date = new Date();
// var day = date.getDay();
// alert("Today is " + " " + day)

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var convert = date.toString();
// var dayName = convert.slice(0,3)
// if(dayName === "sun" || "sat"){
//     alert("It's Fun Day")
// }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var date = new Date();
// var dateNum = date.getDate()
// if(dateNum < 16){
//     alert("First Fifteen Days Of The Month")
// }
// else{
//     alert("Last Fifteen Days Of The Month")
// }

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

//CHAPTER # 35 -38

// 1. Write a function that displays current date & time in your 
// browser.

// function showDate (){
//     var date = new Date()
//     document.write(date)
// }

// showDate();

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function greetings() {
//  var firstName = prompt("Enter Your First Name");
//  var lastName =  prompt("Enter Your Last Name");
//  var fullName = firstName + " " + lastName;
//  alert("Welcome" + " " + fullName)
// }

// greetings()

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers

// function sum() {
//     var number1 = +prompt("Enter first number")
//     var number2 = +prompt("Enter last number")
//     var sum = number1  + number2;
//     alert(sum)
// }

// sum()

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculator() {
//     var number1 = +prompt("Enter first number")
//     var sign = prompt("Enter Operator")
//     var number2 = +prompt("Enter last number")
//     if (sign === "+") {
//         alert(number1 + number2)
//     }
//     else if (sign === "*") {
//         alert(number1 * number2)
//     }
//     else if (sign === "-") {
//         alert(number1 - number2)
//     }
//     else if (sign === "/") {
//         alert(number1 / number2)
//     }
//     else if (sign === "%") {
//         alert(number1 % number2)
//     }
//     else{
//         alert("Enter correct operator")
//     }
// }

// calculator()

// 5. Write a function that squares its argument.

// function square (){
//     var number = +prompt("Enter Any Number");
//     var square = number * number;
//     alert("Square of" + " " + number + " " + "is" + " " + square)
// }

// square()

// 6. Write a function that computes factorial of a number.

// function factorial(){
//     var number = +prompt('Enter a positive integer: ');

// if (number < 0) {
//     alert('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     alert("The factorial of" + " " + number + " " + "is 1.");
// }


// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     alert("The factorial of" + " " + number + " " + "is" + " " + fact);
// }
// }

// factorial()

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

// function count() {
//     var start = +prompt("Enter the start");
//     var end = +prompt("Enter the end");
//     for (var i = start; i < end; i++) {
//         document.write(i + "<br>")
//     }
// }

// count()

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

// function hypotenuse(){
// var base = +prompt("Enter the value of base");
// var perp = +prompt("Enter the value of perpendicular");
// var hyp = (perp * perp + base * base ) / 2

// alert("The hypotenuse is found to be" + " " + hyp)


// function square (){
//     var square = hyp * hyp
//     alert("The square of hypotenuse is" + " " + square)
// }
// square()
// }

// hypotenuse()

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(w,h){
//     var a = w * h;
//     alert("The area of rectangle is " + " " + a)
// }

// area(5,4)

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.


// function palindrome (){
//   var word = prompt ("Enter Your Word")
//    var check ;
//    for (var i = word.length - 1 ; i >= 0 ; i-- ){
// check += word [i]
// }
// if (check == "word"){
//  document.write (word + " " +  "is palindrome word " + "<br>")
// }
// }
// palindrome()

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of function 
// Page 3 of 4
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResources.com', 'o'));
