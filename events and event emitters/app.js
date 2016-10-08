//object properties and methords
console.log('hello world');

var obj = {
	greet:"hello"
}

console.log(obj.greet);
console.log(obj["greet"]);

var prop = "greet";

console.log(obj[prop]) ;

// functions and arrays

var arr = [] ;

arr.push(function () {
	console.log("hello world 1")
});
arr.push(function () {
	console.log("hello world 2")
});
arr.push(function () {
	console.log("hello world 3")
});


arr.forEach(function (item) {
	item();
});







