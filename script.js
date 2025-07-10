//your JS code here. If required.

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let inputs = document.getElementsByTagName("input");
inputs = [...inputs]
inputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		const pattern = new RegExp(input.getAttribute("pattern"));
		const value = input.value;

		if(pattern.test(value)){
			input.classList.add("valid");
			input.classList.remove("in-valid");
		} else {
			input.classList.add("in-valid");
			input.classList.remove("valid")
		}
	})
;})

