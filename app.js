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

var date = new Date();
