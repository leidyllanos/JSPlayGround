//*******************Function constructor with capital leter**************
/*
var Person = function(name, yearOfBirth, job) {
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
console.log(Mark.lastName);

/*******************Object.create*************************
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
/**********Primitives vs objects*******************
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
    return 2018 - el;
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

console.log(years);
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAges);
var heartReate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(heartReate);
*/
/************** Functions returning functions*********************
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


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);    
}

game();

 (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);  
 })();

 //console.log(score);

 (function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);  
 })(); */

/*************Clousures ******************

 function retirement(retirementAge) {
     var a = 'Years left until retirement.';
     return function(yearOfBirth) {
         var age = 2016 -yearOfBirth;
         console.log((retirementAge - age) + ' ' + a);         
     }
 }

 var retirementUS = retirement(66);
 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);

 retirementUS(1990);
 retirementGermany(1990);
 retirementIceland(1990);
 

 function interviewQuestion(job) {
     return function(name) {
         if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
         } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
         } else {
            console.log('Hello ' + name + ', what do you do?');
         }
     }
 }

interviewQuestion('designer')('Lau'); */

/******************Bind, call and apply ************** 

var john = {
    name: 'John',
    age: 26,
    job: 'Engineer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentlement! I\'m ' + this.name +
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
        } else if(style === 'friendly'){
            console.log('Hey! what\'s up? I\'m '+ this.name + ', I\'m a ' +  this.job +
            ' and I\'m  ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 30, 
    job: 'Designer'
};
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('nigth');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afernoon');

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

function isFullAges(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAges.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/**************Quiz challenge**************** */

//To make private code and it doesn't interfere with  other programers code
//use : (function () {})(); estructure

(function() {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  var q1 = new Question(
    "Is JavaScript the coolest programing language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questions = [q1, q2, q3];

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your currentscore is:" + score);
    console.log("_______________________________");
  };

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var number = Math.floor(Math.random() * questions.length);
    questions[number].displayQuestion();

    var choose = prompt("Choose the correct answer ");

    if (choose !== "exit") {
      questions[number].checkAnswer(parseInt(choose), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
