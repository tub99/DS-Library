// Stack class

Stack = function(capacity) {
	var  top=-1,
		size=capacity || 5,
		info=[];
		
	this.s_push = function(item) {
		if(!this.s_full()) {
			++top;
			info[top]=item;
		}
		else
			console.log("stack overflow");
	},
	this.s_pop = function() {
		if(!this.s_empty())
			return this.info[top--];
		else
			console.log("stack underflow");
		
	},
	this.s_peek = function() {
		return info[top];
	},
	this.s_size = function() {
		return info.length;
	},
	this.s_empty= function() {
		if(top==-1)
			return true;
		else {
			return false;
		}
	},
	this.s_full= function() {
		if(top===size-1)
			return true;
		else {
			return false;
		}

	},
	this.s_display=function() {
		for(let el of info)
			document.write(el+" ");
	};
};
