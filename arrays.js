// Array Problem solving
// *all problems are commented click CTRL + 'ظ' on the answer to run the code.*
// ****************************************

// 7-
// let str= prompt('enter a string').toLowerCase();
// let firstchrCounter=0;
// let secondChrCounter=0;

// function problem7(){
//     let chrStr = str[0];
//     console.log('first chr is : ' + chrStr);
//     let newStr = str.replaceAll(chrStr, 1);
//     console.log('new string : ' + newStr);
//     for(let i =0 ; i<newStr.length;i++){
//         if(newStr[i]== 1){
//             firstchrCounter++;
//         }
//     }
//     newStr = newStr.replaceAll(1,'');
//     console.log('new string : ' + newStr);

//     chrStr = newStr[0];
//     console.log('second chr is : ' + chrStr);
//     newStr = newStr.replaceAll(chrStr, 0);
//     console.log('new string : ' + newStr);

//     for(let i =0 ; i<newStr.length;i++){
//         if(newStr[i]== 0){
//             secondChrCounter++;
//         }
//     }
//     newStr = newStr.replaceAll(0,'');

//     if(newStr.length == 0 && firstchrCounter == 2 && secondChrCounter ==2){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
    
// }
// problem7();

// ****************************************

//8-
// let gameBoard = 
// [['X','O','O'],
// ['O','X','O'],
// ['O','X','X']];

// function problem8(gameBoard){
//     let firstRow = gameBoard[0];
//     let secondRow = gameBoard[1];
//     let thirdRow = gameBoard[2];
//     let checkWin;
//     function checkRow(arr){
//         if(arr[0] === arr[1] && arr[0] === arr[2]){
//             if(arr[0]=='X'){
//                 console.log('"X" WINS');
//                 checkWin =true;
//             }
//             else{
//                 console.log('"O" WINS');
//                 checkWin=true;
//             }
//         }
//         else{
//             checkWin =false;
//         }
//     }

//     checkRow(firstRow);
//     checkRow(secondRow);
//     checkRow(thirdRow);

//     if(checkWin == false){
//         function checkFirstCol(firstRow,secondRow,thirdRow){
//             if(firstRow[0] === secondRow[0] && firstRow[0] === thirdRow[0]){
//                 if(firstRow[0]=='X'){
//                     console.log('"X" WINS');
//                     checkWin =true;
//                 }
//                 else{
//                     console.log('"O" WINS');
//                     checkWin=true;
//                 }
//             }
//             else{
//                 checkWin =false;
//             }
//         }
//         function checkSecondCol(firstRow,secondRow,thirdRow){
//             if(firstRow[1] === secondRow[1] && firstRow[1] === thirdRow[1]){
//                 if(firstRow[1]=='X'){
//                     console.log('"X" WINS');
//                     checkWin =true;
//                 }
//                 else{
//                     console.log('"O" WINS');
//                     checkWin=true;
//                 }
//             }
//             else{
//                 checkWin =false;
//             }
//         }
//         function checkThirdCol(firstRow,secondRow,thirdRow){
//             if(firstRow[2] === secondRow[2] && firstRow[2] === thirdRow[2]){
//                 if(firstRow[2]=='X'){
//                     console.log('"X" WINS');
//                     checkWin =true;
//                 }
//                 else{
//                     console.log('"O" WINS');
//                     checkWin=true;
//                 }
//             }
//             else{
//                 checkWin =false;
//             }
//         }
//         checkFirstCol(firstRow,secondRow,thirdRow);
//         checkSecondCol(firstRow,secondRow,thirdRow);
//         checkThirdCol(firstRow,secondRow,thirdRow);
//         function checkRightDiag(firstRow,secondRow,thirdRow){
//             if(firstRow[0] === secondRow[1] && firstRow[0] === thirdRow[2]){
//                 if(firstRow[0]=='X'){
//                     console.log('"X" WINS');
//                     checkWin =true;
//                 }
//                 else{
//                     console.log('"O" WINS');
//                     checkWin=true;
//                 }
//             }
//         }
//         function checkLeftDiag(firstRow,secondRow,thirdRow){
//             if(firstRow[2] === secondRow[1] && firstRow[2] === thirdRow[0]){
//                 if(firstRow[2]=='X'){
//                     console.log('"X" WINS');
//                     checkWin =true;
//                 }
//                 else{
//                     console.log('"O" WINS');
//                     checkWin=true;
//                 }
//             }
//         }
//         checkRightDiag(firstRow,secondRow,thirdRow);
//         checkLeftDiag(firstRow,secondRow,thirdRow);
        
//     }
    
    
// }
// problem8(gameBoard);

// *******************************************

// 9-

// let arr = ['h','e','l','l','o'];
// let chr = 'l';
// let BeginIndex;
// let EndIndex;
// function problem9(arr,chr){
//     if(arr.includes(chr)){
//         BeginIndex = arr.indexOf(chr);
//         EndIndex = arr.lastIndexOf(chr);
//     }
//     console.log(BeginIndex,EndIndex);
// }
// problem9(arr,chr);

// *******************************************

//10-

// let arr=[1,2,3,4,5];
// let number = 7;

// function problem10(arr,number){
//     arr.sort(function(a,b){
//         if(a+b==number){
//             console.log(true);
//             console.log(`${a} + ${b} = ${number}`);
//         }
//     })
// }
// problem10(arr,number);