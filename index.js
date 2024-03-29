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

  //inserting a data at a particular index: 
  insertAt(data , index){
     
     let count = 0;
     let current = this.head;
     let previous;  
     let node = new Node(data);

     while(count < index){
        previous = current;
        current = current.next 
        count++;
     }

     console.log(previous);
     previous.next = node;
     node.next = current;
     console.log(current);

  }

  //Get a particular element from a List: 
  getAtindex(index){
     let count = 0; 
     let current = this.head;
     let previous;
     while(count < index){
        previous = current; 
        count++;
        current = current.next;
     }
     console.log(previous.next);
  }

   //remove a particluar element from the list: 
    deleteItemList(index){

        let current = this.head;
        let count = 0; 
        let previous;

        while(count < index){

            previous = current;     
            count++;
            current = current.next; 
        }
       
        console.log(previous);
        console.log(current);
        previous.next = current.next;

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
ll.insertAt(270,2);
ll.insertAt(456,4);
ll.printList();
console.log('---'); 
ll.getAtindex(2);
ll.getAtindex(3);
console.log('--Code for deletion--')
ll.deleteItemList(3);
console.log('--- printing every Item in the List ---'); 
ll.printList();
//console.log(ll);