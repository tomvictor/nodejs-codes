var person = {
	firstname: 'tom',
	lastname:'victor',
	greet:function () {
		console.log('Hello' + ' ' + this.firstname + ' ' +
			this.lastname);
	}
};

person.greet();
console.log(person['firstname']);
