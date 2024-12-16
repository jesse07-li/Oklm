var mylist = [
	"apple","juice","grape","orange"];

for (var k=0; k < mylist.length; k++) {
	console.log (mylist[k] + "!");
	// mylist.splice(2,2);
	// mylist[k] = mylist[k] + "!";
}

var jump = 0; 
while(jump < 10); {
	console.log("you just did: " + jump)
}

var age = prompt ("insert your age")
if (age === 18) {
console.log ("you have the majority, enjoy");
} else if (age<18) {
	console.log ("you are too young");
} else if (age>18) {
	console.log ("you are too old, sorry!")
};

var function addition(a,b) {
	return a+b
};
