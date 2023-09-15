let input = process.argv[2]
console.log(input)
let seed = Number(input)
if(input == "--help") {
	console.log("just type node.js collatz.js (intager of your choosing), see its eazy!!!")
} else if(input == "--credits") {
	console.log("coded by ferretlinux")
	console.log("coded in JavaScript")
} else if (input == "--version") {
	console.log("1.0")
} else {
	while (seed != 1) {
		if(seed % 2 == 1) {
			seed = seed * 3 + 1
			console.log(seed)
		} else {
			seed = seed / 2
			console.log(seed)
		}
	}
}
