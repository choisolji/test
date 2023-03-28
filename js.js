'use strict'; //정석적인 문법을 사용할 수 있게 함

//let VS var
//var는 어디에서 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올리게끔 함(hoisting)
//지역변수로 쓰려고 해도 전역처럼 사용됨
//let을 이용하는게 문법적으로 정확히 사용할 수 있음

//const === 값을 한번 지정하면 다시는 값을 변경 할 수 없는 변수
const count = 17;
console.log(`value: ${count}, type: ${typeof count}`);
/* === */console.log('value: ' + count + ', type: ' + typeof count);
console.log(`string literals: 1+2 = ${1 + 2}`);

const brendan = 'brenden';
console.log(`hi ${brendan}!`);
/* === */console.log('hi ' + brendan + '!');

///////////////////////////////////////////////////////////////////////////////

//||와 &&를 사용할때 주의할 점 - 여러개의 값을 체크하는 경우 앞에서 결론이 나면 뒤의 값은 체크하지 않음
//예시
//console.log(`or:${value1 || value2 || check()}`);
//==> value1과 value2가 false일 경우 check() 함수가 실행 되나 value1이 true 일 경우 이미 true 값을 반환하기 때문에 뒷 부분은 체크하지 않고 check() 함수 실행 안됨
//console.log(`and:${value1 && value2 && check()}`);
//&&일 경우에도 마찬가지로 value1이나 value2 중 이미 false일 경우 이미 false로 결론이 났으므로 check() 함수 실행 안됨
//이를 이용하여
//nullableObiect && nullabelObject.something  <== nullableObiect가 null일 경우에만 nullabelObject.something 값을 가져온다
//이것은
/*
if(nullableObiect != null){
    nullabelObject.something
}
*/
//와 같다

///////////////////////////////////////////////////////////////////////////////

const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

///////////////////////////////////////////////////////////////////////////////

//조건 ? value1 : value2;
const name = 'ellie';
console.log(name === 'ellie' ? 'yes' : 'no');

//switch
const browser = 'Firefox';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'Firefox': //여러개의 조건이 출력값이 같다면 한꺼번에 써도 됨
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

///////////////////////////////////////////////////////////////////////////////

//loop
let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}

do{
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

for(let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}

///////////////////////////////////////////////////////////////////////////////

//function

function showMessage(message, from = 'unknown'){ //정의되지 않은 파라미터의 default 값을 미리 지정할 수 있다
    console.log(`${message} by ${from}`);

    //return 값이 없는 경우에는 return undefined;가 생략 된 것
}
showMessage('Hi!');

printAll('d', 'dd'); //function name() {} 이런식으로 정의된 함수는 꼭 밑에서 호출할 필요 없이 선언되기 전에도 사용 가능하나,
//const name = function(){} 이런식으로 정의하게 되면 선언된 이후 호출 가능함(let과 var의 차이점과 비슷)
function printAll(...args){ //파라미터를 배열로 넣을때
    for(const arg of args){ //배열의 값을 하나씩 전부 출력
        console.log(arg);
    }
    /*===*/ args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie', 'hi!');

function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }

    //이거 보다는
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
    //이런식으로 조건에 맞지 않은 경우 빠르게 함수를 return 시키는 것이 더 좋은 코딩 방법
}

function randomQuiz(answer, printYes, printNo){ //함수를 전달해서 호출하는 것을 콜백함수라고 함
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes!');
}
const printNo = function print(){ //함수에 이름을 붙이면 디버깅할때 함수 이름이 나오게 하기 위해서 사용함
    console.log('no!');

    //print(); //혹은 함수 안에서 자신의 함수를 다시 호출할때도 사용함
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simplePrint1 = function(){
    console.log('simplePrint');
}
/*===*/ const simplePrint2 = () => console.log('simplePrint');
const add = (a, b) => a + b; //함수를 간단히 표현 가능하며 이렇게 사용하면 a + b를 return 하라는 뜻
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}; //내용이 길 경우에는 {} 블럭을 넣어서도 사용 가능하며 이런 경우에는 return을 사용해야함

(function hello(){
    console.log('IIFE'); //함수를 선언함과 동시에 호출
})();

