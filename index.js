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

  //inserting a node at the last: 
  insertLast(data){
      let current = this.head;
      let nNode = new Node(data); 
      let previous;

      while(current){
    
       previous = current; 
        current = current.next;
      }

     previous.next = nNode; 

  }

 //printing all the data withing a List: 

  printList(){
     let currentNode = this.head;  
    
     while(currentNode){

        console.log(currentNode.data);
        currentNode = currentNode.next;
     }
  }

}

const ll = new LinkedList(); 
ll.insertData(100);
ll.insertData(200); 
ll.insertData(300);
ll.insertLast(400);
ll.insertLast(900);
ll.printList();
//console.log(ll);