SinglyLinkedList=function() {
	var head=null;
	this.addFirst=function(item) {
		var temp=new SNode(item);
		temp.next=head;
		head=temp;

	},
	this.addLast=function(item) {
		var temp=new SNode(item),
			curr=head;
		while(curr.next!==null){
			curr=curr.next;
		}	
		curr.next=temp;
		temp.next=null;
	},
	this.addAfter=function(after,item) {
		var curr=head,
			temp=new SNode(item);
		while(curr.next!==null)
		{
			if(curr.data===after)
				break;
			curr=curr.next;
		}
		temp.next=curr.next;
		curr.next=temp;
	},
	this.deleteFirst = function() {
		var curr;
		if(!this.isEmptyList()) {
			curr=head;
			head=curr.next;
			delete curr;
		}
		else {
			document.write(" Empty List : Nothing to delete");
		}
	},
	this.deleteLast = function() {
		if(!this.isEmptyList()) {
			var curr=head;
			while(curr.next!==null)
			{
				prev=curr;
				curr=curr.next;
			}
			prev.next=null;
		}	
		else
			document.write(" Empty List ! Nothing to delete");
		
	},
	this.deleteNode = function(item) {
		if(!this.isEmptyList()) {
			var curr=head,
				prev=null;
			while(curr.next!==null)
			{
				if(curr.data===item)
					break;
				prev=curr;
				curr=curr.next;
				
			}
			prev.next=curr.next;
			delete curr;
		}
		else
			document.write(" Empty List ! Nothing to delete");

	},
	this.isEmptyList = function() {

		if(head === null)
			return true;
		else { return false;
		}
	},
	this.sll_display=function() {
		var curr=head;
		while(curr !== null)
		{
			document.write(curr.data+" ");
			curr=curr.next;
		}
	}
};