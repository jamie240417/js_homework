//문제1
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

btn.addEventListener('click', function() {
    let title = document.querySelector('.title');
    title.textContent = '제목이 아닙니다';
});

//문제2
function sum (num1, num2){
    console.log( num1 + num2 );
}

sum(5,4);

//문제3
function isEvenOrOdd(num){
    if(num % 2 === 0){ 
        console.log('짝수입니다');
     }
     else {
        console.log('홀수입니다');
     }
}
isEvenOrOdd(8);

//문제4
const name = "변수";
const age = 20;

console.log(`이름: ${name}`);
console.log(`나이: ${age}`);