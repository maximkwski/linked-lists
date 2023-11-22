class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null,
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    getHead() {
        if(this.head) {
            return this.head
        } else {
            console.log('the list is empty')
        }
    }

    getTail() {
        if (this.isEmpty()) {
            console.log('the list is empty')
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            return prev
        }
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.isEmpty()){
            node.next = this.head
        } 
        this.head = node
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            console.log(prev)
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node

        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    at(index) {
        let i = 0
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let curr = this.head
            while (i < index) {
                curr = curr.next
                i++
                console.log(curr)
            }
            return curr
        }
        
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return
        } 
        if (index === 0) {
            list.prepend(value)
        } else {
            let prev  = this.head
            const node = new Node(value)
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
      
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null
        } 
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size++
        return removedNode.value
    }

    pop() {
        if (this.isEmpty()){
            console.log('the list is empty')
        } else {
            let prev = this.head
            let removedNode
            for (let i = 0; i < this.size - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = null
            return removedNode.value
            
        
        }
    }
}

const list = new LinkedList();
list.print();
list.prepend('sho');
list.print();
list.prepend('cho');
list.append('tam');

list.print();
console.log(list);
list.insertAt('kaban', 1);
list.print();
console.log('prev is ', list.pop());
list.print();
