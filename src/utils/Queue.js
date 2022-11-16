class Queue {
	constructor() {
		this.stackOne = [];
		this.stackTwo = [];
		this.length = 0;
	}
	push(value) {
		this.length += 1;
		this.stackTwo.push(value);
	}
	pop() {
		if (this.length === 0) {
			throw new Error("Popping from an empty queue...");
		}
		this.length -= 1;
		if (this.stackOne.length === 0) {
			while (this.stackTwo.length > 0) {
				this.stackOne.push(this.stackTwo.pop());
			}
		}
		return this.stackOne.pop();
	}
}

export default Queue;
