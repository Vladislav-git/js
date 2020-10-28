'use strict';

let money = prompt("Your budget?");
let time = prompt("Enter Date in format YYYY-MM-DD");
let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: '',
		income: [],
		savings: false
};

for (let i = 0; i < 2; i++) {

	let question1 = prompt('Enter expenses info');
	let question2 = prompt('How much it cost');
	let expenses = {question1,question2};

	if ((isNaN(question2)) === false && question1 != null &&
	question2 != null && question1 != '' && question2 != '' &&
	question1.length > 0 && question2.length < 50 && question2 > 0) {

		appData.expenses[question2] = question2;

	} 
	else {
		alert('Enter data correctly');
		console.log(typeof(question2))
		i--;
	}
};

console.log(appData.budget/30);
