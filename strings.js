// String Problems
// *all problems are commented click CTRL + 'ظ' on the answer to run the code.*
// ****************************************

// 1-
// function problem1(){
//     let str = prompt('please enter a word');
//     //takes string from the prompt then change it to array
//     let strArray=str.split('');
//     // use reverse built in method to reverse the array  
//     console.log(...strArray.reverse());
//     // then use spread operator to spread te array.
//     }
// problem1();

// ****************************************

// // 2-
// function problem2(){
//     let firstStr = prompt('enter the first string');
//     let secondStr= prompt('enter the second string');
//     // Takes 2 strings
//     let strNo1 = firstStr.toLowerCase();
//     let strNo2 = secondStr.toLowerCase();
//     // converts the 2 strings to lowercase since its not case sensitve
//     if(strNo1 === strNo2){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
//     // check if the 2 strings are identical or not
// }
// problem2();

// ****************************************

// 3-
// function problem3(){
//     let str = prompt('please enter a string');
//     // takes string
//     if(str == str.toUpperCase()){
//         console.log(true)
//     }
//     else{
//         console.log(false);
//     }
//     // checks if the str is all uppercase or not
// }
// problem3();

// ****************************************

// 4- first solution
// let str = prompt('enter string');
// let begin = +prompt('enter the index you want to start from');
// let end = +prompt('enter the index you want to end at');
// // takes string and index of the begining and ending to cut from
// function problem4(str,begin,end){
//     let strArray=str.split('');
//     // convert str to array
//     console.log(...strArray.splice(begin,end));
//     // using splice method and then spread operator the wanted result will appear.
// }
// problem4(str,begin,end);

// 4- second Solution
// function problem4(){
//     let str = prompt('enter string');
//     let begin = +prompt('enter the index you want to start from');
//     let end = +prompt('enter the index you want to end at');
//     // takes string and both index
//     console.log(str.slice(begin,end+1));
//     // return a new string from both index
//     // the +1 in end because the end is not included in the slice function
// }
// problem4();

// ****************************************

// 5-
// function problem5(){
//     let firstName = prompt('enter first name');
//     let secondName = prompt('enter second name');
//     let thirdName = prompt('enter third name');
    
//     let wholeName= firstName.concat(" ",secondName.concat(" ",thirdName));
//     // using concat function instead of + operator
//     console.log(`your full name is : ${wholeName}`);
// }
// problem5();

// ****************************************

// 6-

// function problem6(){
//     let str = prompt('enter a string');
//     let strReverse = str.split('').reverse().join('');
//     // after taking the string is converted to array then is reversed then rejoined to string again after the reverse
//     str == strReverse ? console.log(true) :console.log(false);
//     // check if the entered string is equal to reversed string or not
// }
// problem6();

// ****************************************

// 7-
// function problem7(){
//     let str = prompt('enter a string');
//     console.log(str.trim());
//     // using trim method white spaces from both sides are removed
// }
// problem7();

// ****************************************

// 8-

// function problem8(){
//     let str = prompt('enter a string');

//     if(str.toLowerCase().startsWith('ww.') && str.toLowerCase().endsWith('.eraa')){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
//     // checks if the URL starts with ww. or .eraa and changes the string to lowercase to prevent errors
// }
// problem8();

// ****************************************

// 9-

// function problem9(){
//     let str = prompt('enter a string');

//     console.log(str.replaceAll('o','').replaceAll('O',''));
//     // replacing all O's by nothing and return the value 
// }
// problem9();

// ****************************************

// 10-
// function problem10(){
//     let firstStr = prompt('enter first string');
//     let secondStr = prompt('enter second string');
//     let thirdStr = prompt('enter third string');
//     let checkStr;

//     if(firstStr.includes(secondStr)){
//         checkStr = true;
//     }
//     else{
//         checkStr = false;
//         console.log(`${secondStr} is not in the string`)
//     }
//     // checks if the first string is included in the main string or nor
//     if(firstStr.includes(thirdStr)){
//         checkStr = true;
//     }
//     else{
//         checkStr = false;
//         console.log(`${thirdStr} is not in the string`)
//     }
//     // checks if the second string is included in the main string or nor
//     console.log(checkStr);
// }
// problem10();