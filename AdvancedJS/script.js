//Function constructor with capital leter

/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);   
}

Person.prototype.lastName = 'Smith';

var John = new Person('John', 1990, 'Engeener');
var Jane = new Person('Jane', 1969, 'Math');
var Mark = new Person('Mark', 1948, 'Designer');

John.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(John.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);*/

//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var John = Object.create(personProto);
John.name = 'John';
John.yearOfBirth = 1990;
John.job = "Engineer";

var Jane = Object.create(personProto, 
{
    name: {value: 'Jane' },
    yearOfBirth: {value: 1969 },
    job: {value: 'designer'}
})
*/
//Primitives vs objects
/*
// Primitives

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects

var obj1 = {
    name: 'John',
    age: 25
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

// Functions

var age = 25;
var obj = {
    name: 'Leidy',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30,
    b.city = 'San Francisco'
};

change(age, obj);

console.log(age);
console.log(obj.city);
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));        
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAges(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - 0.67 * el);
    } else {
        return - 1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAges);
var heartReate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartReate);
*/

// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Tom');
designerQuestion('Alan');

interviewQuestion('teacher')('Carlos');
interviewQuestion('designer')('Andres');
interviewQuestion('Abogado')('María');

