function greet(){
	console.log('hi');
}
greet();

// functions are first-class

function logGreating(fu) {
	// body...
	fu();
}

logGreating(greet);