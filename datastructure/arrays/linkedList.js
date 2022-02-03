// class Node {
//   constructor(element) {
//     this.element = element;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // add to list
//   add(element) {
//     // creates a new node from the Node class
//     var node = new Node(element);

//     // to store current node
//     var current;

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         current = current.next;
//       }

//       // add node
//       current.next = node;
//     }

//     this.size++;
//   }

//   insertAt(element, index) {
//     if (index < 0 || index > this.size) {
//       console.log("Index as to be within size range");
//     } else {
//       var node = new Node(element);
//       var curr, prev;

//       curr = this.head;
//       if (index === 0) {
//         node.next = this.head;
//         this.head = node;
//       } else {
//         curr = this.head;
//         var lt = 0;

//         // iterate over the list to find
//         // the position to insert
//         while (lt < index) {
//           lt++;
//           prev = curr;
//           curr = curr.next;
//         }

//         // adding an element
//         node.next = curr;
//         prev.next = node;
//       }

//       this.size++;
//     }
//   }

//   removerFrom(index) {
//     if (index < 0 || index >= this.size)
//       return console.log("Please Enter a valid index");
//     else {
//       curr, prev, (lt = 0);
//       curr = this.head;
//       prev = curr;

//       if (index === 0) {
//         this.head = curr.next;
//       } else {
//         // iterate over the list to the
//         // position to remove an element
//         while (lt < index) {
//           lt++;
//           prev = curr;
//           curr = curr.next;
//         }
//         // remove the element
//         prev.next = curr.next;
//       }
//       this.size--;

//       return curr.element;
//     }
//   }

//   removeElement(element) {
//     var current = this.head;
//     var prev = null;

//     // iterate over the list
//     while (current != null) {
//       // comparing element with current
//       // element if found then remove the
//       // and return true
//       if (current.element === element) {
//         if (prev == null) {
//           this.head = current.next;
//         } else {
//           prev.next = current.next;
//         }
//         this.size--;
//         return current.element;
//       }
//       prev = current;
//       current = current.next;
//     }
//     return -1;
//   }

//   indexOf(element) {
//     var count = 0;
//     var current = this.head;

//     // iterae over the list
//     while (current != null) {
//       // compare each element of the list
//       // with given element
//       if (current.element === element) return count;
//       count++;
//       current = current.next;
//     }

//     // not found
//     return -1;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }

//   size_of_list() {
//     console.log(this.size);
//   }

//   printList() {
//     var curr = this.head;
//     var str = "";
//     while (curr) {
//       str += curr.element + " ";
//       curr = curr.next;
//     }
//     console.log(str);
//   }
// }

// var david = new LinkedList();
// david.add(100);
// david.add(200);
// david.add(300);
// david.add(400);
// david.add(500);
// console.log(david.printList());


var head
var size = 0;

class node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

const insertBefore = (new_data) => {
  var new_node = new node(new_data);
  new_node.next = head;
  head = new_node;
  size++
};


/*insert data into linked list after*/

const append = (new_data) => {
  var new_node = new node(new_data);
  var current;
  if (head == null) {
    head = new_node;
  } else {
    current = head;
    while (current.next) {
      current = current.next
    }
    current.next = new_node;
  }
  size++
}

/* insert after a given node */

const insertAfter = (prev_node, new_data) => {
  if (prev_node == null) {
    return
  }
  var new_node = new node(new_data);
  new_node.next = prev_node.next;
  prev_next.next = new_node;
  size++
}


/* delete node at given key */

const deleteAt=(key)=>{
if(head == null){
return null
}
if(key < 0 || key > size){
return
}
var curr, prev, i = 0;
curr = head;
if(key === 0){
head = head.next
}else{
while(i < key){
prev = curr
curr = curr.next;
i++
}
prev.next = curr.next;

return curr.data;
}
}

const deleteNode = (node) =>{
if(head == null){
return 
}
var curr, prev;
curr = head;
prev = null;
while(curr != null){
 if(curr.data === node){
 if(prev == null){
 head = curr.next
 }else{
 prev.next = curr.next
 }
 size--;
 return curr.data
 }
 prev = curr;
 curr = curr.next
}
return -1
}


const deleteList = ()=>{
head = null;
size = 0;
}

const searchNode = (n) =>{
var current;
current = head;
while(current != null){
if(current.data === n)
return true;

current = current.next
}

return false
}

const nthNode =(n)=>{
var current, count = 0;
current = head;
while(current != null){
if(count === n)
return current.data;

count++
current = current.next;
}
}

const printMiddle= ()=>{
var fast_ptr, slow_ptr;
fast_ptr = head;
slow_ptr = head;
while(fast_ptr != null && fast_ptr.next != null){
fast_ptr = fast_ptr.next.next;
slow_ptr = slow_ptr.next;
}
return slow_ptr.data;
}

const printList = () => {
  var current = head;
  var str = "";
  while (current) {
    str += current.data + " ";
    current = current.next;
  }
  return str;
}

append(100);
append(200);
append(300);
append(400);
/* deleteNode(300) */
// console.log(printMiddle())
// console.log(nthNode(3))
/* deleteList(); */
// console.log(printList())

head.next.next.next = head;

const detectLoop = (h) =>{
  s = new Set()

  while(head != null){
    if(s.has(h))
    return true;

    s.add(h);
    head = head.next;
  }
}

console.log(detectLoop(head))


// check if linked list is a palindrome

var one = new node(1);
var two = new node(2);
var three = new node(2);
var four = new node(1);
one.next = two;
two.next = three;
three.next = four;

const isPalindrome = (h)=>{
  slow = h;
  stack = [];
  var isPalin = true;

  while(slow != null){
     stack.push(slow.data);

     slow = slow.next;
  }

  while(h != null){
    var i = stack.pop();
    if(i === h.data){
      isPalin = true
    }else{
      isPalin = false;
      break;
    }

    h = h.next
  }

  return isPalin;
}

console.log(isPalindrome(one));


