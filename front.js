// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
function front(){
    if(this.head == null){
        return null
    }
    return this.head.value
}
// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
function removeFront(){
    if(this.head == null){
        return null
    }
    this.head = this.head.next // Moving the pointer head to the 2nd node in the SLL, effectively deleting the 1st/former head
    return this.head
}
// Add Front
// Write a method that accepts a value and creates a new node, assigns it to the list head, and return a pointer to the new head node.
function addFront(val){
    newNode = new Node(val)
    newNode.next = this.head 
    this.head = newNode // This being done before the previous line would cause a deletion of the head Node (no references), and any Nodes attached to the head.
    return this.head
}
sll1 = new SLL()
console.log(sll1.front()