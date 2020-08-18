/* 객체 생성 1 */
let person = {
    name: 'peter',
    age: 25,
    height: 180, 
    weight: 80,
    checkHW: function() {
        return this.height - this.weight;
    }
}
let personName = person.name; // 속성에 접근
let personName = person['name'];
let checkHeightWeight = person.checkHW(); // 메소드에 접근

/* 객체 생성 2 */
let person = {};

person.name = 'peter';
person.age = 25;
person.height = 180;
person.weight = 80;
person.checkHW = function() {
    return this.height - this.weight;
};

/* 객체 생성 3 */
let person = new Object();

person.name = 'peter';
person.age = 25;
person.height = 180;
person.weight = 80;
person.checkHW = function() {
    return this.height - this.weight;
};
person.name = 'john'; // 속성값 변경
person['name'] = 'john';

delete person.name; // 속성 제거
person.name = ''; // 제거하지 않고 속성값만 비우기


/* 객체 생성 4 
    : 여러 객체 생성하기 */
function Person(name, age, height, weight) { 
    // 생성자 함수의 이름은 주로 대문자로 표기
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.checkHW = function() {
        return this.height - this.weight;
    }
}
 // new 키워드로 객체 생성
let peterPerson = new Person('peter', 25, 180, 80);
let johnPerson = new Person('john', 24, 175, 70);