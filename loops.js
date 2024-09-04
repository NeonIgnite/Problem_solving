// Problem solving sheet 2
// *all problems are commented click CTRL + 'ظ' on the answer to run the code.*

// 1-
// function problem1(){
//     let firstNo = +prompt('enter the first number');
//     let secondNo = +prompt('enter the second number');
//     let sum = firstNo +secondNo;

//     if( sum == 15 || firstNo == 15 || secondNo == 15){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// problem1();

// **********************************************

// 2-
// function problem2(){
//     let num = +prompt('enter a number');

//     if(num > 0 && num / 1 != undefined ){ //checking if the number is not negative and is numeric value
//         let sqrtNum = Math.sqrt(num); // getting the square root of the given number
//         if(Number.isInteger(sqrtNum)){// checking if the sqaure root is integer or not if true then number is perfect square
//             console.log(`${num} is perfect square`);
//         }
//         else{
//             console.log(`'${num}' is not perfect square`)
//         }
//     }
//     else{
//         console.log('please enter a valid Integar number ')// if the user entered an invalid value
//         console.log(Number.isInteger(num));
//         return false;
//     }
// }
// problem2();

// **********************************************

//3-
// let x1 = 1;
// let x2 = 2;
// let x3 = 3;
// let x4 = 4;
// let x5 = 5;

// function problem3(x1,x2,x3,x4,x5){
//     let arr = [x1,x2,x3,x4,x5];
//     arr.forEach((el,index)=>{
//         if(el == 0){
//             console.log(`variable ${index+1} changed to 0`);
//         }
//     })
// }
// problem3(x1,x2,0,0,x5);

// **********************************************

//4-
// function problem4(){
//     let letter = prompt('enter a letter');

//     if((letter / 1) == letter || letter.length >1){// checking if the user enter a valid input not number and not more than 1 letter
//         console.log('enter a single letter');
//     }
//     else{
//         if(letter == letter.toLowerCase()){
//             console.log(letter.toUpperCase());
//         }
//         else{
//             console.log(letter.toLowerCase());
//         }
        
//     }
// }
// problem4();

// **********************************************

//5-
// let firstNo = +prompt('enter the first nuumber')
// let secondNo = +prompt('enter the second nuumber');

// function problem5(){
//     let sum =0;
//     if(firstNo<secondNo){
//         for(let i = firstNo;i<=secondNo;i++){
//             if(i%2 == 1){
//                 sum+=i;
//             }
//         }
//         console.log(`the sum of the Odd numbers is "${sum}"`);
//     }
//     else{
//         console.log('first number must be smaller than second number');
//     }
// }
// problem5();

// **********************************************

//6-
// let NoOfNumber = +prompt('enter the number of numbers you want to enter');

// function problem6(){
//     let arr =[];
//     for(let i = 0; i<NoOfNumber;i++){
//         let number = +prompt('enter a number');
//         arr[i]=number;
//     }
//     if(arr.includes(4) || arr.includes(7)){
//         console.log('its your lucky day');
//     }
//     else{
//         console.log('its not your lucky day');
//     }
// }
// problem6();

// **********************************************

//7-
// let number = +prompt('enter the number');

// function problem7(){
//     for(let i =0;i<=number;i++){
//         if(Number.isInteger(number/i)){
//             console.log(i);
//         }
//     }
// }
// problem7();

// **********************************************

// 8-
// let primeNumber = +prompt('enter a number');

// function isPrime(num) { 
// 	for (let i = 2; i <= Math.sqrt(num); i++) { 
// 		if (num % i === 0) { 
// 			return false; 
// 		} 
// 	} 
// 	return num > 1; 
// } 

// function problem8(n) { 
// 	for (let i = 2; i <= n; i++) { 
// 		if (isPrime(i)) { 
// 			console.log(i); 
// 		} 
// 	} 
// } 

// problem8(primeNumber);

// **********************************************

//9-

// let noOfNumbers = +prompt('enter the number of numbers');
// let sum=0;
// let oddCounter=0;
// let evenCounter=0;

// function problem9(){
//     for(let i=0; i<noOfNumbers;i++){
//         let number = +prompt('enter the ' + (i+1) + ' number');
//         sum+=number;
//         if(number%2==0){
//             evenCounter++;
//         }
//         else{
//             oddCounter++;
//         }
        
//     }
//     console.log(`
//     the sum of the numbers is "${sum}" 
//     and the number of odd numbers is "${oddCounter}" 
//     and the number of even number is "${evenCounter}"`);
// }
// problem9();

// **********************************************

//10-
// let numberOfLines= +prompt('enter the number of lines');
// let number=1;
// function problem10(){
//     for(let i=0 ; i<numberOfLines;i++){
//         for(let j=0;j<3;j++){
//             console.log(number++);
//         }
//         number++;
//         console.log("PUM")
//     }
// }
// problem10();

// **********************************************

// 11-
// let firstNo = +prompt('enter the first number');
// let secondNo = +prompt('enter the second number');
// let product= firstNo * secondNo;

// function problem11(){
//     if(firstNo === 0 || secondNo === 0){
//         console.log('the output will be :' + 0)
//     }
//     else if(product<0){
//         console.log('the output will be Negative:' + product)
//     }
//     else{
//         console.log('the output will be Positive :' + product)
//     }
// }
// problem11();

// **********************************************

// 12-
// let grade = +prompt('enter the grade of the subject');
// let numberOfCompletedProjects= +prompt('enter the number of completed projects');

// function problem12(grade,numberOfCompletedProjects){
//     let finalGrade;
//     if(grade >=90 && numberOfCompletedProjects >10){
//         finalGrade=100;
//         console.log('congratulations you got : ' + finalGrade + "%");
//     }
//     else if(grade >=75 && numberOfCompletedProjects >5){
//         finalGrade=90;
//         console.log('congratulations you got : ' +finalGrade + "%");
//     }
//     else if(grade >=50 && numberOfCompletedProjects >2){
//         finalGrade=75;
//         console.log('congratulations you got : ' + finalGrade + "%");
//     }
//     else{
//         finalGrade=0;
//         console.log('sorry you failed : ' + finalGrade + "%");
//     }
// }
// problem12(grade,numberOfCompletedProjects);

// **********************************************
