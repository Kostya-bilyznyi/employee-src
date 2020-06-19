'use strict';

const source = './data/employees.json';
const listEl = document.querySelector('[data-list]');
const tmpl = document.querySelector('[data-tmpl]').innerHTML;

document.addEventListener('DOMContentLoaded', sendRequest);

function sendRequest(){
	fetch(source)
		.then( result => result.json() )
		.then( replaceInformatin );	
}

function replaceInformatin(data){
	console.log(data);
	
	let listHtml = '';

	data.forEach(replaceData => {
		
		if (replaceData.inoffice == true) {
			listHtml += tmpl
			.replace(/{{work-status}}/gi, "in")
			.replace(/{{information}}/gi, replaceData.name);
		} else {
			listHtml += tmpl
			.replace(/{{work-status}}/gi, "out")
			.replace(/{{information}}/gi, replaceData.name);
		};
	});

	listEl.innerHTML = listHtml;
}
