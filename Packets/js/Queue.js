//Queue class
Packets.Queue=function(capacity){
	var  front=-1,
		rear=-1,
		size=capacity || 5,
		info=[];
		
	this.q_insert = function(item) {
		if(!this.q_full()) {
			++rear;
			info[rear]=item;
		}
		else
			console.log("Queue full");
	},
	
	this.q_delete = function() {
		if(!this.q_empty())
			return this.info[front++];
		else
			console.log("Queue empty");
		
	},

	this.q_size = function() {
		return info.length;
	},

	this.q_empty= function() {
		if(rear==-1 && front==-1)
			return true;
		else {
			return false;
		}
	},

	this.q_full= function() {
		if(rear===size-1)
			return true;
		else {
			return false;
		}
	},

	this.q_display=function() {
		if(!this.q_empty())
			for(var i=0;i<info.length;i++) {
				document.write(info[i]+" ");
			}
	};

};