'use strict';

let str = 'f-d-sgd fg hhyytj';
let str2 = '';
let str3 = '';
let str1 = str[0].toUpperCase() + str.slice(1);	
let arr = [20,33,1,'Human',2,3];
let summa = 0;
let new_stri = '';

for (let i = 0; i < str1.length; i++) {
	if (str1[i] == '-'){

		str2 += str1[i].replace('-',' ');
		continue;
	};
	str2 += str1[i];
};

console.log(str2);

str3 += str2.slice(-6,-2) + 'o';

document.write(str3);

for (let i = 0; i < arr.length; i++) {

	if (typeof(arr[i]) === 'string') {

		arr.splice(i, 1);
	};

	summa += arr[i]**3;
};

console.log(Math.sqrt(summa));


let change_str = (stri) => {
	if (typeof(stri) != 'string') {
		alert('not a string');
	} else if (stri.length > 50) {
		new_stri += stri.trim().slice(0,-3) + '...'; 
		console.log(new_stri);
	} else {
		console.log(stri.trim());
	};
};

change_str(' gkdflgkdfhkldf;hjkldfgk;dffhd ')
