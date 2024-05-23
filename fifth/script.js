//문제1 : 로컬스토리지 사용하기 
//객체
const user = {
    이름: "병수",
    나이: 20,
    주소: "시골",
};
//객체를 JSON 문자열로 반환 userJson
const userJson = JSON.stringify(user);
// 로컬 스토리지에  userJson 저장, setItem으로 저장하기
localStorage.setItem('user', userJson);

//로컬 스토리지에서 데이터 가져오기
const storedUserJSON = localStorage.getItem('user');
// JSON 문자열을 다시 객체로 변환
const storedUser = JSON.parse(storedUserJSON)

console.log(storedUser);

//조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요

const changeAge = () => {
    const storedUserJSON = localStorage.getItem('user');
    const storedUser = JSON.parse(storedUserJSON);
    storedUser.나이 = 30;
    const updateUserJSON = JSON.stringify(storedUser);
    localStorage.setItem('User', updateUserJSON);
    console.log('user', updateUserJSON);
}

changeAge();

//
const removeUser = () => {
    localStorage.removeItem("user");
};
removeUser();
// localStorage.removetem("")




//문제2 : 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요.

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> response.json())
.then((data) => console.log(data))