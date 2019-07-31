//Hey this is the code for Linkedlist: 
//Hit the terminal and run node FileName without .js eg: FileName: index.js run in the terminal node index. 

class Node{
    //A node has a data and a reference to that of the next node. 
    constructor(data, next = null){
      this.data = data;
      this.next = next;
    }

}

const n1 = new Node(100); 

console.log(n1);