const a = +prompt("please enter the value of A:")
const b = +prompt("please enter the value of B:")
const c = +prompt("please enter the value of C:")
//Task 1
//   let result1 = a/b
//   let result2 = a % b;
//   console.log("Result:" + result1)
//   console.log("Remainder :" + result2)

////////////////////////////////////////////////////////////////////////////
 
//Task 2
// b==a
// a==b
// console.log("A:"+ b)
// console.log("B:"+ a)

//////////////////////////////////////////////////////////////////////////

//Task 3
// let x =(c-b)/a
// console.log("X:"+ x)


//////////////////////////////////////////////////////////////////////////

//Task 4
// let result ='';
// if(a>b){
//      result = a+b
// }
// else if(a==b){
//    result =a*b
// }
// else {
//     result= a-b
// }
// console.log("Result:" + result)

//////////////////////////////////////////////////////////////////////////
 
//Task 5 
// let discriminant = b*b - 4*a*c
// let x1 = '';
// let x2 = '';
// if(discriminant>0){
// x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
// x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
// console.log("X1:"+x1+"\n"+"X2:"+x2)
// }
// else if(discriminant==0){
//     x1=x2=-b / (2 * a);
//     console.log("X:"+x1)
// }
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log( `X1:${realPart} + ${imagPart}i \n  X2:${realPart} - ${imagPart}i`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Task-6
// var once = [' ','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
// var twos = [ ' ','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
// var tens = [ ' ','Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// let numLen = a.toString().length
// if (numLen>2){
//     console.log("Please enter two-digit number !")
// }
// else if (numLen==2 && a%10!=0 && a>=20){
//     let first =  Math.floor(a/10);
//     let second = a%10
//     console.log(tens[first]+" "+once[second])
// }
// else if (a>10 && a<20){
// let x = a%10
// console.log(twos[x])
// }
// else if (a%10==0){
//     let x =a/10
//     console.log(tens[x])
// }
// else {
//     console.log(once[a])
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Task7