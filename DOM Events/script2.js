var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var list = document.querySelectorAll("li");

for (let i=0; i<list.length; i++)
list[i].addEventListener("click", function ToggleItems() {
	list[i].classList.toggle("done");
})

function forFuture(li) {
	list.forEach (function (li) {
	var push = document.createElement("button");
	push.appendChild(document.createTextNode("Delete"));
	li.appendChild(push);
	push.addEventListener("click", function Erase() {
		li.remove();
	})
	})
}

document.addEventListener('DOMContentLoaded', forFuture());

function createListElement(li){
	var li = document.createElement ("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var push = document.createElement("button");
	push.appendChild(document.createTextNode("Delete"));
	li.appendChild(push);
	input.value ="";	
	}

document.addEventListener('Load', createListElement ());

function inputLength() {
	return input.value.length > 0;
}

function addListAfterClick() {
	if (inputLength ()) {
		createListElement ();
	}
}

button.addEventListener ("click", addListAfterClick);