const calculate = (command, a, b) => {
    switch(command){
        case '+':
            console.log(`${a} ${command} ${b} = ${a + b}`);
            break;
        case '-':
            console.log(`${a} ${command} ${b} = ${a - b}`);
            break;
        case '/':
            console.log(`${a} ${command} ${b} = ${a / b}`);
            break;
        case '*':
            console.log(`${a} ${command} ${b} = ${a * b}`);
            break;
        default:
            console.log('error!');
            break;
    }
}
calculate('*', 4, 2);

///////////////////////////////////////////////////////////////////////////////

//class
//class는 틀만 정의해놓고 한번만 선언함
//class를 이용해서 실제로 데이터를 넣어서 만든게 object
//class는 정의만 한 거라서 데이터에는 올라가지 않지만 데이터가 들어가면 object가 됨

class Person {
    //constructor(생성자)
    constructor(name, age){ //생성자를 이용해서 나중에 object를 만들 때 필요한 데이터를 전달
        //fields
        this.name = name; //전달받은 데이터를 클래스에 존재하는 필드에 할당
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}
const ellie = new Person('ellie', 20);
ellie.speak();

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        /*
        if(value < 0){
            throw Error('age can not be negative'); //콘솔에 에러 표시
        }
        */
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

class Experiment{
    publicField = 2;
    #privateField = 0; //클래서 내부에서만 값이 보임
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){ //오브젝트에 상관 없이 클래스 자체에 연결됨
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher(); //오브젝트.methods(); 의 방식으로 호출되던 methods와는 달리 class에 직접 연결되어 있다
//들어오는 데이터에 상관 없이 공통적으로 클래스에서 사용하는거라면 static을 사용하는 것이 효율적이다

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}//Rectangle 클래스를 Shape 클래스에 상속
class Triangle extends Shape{
    draw(){
        super.draw(); //상속된 클래스에서 부모 클래스의 methods를 변경할 경우 변경된 methods로 호출이 되기 때문에 super를 이용하여 변경되기 전 부모 클래스의 methods 호출 가능
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height)/2; //필요한 부분만 업데이트해서 사용 가능
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); //Rectangle 클래스를 Shape 클래스에 상속되어 있으므로 Shape의 fields, methods가 자동으로 포함됨
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
//instanceof => 오브젝트는 클래스를 이용해서 만들어진 새로운 instance / instanceof는 해당 오브젝트가 해당 클래스를 이용하여 만들어진 instance 인지 아닌지 체크
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true - 자바스크립트에서 만들어진 모든 오브젝트는 자바스트립트의 Object에 상속 됨
console.log(triangle.toString()); //자바스크립트의 오브젝트에 있는 toString이라는 함수를 overwriting해서 사용 가능함

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference <-자바스크립트 내부에 포함되 있는 오브젝트가 어떤게 있는지 확인 가능

//class + callback
class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
        }
    }
}
function printNum(num){
    console.log(`Wow! ${num}`);
}
function alertNum(num){
    alert(`alert! ${num}`);
}
const printCounter = new Counter(printNum);
const alertCounter = new Counter(alertNum);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

///////////////////////////////////////////////////////////////////////////////

//object
//object = {key: value};

const solji = {name: 'solji', age: 4};
solji.hasJob = false;
console.log(solji.hasJob);
delete solji.hasJob;
console.log(solji.hasJob);
console.log(solji['name']); //object.key 방식 말고도 이렇게 배열 형식으로도 호출이 가능함
solji['hasJob'] = false; //key를 추가할 때도 마찬가지
console.log(solji.hasJob);
function printValue(obj, key){
    console.log(obj[key]); //해당 방식은 이처럼 명확히 정해진 key값이 아닌 파라미터로 받아와야한다던가 하는 딱 정해지지 않은 상황에서 사용 가능함
}
printValue(solji, 'name');

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = makePerson('ellie', 30);
console.log(person3);
const person4 = new Person4('dave', 4); //호출할때도 클래스에서 오브젝트를 만드는것처럼
console.log(person4);
function makePerson(name, age){
    return{
        /*
        name: name,
        age: age
        이렇게 key와 value가 이름이 동일하다면 생락 가능
        */
       name,
       age
    }
}
function Person4(name, age){ //위의 함수와 동일한 함수지만, 클래스 방식으로 만들어진 함수
    //this = {}; 가 생략 됨
    this.name = name;
    this.age = age;
    //return this; 가 생락 됨
}

