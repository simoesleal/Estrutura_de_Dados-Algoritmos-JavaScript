// Create a stack
let Stack = function () {
	this.count = 0
	this.storage = {}

	// Adds a value onto the end of the stack
	this.push = function(value) {
		// Primeiro adicionamos o valor passado para o objeto que irá armazenar
		this.storage[this.count] = value
		// Depois informamos na contagem do tamanho da pilha que foi adicionado mais um elemento
		this.count++
	}

	// Removes and returns the value at the of the stack
	this.pop = function() {
		// primeiro verifica se a pilha está vazia
		// se estiver retornará undefined
		if (this.count === 0) {
			return undefined
		}

		// se encontrar elementos, reduzirá o tamanho da pilha
		this.count--;
		let result = this.storage[this.count]
		delete this.storage[this.count]
		return result
	}

	this.size = function () {
		return this.count
	}

	// Return the value at the end of the stack
	this.peek = function(value) {
		return this.storage[this.count-1]
	}
}



let myStack = new Stack()
myStack.push(1)
myStack.push(2)
