'use strict';

let week = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
let today = 'monday'

for (let i = 0; i < week.length; i++) {

	if (i == 5 || i == 6) {	
		document.write(`<p style="${week[i] == today ? 'font-style: italic;' : ''}font-weight: bold;">${week[i]}</p>`)
		continue
	}

	if (week[i] == today) {
		document.write(`<p style="font-style: italic;">${week[i]}</p>`)
		continue
	}



	document.write(`<p>${week[i]}</p>`)

};


let arr = ['454','2145748','5469','87876','8778','11111','879653']

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i])
	}
}
