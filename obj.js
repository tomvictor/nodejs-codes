// javascript object example
var person ={
	firtname : 'john',
	lastname : 'Doe' ,
	greet : function () {
		console.log('hello' + ' ' +
			this.firtname + ' ' + 
			this.lastname);
	}
};

person.greet();


console.log(person['firtname']);

console.log(person['greet']);