console.log('name' in solji); //true 해당 키가 해당 오브젝트 안에 있는지 확인
console.log('age' in solji); //true
console.log('random' in solji); //false
console.log(solji.random) //undefined

for(let keyInSolji in solji){ //해당 오브젝트 안의 키를 전부 호출
    console.log(keyInSolji);
}
const testArray = [1, 2, 5, 6];
for(let testArrayValue of testArray){ //배열의 값을 전부 출력
    console.log(testArrayValue);
}

const user2 = {name: 'ellie', age: 20};
const user3 = user2;
user3.name = 'coder';
console.log(user2); //user3이 user2와 같은 데이터를 가르키고 있기 때문에 user3의 값을 변경해도 user2에 같이 반영됨
const user4 = {};
Object.assign(user4, user2); //해당 문제를 일으키지 않기 위해 user4는 user2의 데이터를 직접 가르키는게 아닌 복제하는 방법
/*===*/const user5 = Object.assign({}, user2); // 위의 방식을 변수 선언 때 한번에 하기
console.log(user4);
console.log(user5);
const fruit1 = {color: 'red', price: 200};
const fruit2 = {color: 'green', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //복제할 오브젝트를 여러개 지정할 수 있으나 같은 이름의 key가 있다면 뒤의 값이 덮어 씌워지는 방식, 겹치치 않는 키값은 추가되어 합쳐짐
console.log(mixed);

///////////////////////////////////////////////////////////////////////////////

//array

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //배열의 마지막 값

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));

fruits.push('딸기', '복숭아'); //배열의 마지막에 값 추가
console.log(fruits);

fruits.pop(); //배열의 마지막 값 삭제
console.log(fruits);

fruits.unshift('키위', '레몬'); //배열의 맨 앞에 값 추가
console.log(fruits);

fruits.shift('키위', '레몬'); //배열의 맨 앞의 값 삭제
console.log(fruits);

fruits.splice(1, 1); //지정된 위치의 값 지우기 splice(몇번째 순서를 지울 것인가, 그 위치부터 몇개를 지울 것인가); 뒷 부분의 값이 입력 안되면 해당 위치부터 그 이후는 전부 지움
console.log(fruits);
fruits.splice(1, 0, '키위', '수박'); //지정된 위치에 값 추가도 가능
console.log(fruits);

const fruit3 = ['배', '감'];
const newFruits = fruits.concat(fruit3); //배열의 뒤에 새로운 배열을 합함
console.log(newFruits);

console.log(fruits.indexOf('키위')); //해당 값의 index를 호출함 - 값이 없는 경우 -1
console.log(fruits.includes('키위')); //해당 값이 있는지 boolean값으로 호출 - 값이 없는 경우 false
fruits.push('레몬');
console.log(fruits);
console.log(fruits.indexOf('레몬')); //동일한 값이 2개 일지라도 indexOf는 첫번째 값의 index만 가져옴
console.log(fruits.lastIndexOf('레몬')); //해당 값 중 마지막 값의 index를 가져옴

const stringResult = fruits.join(', and '); //배열의 모든 아이템을 string으로 반환함(구분자를 넣지 않는 경우 ,로 구분하여 출력됨)
console.log(stringResult);

const fruits2 = 'apple, banana, cherry, remon';
const arrayResult = fruits2.split(', ', 2); //구분된 string 값을 배열로 반환함 / split(구분자, 배열의 size);
console.log(arrayResult);

console.log(fruits);
const reverseResult = fruits.reverse(); //배열의 순서를 역순으로 바꿔줌
console.log(fruits); //기존의 값도 바뀜
console.log(reverseResult);

const newArrayResult = fruits.splice(0, 2); //배열의 일부 값을 삭제함 / splice(여기부터, 이 갯수만큼);
const sliceResult = fruits.slice(1, 3); //기존 값은 건드리지 않고 배열의 원하는 부분만 가져올 수 있음 / slice(여기부터, 여기까지(해당 index는 포함 안됨));
console.log(newArrayResult); //삭제된 값을 반환함
console.log(fruits); //splice된 값을 제외한 나머지 값만 저장됨
console.log(sliceResult);
console.log(fruits); //slice 시 기존 값은 변화 없음

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
]

