/*
 * linkedList.js
 * Alvin Dean Jr.
 * Homework 1
 */
 function Node(value){
     this.value=value;
     this.next=null;
     this.prev=null;
 }
 function LinkedList(){
    this.length=0;
    this.head=null;
    this.tail=null;
}
/**
 * @param {Number} value- add node with value to  end of LinkedList
 */
LinkedList.prototype.append=function(value){
    if(this.length == 0){
        this.head=new Node(value);
        this.last=this.head;
        this.length++;
    }
    else{
        var tmp=this.length;
        var currentNode=this.head;
        var prevCurrentNode;

        while(currentNode.next){
            currentNode=currentNode.next;
        }
        currentNode.next=new Node(value);
        currentNode.next.prev=currentNode;
        this.length++;
    }
};
 /**
  * @param {Number} value= add node with value to front of LinkedList
  */
 LinkedList.prototype.prepend=function(value){
     if(this.length == 0) this.append(value);

     else{
         var newNode=new Node(value);
         newNode.next=this.head;
         this.head.prev=newNode;
         this.head=newNode;
     }
 }
 function nth(index, list, node){
     if(index > list.length)
         return;

     else if(index >= 0){
        console.log(node.value);
        return nth(--index,list,node.next);
     }
    return node;
 }
/**
 * @param {Array<Number>} array - array of numbers
 * @returns {List}
 */
function arraytoList(array){
    var list=new LinkedList();
    for(var i in array)
        list.append(i);
    return list;
}
/**
 * @param{LinkedList} list - list of numbers
 * @returns {Array}
 */
function listToArray(list){
    var arr=[];
    var currentNode=list.head;
    while(currentNode){
        arr.push(currentNode.value);
        currentNode=currentNode.next;
    }
    return arr;
}
var list=arraytoList([0,1,2,3,4,5,6,7,8,9]);
nth(9,list,list.head);
