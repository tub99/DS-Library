//Queue class
CircularQueue=function(capacity){
	var  front=0,
		rear=0,
		size=capacity || 5,
		flag=false,
		info=[];
		
	this.cq_insert = function(item) {
		if(!this.q_full()) {
			info[rear]=item;
			rear=rear+1%size;
			flag=true;
		}
		else
			console.log("Circular Queue full");
	},
	this.cq_delete = function() {
		if(!this.q_empty()) {
			var el=this.info[front];
			front=front+1%size;
			flag=false;
		}
		else
			console.log("Circular Queue empty");
		
	},
	this.cq_size = function() {
		return info.length;
	},
	this.cq_empty= function() {
		if(rear==front && flag==false)
			return true;
		else 
			return false;
	},
	this.cq_full= function() {
		if(rear===front && flag==true)
			return true;
		else 
			return false;

	}
	this.cq_display=function() {
		if(!this.cq_empty())
			for(var i=0;i<info.length;i++)
				document.write(info[i]+" ");
	}

}