const findResult = students.find(function(student, index){ //배열에서 원하는 값을 찾아주는 함수 / 콜백함수에는 boolean으로 결과가 나오는 것만 사용 가능하며 찾아진 첫번째 결과만 리턴됨
    return student.score === 90;
});
console.log(findResult);
const findResult2 = students.find((student) => student.name === 'D'); //arraw 함수를 이용해서 한줄로 보기 좋게
console.log(findResult2);

const filterResult = students.filter((student) => student.enrolled); //조건에 해당되는 값들을 배열로 리턴함
console.log(filterResult);

const mapResult = students.map((student) => student.score); //배열의 요소 하나하나를 콜백함수에서 가공된 상태로 리턴됨
console.log(mapResult);

const someResult = students.some((student) => student.score < 50); //배열의 요소 중에 해당 콜백함수가 true가 있는지 없는지 확인하여 리턴함
console.log(someResult); //50이하의 학생이 있으므로 true가 반환되었다
const everyResult = students.every((student) => student.score < 50); //배열의 요소에서 해당 콜백함수가 전부 true인지 확인하여 리턴함
console.log(everyResult); //전부 50이하는 아니므로 false가 반환되었다

const reduceResult = students.reduce((prev, curr) => { //배열의 있는 모든 요소들의 값을 누적하여 모아놓는 함수(파라미터에는 이전값과 현재값이 있는데 리턴된 값은 다음 반복된 차수에서 이전값으로 지정됨, 콜백 함수 뒤에 기본값을 입력하면 해당 값부터 시작)
    console.log('---------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
}, 0); //reduceRight -> 배열을 역순으로 누적시킴
console.log(reduceResult); //점수가 누적되어 다 더해진 값이 출력되었다

const mfjResult = students
    .map((student) => student.score) //여러개의 함수를 연달아 사용하는 것도 가능
    .filter((score) => score >= 50)
    .join();
console.log(mfjResult);

const sortResult = students
    .map((student) => student.score)
    .sort((a,b) => a - b) //배열의 값을 정렬시킴 b - a로 쓰면 큰 값부터
    .join();
console.log(sortResult);

///////////////////////////////////////////////////////////////////////////////

//json

//stringify(obj) 오브젝트를 json으로
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json); //json으로 변환할때 함수는 포함되지 않음

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); //오브젝트의 원하는 부분만 배열의 형태로 추가하여 json으로 변환이 가능하다

json = JSON.stringify(rabbit, (key, value) => { //콜백함수를 넣어서 좀더 세밀하게 원하는 결과값을 조정할 수 있다
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ssol' : value;
});
console.log(json); //콜백함수의 return값대로 key가 name일 경우 ssol 로 value를 변경하였음

//parse(json) json을 오브젝트로

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump(); //rabbit 오브젝트 안에 jump라는 함수가 있으나, json으로 변경될 때 함수는 포함이 되지 않으므로 해당 json을 다시 오브젝트로 변경하더라도 사라진 함수가 다시 포함되지는 않음
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); //마찬가지로 rabbit 오브젝트 안의 birthDate는 date 오브젝트였으나, json으로 변환할때 string으로 변경되었으므로, 다시 오브젝트로 바뀌었을때도 string으로 받아오기 때문에 getDate() 사용이 불가능함

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate()); //parse에 콜백함수를 이용하여 birthDate 키 값의 value를 다시 date 오브젝트로 변경하여 변환하니 getDate()를 다시 사용할 수 있게 되었다!

//jsondiff.com 서버에 요청했을때 첫번째로 받아온 데이터와 두번째로 받아온 데이터가 어떤 부분이 다른지 확인 가능(디버깅)
//jsonbeautifier.org 서버에서 받아온 json을 복붙할때 포맷이 예쁘게 정리됨 
//jsonparser.org json을 오브젝트 형태로 확인해보고 싶을때 유용한 사이트
//tools.learningcontainer.com/json-validator json을 붙여넣으면 json 소스에 이상이 있는지 확인 가능

