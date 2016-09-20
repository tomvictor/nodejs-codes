function Person(firstname, lastname) {
	// body...
	this.firstname = firstname ;
	this.lastname = lastname ; 
}

var tom = new Person('tom', 'victor');
console.log(tom.firstname);