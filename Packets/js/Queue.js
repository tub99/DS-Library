//Queue class
/// Queue is a dataStructure that acts like a  buffer
// its a First-In-First-Out datastructure.
// user should give the capacity of the queue
Packets.Queue=function(capacity){
	//insertion takes place from rear,deletion from front
	var  front=-1,
		rear=-1,
		size=capacity || 5,
		info=[];
	// this inserts an element inside the queue		
	this.q_insert = function(item) {
		// Insertion can happen only if the queue is not full
		if(!this.q_full()) {
			// we add items to the Rear part
			++rear;
			info[rear]=item;
		}
		else
			console.log("Queue full");
	};
	// deletes an element from the queue
	this.q_delete = function() {
		// If there are items to delete
		//delete from front
		if(!this.q_empty())
			return this.info[front++];
		else
			console.log("Queue empty");
		
	};
	// returns size of the queue
	this.q_size = function() {
		return info.length;
	};
	// Checks whether the queue contains no elements
	this.q_empty= function() {
		//When there is no element inside the queue
		// rear and front points to same position ie -1
		if(rear==-1 && front==-1)
			return true;
		else {
			return false;
		}
	};
	// Checks whether the queue contains elements to its full
	this.q_full= function() {
		//When cq is full
		// rear = MAXIMUM size of the Queue
		if(rear===size-1)
			return true;
		else {
			return false;
		}
	};
	// dispalying elemments of the queue
	this.q_display=function() {
		if(!this.q_empty())
			for(var i=0;i<info.length;i++) {
				console.log(info[i]+" ");
			}
	};

};