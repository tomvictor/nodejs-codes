// pass by value

function change(b) {
	// body...
	b = 2;
}

var a = 1 ;
change(a);
console.log(a);

// call by referance
function changeObj(c) {
	// body...
	c.property1 = function () {	};
	c.property2 = {};
}

var m = {};
m.property1 = {};
console.log(m);
changeObj(m);
console.log(m);

