/*var fristName = 'Leidy';
var born = 1992;
var date = 2019;

console.log('Nombre ' + fristName + ' Nacimiento ' + born  + born + ' Fecha ' + date);

var age = date - born;
console.log(age);

alert(age + fristName);
var lastName = prompt('what is your last name?');
console.log(fristName + lastName);*/

/****** Coding Chalenge 1 *********/
/** BMI = mass / height^2 = mass / (height * height) */
/*
var jhonMass = 75;
var jhonHeight = 1.70;
var marksMass = 95;
var marksHeight = 1.90;

var jhonBMI, marksBMI;
jhonBMI = jhonMass / (jhonHeight * jhonHeight);
marksBMI = marksMass / (marksHeight * marksHeight);
console.log(jhonBMI);
console.log(marksBMI);

var comparison = marksBMI > jhonBMI;
console.log(comparison);

console.log("is mark's BMI  higher than Jonh's? " + comparison); ***   end  ***/
/*
var isMarried = false;

if (isMarried) {
    console.log("Leidy is married");    
} else {
    console.log("Leidy is not married :)");
    
}

var jhonMass = 75;
var jhonHeight = 1.70;
var marksMass = 95;
var marksHeight = 1.90;

var jhonBMI, marksBMI;
jhonBMI = jhonMass / (jhonHeight * jhonHeight);
marksBMI = marksMass / (marksHeight * marksHeight);

if (marksBMI > jhonBMI) {
    console.log('Mark\'s BMI is grater than Jhon\'s');
} else {
    console.log('Jhon\'s BMI is grater than Mark\'s');
}*/
/*
var height = 0;

if (height) {
    console.log("Variable is defined!");
} else {
    console.log("Variable is not defined");
    
}*/

/****************  Coding challenge 2   *************/
/*
var johnsTeam = {
    score1: 209,
    score2: 114, 
    score3: 125
};

var mikesTeam = {
    score1: 209,
    score2: 114, 
    score3: 125
};

var maryTeam = {
    score1: 209,
    score2: 114, 
    score3: 125
};

var jhonScore = (johnsTeam.score1 + johnsTeam.score2 + johnsTeam.score3) /3;
var mikeScore = (mikesTeam.score1 + mikesTeam.score2 + mikesTeam.score3) /3;
var maryScore = (maryTeam.score1 + maryTeam.score2 + maryTeam.score3) / 3;

var winner = jhonScore > mikeScore ? console.log('Jhon\'s team is the winner with ' + jhonScore + ' average' ) :
console.log('Mike\'s team is the winner with ' + mikeScore + ' average' );

switch (true) {
    case jhonScore > mikeScore:
        console.log('Jhon\'s team is the winner with ' + jhonScore + ' average');
        break;
    case mikeScore > jhonScore:
        console.log('Mike\'s team is the winner with ' + mikeScore + ' average');
        break;
    case jhonScore === mikeScore:
        console.log('Jhon\'s team and Mike\'s team draw with ' + jhonScore);
        break;
    default:
        console.log('');        
        break;
}

switch (true) {
    case jhonScore > mikeScore && jhonScore > maryScore:
        console.log('Jhon\'s team is the winner with ' + jhonScore + ' average');
        break;
    case mikeScore > jhonScore && mikeScore > maryScore:
        console.log('Mike\'s team is the winner with ' + mikeScore + ' average');
        break;
    case maryScore > jhonScore && maryScore > mikeScore:
        console.log('Mary\'s team is the winner with ' + maryScore + ' average');
        break;
    case jhonScore === mikeScore && mikeScore === maryScore:
        console.log('Jhon\'s team, Mike\'s team and Mary\'s team draw with ' + jhonScore);
        break;
    default:
        console.log('');        
        break;
}*/ /**************** End ***********************/

/** *****************   Coding challenge 3 ************************ */
/*
function tipCalculator (bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200){
        percentage = .15
    } else {
        percentage = .1;
    }
    return percentage * bill;    
}

var bill = [124, 48, 268];
var tips = [], totalAmount = [];
for (let i = 0; i < bill.length; i++) {
    tips[i] = tipCalculator(bill[i]);
    totalAmount[i] = tips[i] + bill[i];    
}

console.log(tips);
console.log(totalAmount); **********   end  ************/

/** ************ Coding challenge 4 *********** */
/*
var jhon = {
    fullName: 'Jhon Smith',
    mass: 75,
    height: 1.70,
    caclBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark thompson',
    mass: 95,
    height: 1.90,
    caclBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

jhon.caclBMI(); // Esto hace que aparezca bmi definido, si no se pone, no aparece
mark.caclBMI(); 
console.log(jhon);
console.log(mark);*/
/*
if (jhon.caclBMI() > mark.caclBMI()) {
    console.log(jhon.fullName + ' has the higher BMI: ' + jhon.bmi);     
} else if (mark.caclBMI() > jhon.caclBMI()) {
    console.log(mark.fullName + ' has the higher BMI: ' +  mark.bmi);   
} else {
    console.log('both have the same BIM: ', john.bmi);    
}*/

/** ************ loop *********** */
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (let i = john.length -1; i >= 0; i--) {
    console.log(john[i]); 
}*/

/** ************ Coding challenge 5 *********** */

var jhon = {
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function() {
    this.tips = [];
    this.totalAmount = [];
    for (let i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 || bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.totalAmount[i] = bill + bill * percentage;
    }    
  },
};

var mark = {
  bills: [77, 475, 110, 85],
  tipCalculator: function() {
      this.tips = [];
      this.totalAmount = [];
    for (let i = 0; i < this.bills.length; i++) {
        var percentage;
        var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill>= 100 || bill <= 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.totalAmount[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
    var sum = 0;
    
    for (let i = 0; i < tips.length; i++) {
        sum = sum + tips[i];        
    }
    return sum / tips.length;
}
jhon.tipCalculator();
mark.tipCalculator();

jhon.average = calcAverage(jhon.tips);
mark.average = calcAverage(mark.tips);

console.log(jhon, mark);

if (jhon.average > mark.average) {
  console.log("Jhon's family paid more " + jhon.average);
} else {
  console.log("Mark's family paid more " + mark.average);
}
