//function statements

function greet() {
	console.log("helllo tom")
}

greet();

//functions are first class

function logGreeting(fn) {
	fn();
}

logGreeting(greet);