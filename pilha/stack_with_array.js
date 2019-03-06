/* Stack! - Pilha*/

// functions: push, pop, peek, length
/* 
	push:   Adiciona um elemento ao topo da pilha
	pop:    Remove o elemento do topo da pilha
	peek:   Para mostrar o elemnto do topo da pilha
	length: Determina a quantidade de elementos da pilha 

	No JavaScript o objeto array já possui todas essas funções implementadas	
	Dessa forma podemos usar um array,
	para usarmos como se fosse uma pilha
*/

let letters = [] // nossa pilha
let word = "racecar"
let reverseWord = ""

// adiciona as letras na pilha
for (var i = 0; i < word.length; i++) {
	letters.push(word[i])
	console.log(letters)
}

// pop off the stack in revreser order
for ( var i = 0; i < word.length; i++) {
	reverseWord += letters.pop()
	console.log(letters)
}

if (reverseWord === word) {
	console.log(word + " = " + reverseWord )
	console.log(word + " is a palindrome.")
}
else {
	console.log(word + " <> " + reverseWord )
	console.log(word + " is not a palindrome.")
}