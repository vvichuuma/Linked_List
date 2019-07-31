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
}

const ll = new LinkedList(); 
 
console.log(ll);