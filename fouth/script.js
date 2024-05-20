//문제1 : 배열과 객체 만들기
const persons = [{
    name: "철수",
    age: 19,
    gender: "남"
},
{
    name: "짱구",
    age: 20,
    gender: "남"
},
{
    name: "유리",
    age: 21,
    gender: "여"
}
];

console.log(persons);


//문제2 :문제1에서 만든 데이터를 html에 보여주기

const personList = document.querySelector('.persons-container');

persons.forEach(function (person) {
    let html템플릿 = `<div class="person">
                    <h3 class="name">이름:${person.name}</h3>
                     <h5 class="age">나이:${person.age}</h5>
                     <h5 class="gender">성별:${person.gender}</h5>
                    </div>`;
                    personList.insertAdjacentHTML("beforeend", html템플릿);
});

//문제3) find 메소드: 배열을 활용하여 성별이 여자인 데이터를 한 명 찾아 콘솔에 출력

const genderW = persons.find((person) => {
    return person.gender === "여"
});

console.log(genderW);

//문제4) filter 메소드: 성별이 남자인 데이터를 필터링하여 콘솔에 출력해보세요.

const genderM = persons.filter((person) => {
    return person.gender === "남"
});

console.log(genderM);

//문제5) map : 모든 데이터의 나이에 10을 더한 새로운 배열을 콘솔에 출력

const testMap = persons.map((person) => {
    return {   
        name: person.name,
        age: person.age + 10,
        gender: person.gender,
        }
    })
console.log(testMap);


//문제6) sort 연습 문제: 나이순으로 정렬해보세요. (내림차순

persons.sort((a, b) => {
    return  b.age - a.age
});

//문제7)  destructuring (구조 분해 할당) 문법 활용 예시
const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이); 
console.log(주소); 