//Hey this is the code for Linkedlist: 
//Hit the terminal and run node FileName without .js eg: FileName: index.js run in the terminal node index. 

class Node{
    //A node has a data and a reference to that of the next node. 
    constructor(data, next = null){
      this.data = data;
      this.next = next;
    }

}

class LinkedList{
    //A LinkedlIst has a list of nodes.
    // A head and a size of the LinkedList:
    //By default the header is gonna be null and the size of the linkedList is zero.  
  constructor(head = null , size = 0){
     this.head = head; 
     this.size = size;
  }
  
  //Inserting a node into the linkedList: 
  
  insertData(data){
      //since in head it is a form of a node. 
     this.head = new Node(data, this.head);
     this.size++;
  }

}

const ll = new LinkedList(); 
ll.insertData(100);
ll.insertData(200); 
 
console.log(ll);