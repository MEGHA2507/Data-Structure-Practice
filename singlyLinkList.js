// javascript doesn't have in built linklist so we need to create our own linklist using object oriented programing

// structure of linkList --> linklist are null terminated
// const myLinkList = {
//     value: 10,
//     next: {
//         value: 6,
//         next: {
//             value: 2,
//             next: {
//                 value: 5,
//                 next: null
//             }
//         }
//     }
// }

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index, value){
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index -1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
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
}

const myOwnLinkList = new LinkList(10);
myOwnLinkList.append(5);
myOwnLinkList.append(16);
myOwnLinkList.prepend(1);
myOwnLinkList.insert(2, 99);
// myOwnLinkList.insert(20, 88);
console.log(myOwnLinkList);

myOwnLinkList.remove(2);
// console.log(myOwnLinkList);