///////////////////////////////////////////////////////////////////////////////

//async - callback

console.log('1');
setTimeout(() => console.log('2'), 1000); //자바스크립트는 쓰여진 순서에 맞게 실행되는 동기적인 언어이지만, setTimeout처럼 일부 함수는 작성된 순서와 상관 없이 실행되는 비동기 처리방식이다
console.log('3');

//Synchronous callback - 동기적 처리방식의 콜백
function printImmediately(print){ //함수 선언은 호이스팅되어 가장 위로 올라감
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback - 비동기적 처리 방식의 콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


//콜백 지옥 예제
/*
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);
*/
//콜백 지옥의 문제점
//1. 가독성이 너무 떨어짐
//2. 디버깅해야할때 찾기 어려움

///////////////////////////////////////////////////////////////////////////////

//promise
//정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행됐다면 처리된 결과값을 전달해주고, 문제가 발생했을시 에러를 전달함
//비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 사용 가능함

const promise = new Promise((resolve, reject) => {
    //doing son heavy work(network, read files)
    console.log('doing something...'); //promise를 만드는 순간 해당 콜백함수가 바로 실행됨
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});
promise
    .then((value) => { //promise가 정상적으로 실행됐다면(then) 해당 value 파라미터 값은 위의 promise의 resolve에서 전달된 값, 해당 값이 없으면 reject의 내용이 실행됨
        console.log(value);
    })
    .catch(error => { //에러가 발생했을때 처리할 콜백함수
        console.log(error);
    })
    .finally(() => { //성공을 하던 실패를 하던 무조건 실행되는 함수
        console.log('finally');
    });

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 계란`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 스크램블에그`), 1000);
});
/*
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
*/
/* === */getHen() //위와 같은 코드를 좀 더 깔끔하게(콜백함수를 전달할때 받아오는 밸류를 다른 함수로 바로 하나를 호출하는 경우에는 생략 가능)
    .then(getEgg)
    .catch(error => { //바로 위의 코드를 받아올 때 발생하는 에러를 처리하고 싶을때 바로 catch를 사용하여 바로바로 처리가 가능함
        return '빵';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

//콜백 지옥 예제 promise로 고쳐보기
/*
class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: user, role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
*/

///////////////////////////////////////////////////////////////////////////////

//async & await
//promise를 깔끔하게 쓸 수 있게함

function fetchUser(){
    return new Promise((resolve, reject) => {
        //do network reqeust in 10 secs...
        resolve('ellie1');
    });
}
/*===*/
async function fetchUser2(){ //async를 함수 앞에 붙여주면 코드블록을 자동으로 promise로 변환함
    //do network reqeust in 10 secs...
    return 'ellie2';
}
const user6 = fetchUser();
const user7 = fetchUser2();
user6.then(console.log);
user7.then(console.log);

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple(){
    await delay(2000); //async가 붙은 함수 안에서만 사용 가능, await이 붙은 함수가 실행될때까지 기다렸다가 이후 코드가 실행됨
    return '🍎';
}
async function getBanana(){
    await delay(1000);
    return '🍌';
}
function pickFruits(){
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
/*===*///위의 함수대로 promise의 체이닝을 너무 많이 사용하면 콜백지옥이나 다름 없음
async function pickFruits2(){
    const applePromise = getApple(); //await을 사용하면 병렬로 진행이 가능한 항목들도 직렬로 진행되기 때문에 비효율적이므로 병렬 실행 시킬 항목을 미리 promise로 만들어 즉시 실행 시키고
    const bananaPromise = getBanana();
    const apple = await applePromise; //해당 promise를 사용할때 await를 붙여 동기적으로 사용
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
pickFruits2().then(console.log);

// 하지만 위의 방법도 코드가 너무 지저분해지므로 아래 방법으로 정리가 가능함
function pickAllFruits(){
    return Promise
    .all([getApple(), getBanana()]) //promise.all()을 사용하면 배열의 형태로 넣은 promise들이 한꺼번에 실행됨
    .then(fruits => fruits.join(', '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]); //promise.race()는 배열의 형태로 넣은 promise 중 딱 하나만 먼저 실행되는 promise가 반환됨
}
pickOnlyOne().then(console.log);