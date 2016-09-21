
function Person(firstname, lastname) {
	this.firstname = firstname ;
	this.lastname = lastname ; 
}

Person.prototype.greet = function() {
	console.log('hello' + ' ' + this.firstname + ' ' + this.lastname);
};

var tom = new Person('tom', 'victor');
console.log(tom.firstname);

tom.greet();