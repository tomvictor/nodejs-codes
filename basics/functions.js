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

// function expression

var greetMe = function(){
	console.log('hi tomy')
}
greetMe();

//its first class
logGreating(greetMe);

// use a function expression on the fly

logGreating(function () {
	// body...
	console.log('testing function expression on the fly')
})











