# DS-Library
Packets is a DataStructure Library in JavaScript.
 
### The following DataStructures are available:
  1} Stack <br/>
  2} Queue <br/>
  3} Circular Queue <br/>
  4} Singly Linked List <br/>
  5} Doubly Linked List <br/>
  6} Tree <br/>
  7} BSTree <br/>
  8} Graph <br/>
  9} Set <br/>
  10} Dictionary-Coming soon! <br/>
  11} HashTable-Coming soon! <br/>
  12} Circular Linked List-Coming soon! <br/>
  13} Priority Queue - Coming soon! </br>
  14} B-Tree - Coming soon! <br>

### How to create a DataStructure of your choice
Example1: Creating a Stack DataStructure
```javascript
  //Creating a Stack
  //Packets.Stack(size of stack)
  var stack = new Packets.Stack(5);
  //pushing data to stack
  stack.s_push(2);stack.s_push(4);stack.s_push(3);
  stack.s_push(49);stack.s_push(11);stack.s_push(6);
  //asking for the topmost data on Stack
  stack.s_peek(); 
  //removing topmost data from stack
  stack.s_pop();
  //displaying entire stack
  stack.s_display();

```

Example2 : Creating a Set DataStructure
```javascript
  // To run a Set DataStructure first create an instance 
  // of the Packets.Set class
  // Then with that instance call the various functions available in
  // the Packets.Set Class
   
   	//Creating a set 
  	var set = new Packets.Set();
  	// adding data to set
  	set.addData(3);set.addData(2);set.addData(36);
  	// removing data{36} from set
  	set.removeData(36);
  	// creating another Set
  	var set2 = new Packets.Set();
  	set2.addData(10);set2.addData(1);set2.addData(2);
  	// performing intersection of the sets
  	var intersectedSet=set.intersect(set2);
  	// displays the elemnets of the intersected set 
  	intersectedSet.show();

```
Check out the output at http://tub99.github.io/Packets/index.html<br>
##Note:
document.write() is used only for display purpose.
