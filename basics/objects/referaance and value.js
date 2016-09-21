// pass by value

function change(b) {
	// body...
	b = 2;
}

var a = 1 ;
change(a);
console.log(a);
