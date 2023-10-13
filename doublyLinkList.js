// doubly linklist has value, and pointer for next and the previous node address.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            previous: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index, value){
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index -1);
        const followerNode = leader.next;
        leader.next = newNode;
        newNode.next = followerNode;
        newNode.previous = leader;
        followerNode.previous = newNode;
        this.length++;
    }

    remove(index){
        const leaderNode = this.traverseToIndex(index-1);
        const unwantedNode = leaderNode.next;

        leaderNode.next = unwantedNode.next;
        this.length--;
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this;
    }
}

const myOwnLinkList = new LinkList(10);
myOwnLinkList.append(5);
myOwnLinkList.append(16);
myOwnLinkList.prepend(1);
myOwnLinkList.insert(2, 99);
myOwnLinkList.reverse();
// myOwnLinkList.insert(20, 88);
console.log(myOwnLinkList);

// myOwnLinkList.remove(2);
// console.log(myOwnLinkList);

