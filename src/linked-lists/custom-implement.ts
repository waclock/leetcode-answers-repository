class ListNode {
    data: any;
    next: ListNode;
    constructor(data: any) {
        this.data = data
        this.next = null                
    }
}
  
  /**
   * Initialize your data structure here.
   */
  var MyLinkedList = function() {
      this.head = ListNode;
      this.tail = ListNode;
      this.size = 0;
  };
  
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  MyLinkedList.prototype.get = function(index: any) {
      let currentHead = this.head;
      for(let i = 0; i < index; i++){
          if(!currentHead) return null;
          currentHead = currentHead.next;
      }
      return currentHead;
  };
  
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtHead = function(val: any) {
      const newNode = new ListNode(val);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }else{
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
  };
  
  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtTail = function(val: any) {
    const newNode = new ListNode(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  };
  
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtIndex = function(index: any, val: any) {
      const newNode = new ListNode(val);
      if(index > this.size) return null;
      if(index <= 0){
          return this.addAtHead(val);
      }
      if(index == this.size){
          return this.addAtTail(val);
      }

      const indexNode = this.get(index - 1);
      const nextNode = index.next;
      indexNode.next = newNode;
      if(nextNode){
          newNode.next = nextNode;
      }
      this.size++;
  };
  
  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  MyLinkedList.prototype.deleteAtIndex = function(index: any): void {
    if(index > this.size) return null;
    if(index === 0){
        this.head = this.head.next;
        this.size--;
    }

    const indexNode = this.get(index - 1);
    const iethNode = index.next;
    
    if(iethNode && iethNode.next){
        if(!iethNode.next.next){
            this.tail = indexNode;
        }
        indexNode.next = iethNode.next;
    }
    this.size--;
  };
  
  /** 
   * Your MyLinkedList object will be instantiated and called as such:
   * var obj = new MyLinkedList()
   * var param_1 = obj.get(index)
   * obj.addAtHead(val)
   * obj.addAtTail(val)
   * obj.addAtIndex(index,val)
   * obj.deleteAtIndex(index)
   */
  const index = 2;
  const obj = new MyLinkedList();
  const param1 = obj.get(index);
  obj.addAtHead(5);
  obj.addAtTail(3);
  obj.addAtIndex(2, 7);
  obj.deleteAtIndex(3);

  console.log(obj);