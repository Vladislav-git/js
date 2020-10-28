'use strict';

let money = prompt("Your budget?");
let time = prompt("Enter Date in format YYYY-MM-DD");
let question1 = prompt('DDD');
let question2 = prompt('www');

console.log(money);
console.log(time);
console.log(question1);
console.log(question2);

let expenses = {question1,question2};
let appData = {
		budget: money,
		timeData: time,
		expensesData: expenses,
		optionalExpenses: '',
		income: [],
		savings: false
};

console.log((appData.budget-expenses.question2)/30)
