var firstname = 'Jane';

(function (lastname) {
	// demo for scope, same variable first name is used
	// outside the fn
	var firstname = 'john';
	console.log(firstname);
	console.log(lastname);

}('Doe'));

console.log(firstname);