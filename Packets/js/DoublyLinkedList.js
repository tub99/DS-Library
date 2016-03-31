DoublyLinkedList = function() {
		var head=null;
	this.addFirst=function(item) {
		var temp=new DNode(item);
		temp.right=head;
		temp.left=null;
		head=temp;
		
	},
	this.addLast=function(item) {
		var temp=new DNode(item),
			curr=head;
		while(curr.right!=null)
		{
			curr=curr.right;
		}
		temp.left=curr;	
		curr.right=temp;
		temp.right=null;
	},
	this.addAfter=function(after,item) {
		var curr=head,
			temp=new DNode(item);
		while(curr.right!=null)
		{
			if(curr.data === after)
				break;
			curr=curr.right;
		}
		temp.left=curr;
		temp.right=curr.right;
		curr.right=temp;
		
	},
	this.deleteFirst = function() {
		if(!this.isEmptyList()) {
			var curr=head;
			head=curr.right;
			delete curr;
		}
		else
		{
			document.write(" Empty List : Nothing to delete");
		}
	},
	this.deleteLast = function() {
		if(!this.isEmptyList()) {
			var curr=head;
			while(curr.right!=null)
			{
				prev=curr;
				curr=curr.right;
			}
			prev.right=null;
			delete curr;
		}	
		else
			document.write(" Empty List ! Nothing to delete");
		
	},
	this.deleteNode = function(item) {
		if(!this.isEmptyList()) {
			var curr=head,
				prev=null;
			while(curr.right!=null)
			{
				if(curr.data===item)
					break;
				prev=curr;
				curr=curr.right;
				
			}
			prev.right=curr.right;
			curr.right.left=prev
			delete curr;
		}
		else
			document.write(" Empty List ! Nothing to delete");

	},
	this.isEmptyList = function() {

		if(head == null)
			return true;
		else 
			return false;
	},
	this.dll_display=function() {
		var curr=head;
		while(curr!=null)
		{
			document.write(curr.data+" ");
			curr=curr.right;
		}
	}
}