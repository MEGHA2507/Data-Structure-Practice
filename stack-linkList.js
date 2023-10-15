// creating a stack in javascript using linkedlist 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        console.log(newNode);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const currentTopReference = this.top;
            this.top = newNode;
            this.top.next = currentTopReference;      
        }
        this.length++;
        return this;

    }

    pop(){

    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('meta');
myStack.peek();




console.log(myStack);
console.log(myStack.peek());