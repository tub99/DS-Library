//CircularQueue is a dataStructure that acts like a circular buffer
// its a First-In-First-Out datastructure.
// user should give the capacity of the Cqueue
Packets.CircularQueue=function(capacity){
	// properties of the Cqueue
		//insertion takes place from rear,deletion from front
	var  front=0,
		rear=0,
		size=capacity || 5,
		flag=false,
		info=[];
	// this inserts an element inside the queue	
	this.cq_insert = function(item) {
		// Insertion can happen only if the queue is not full
		if(!this.q_full()) {
			//adding items to rear
			info[rear]=item;
			//updating rear value
			rear=rear+1%size;
			// during insertion flag is true
			//flag helps us to dtecet whether the CQ is empty or full
			flag=true;
		}
		else
			console.log("Circular Queue full");
	};
	// deletes an element from the Cqueue
	this.cq_delete = function() {
		// If there are items to delete
		if(!this.q_empty()) {
			//delete from front
			var el=this.info[front];
			//update front
			front=front+1%size;
			// during deletion flag is true
			//flag helps us to dtecet whether the CQ is empty or full
			flag=false;
		}
		else
			console.log("Circular Queue empty");
		
	};
	// returns size of circularQueue
	this.cq_size = function() {
		return info.length;
	};
	// Checks whether the queue contains no elements
	this.cq_empty= function() {
		//When there is no element inside the queue
		// rear and front points to same position and flag remains false
		if(rear===front && flag===false)
			return true;
		else {
			return false;
		}
	};
	// Checks whether the queue contains elements to its full
	this.cq_full= function() {
		//When cq is full
		// rear and front points to same position and flag remains true
		if(rear===front && flag===true)
			return true;
		else {
			return false;
		}

	};
	// display cq elements
	this.cq_display=function() {
		if(!this.cq_empty())
			for(var i=0;i<info.length;i++) {
				console.log(info[i]+" ");
			}
	};

};