'use strict';

let money;
let time;

let start = () => {

	for (let i = 0; i < 1; i++) {

		money = +prompt("Your budget?");
		time = prompt("Enter Date in format YYYY-MM-DD");

		if (isNaN(money) === true || money == '' || money == null){

			alert('Incorrect data');
			i--;
		};
	};
}

start()

let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		optionalExpenses: {},
		income: [],
		savings: true,
		detectDayBudget: function () {
			for (let i = 0; i < 2; i++) {

				let question1 = prompt('Enter expenses info');
				let question2 = prompt('How much it cost');
				let expenses = {question1,question2};

				if ((isNaN(question2)) === false && question1 != null &&
				question2 != null && question1 != '' && question2 != '' &&
				question1.length > 0 && question2.length < 50 && question2 > 0) {

					appData.expenses[question2] = question2;

				} else {

					alert('Enter data correctly');
					i--;
				};
			};

			appData.moneyPerDay = +(appData.budget/30).toFixed(1);

			alert('Your daily budget ' + appData.moneyPerDay);
		},
		detectLevel: function () {
			if (appData.moneyPerDay < 100) {

				console.log('Minimal budget')

			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

				console.log('Midlle budget')

			} else if (appData.moneyPerDay > 2000) {

				console.log('High budget')

			} else {
				console.log('Error')
			}
		},
		checksavings: function () {
			if (appData.savings == true){

				let save = +prompt('Amount of your savings?');
				let percent = +prompt('At what percentage?');
				appData.monthIncome = +(save/100/12*percent).toFixed(1);
				alert('Income from your deposit ' + appData.monthIncome);
			}
		},
		chooseOptExpenses: function () {
			for (let i = 0; i < 3; i++) {
				let optExpData = prompt('Optional expenses?');
				appData.optionalExpenses[i+1] = optExpData
				console.log(appData.optionalExpenses)
			}
		},
		chooseIncome: function () {
			for (let i = 0; i < 1; i++) {
				let items = prompt('Additional income (separate with ,)');
				if (typeof(items) != 'string' || items == '' || items == null) {
					alert('Wrong data try again');
					i--;
					continue;
				};
				appData.income = items.split(',');
				appData.income.push(prompt('Something else?'));
				appData.income.sort();
				console.log(appData.income);
				document.write('Ways of additional income ')
				appData.income.forEach(function(item, i, mass){
					document.write((i + 1) + ': ' + item + ' .');
				});
			};
		}
};


appData.detectDayBudget();
appData.detectLevel();
appData.checksavings();
appData.chooseOptExpenses();
appData.chooseIncome();

console.log(appData);
document.write('Our programm contains next data: ')

for (let key in appData) {
	console.log(typeof(appData[key]));
	if (typeof(appData[key]) === 'function') {
		document.write(key + ' - this is a function. ')
		continue;
	}
	if (typeof(appData[key]) === 'object') {
		console.log(1)
		for (let key1 in appData[key]) {
			document.write(key + ' ' + key1 + ' : ' + appData[key][key1] + '. ')
			continue;
		};
};
	document.write(key + ' : ' + appData[key] + '. ');
};
