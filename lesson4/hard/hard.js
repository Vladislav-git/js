'use strict';

let count = 0;
let mass = [];


let summaD = (number) => {
	let summa = 0;
	for (let i = 0; i < number; i++) {
		if (!(number % i)) {
			summa += i;
		};
	};
	return summa;
};



let friendlyNumbers = (start, end) => {
	for (let i = start; i < end; i++) {
		let a = summaD(i);
		if (a != i && count != a) {
			let b = summaD(a);
			if (i == b) {
				mass.push([i,a]);
				count = i;
				console.log(mass);
			};
		};
	};
	return mass;
};


friendlyNumbers(0,10000)