Packets.BSTree = function() {
	var root = null;
  
	this.insertNode = function(item) {
    var temp = new TNode(item),
      curr=root;
    temp.left = temp.right = null;
    if(root === null) {
      root=temp;
      return;
    }

    while(curr.data!=item) {
      if(curr.data>item) {
      	if(curr.left==null) {
      		curr.left=temp;
      		return;
      	}
      	else {
      		curr=curr.left;
      	}
      }
      else {  
        if(curr.right === null) {
            curr.right=temp;
            return;
        }
        else {
          curr=curr.right;
        }
      } 	
    }
	},
	this.getRoot = function() {
		return root;
	},

  this.getHeight= function(rt) {
    if(rt === null)
      return 0;
    else
    {
      var lHt=this.getHeight(rt.left);
      var rHt=this.getHeight(rt.right);
      if(lHt>rHt)
        return lHt+1;
      else
        return rHt+1;
    }
  },

	this.postorder = function(ptr) {
		//var ptr=root;
    if(ptr!== null) {
      this.postorder(ptr.left);
      this.postorder(ptr.right);
      document.write(" "+ptr.data+" ");
   }
    return;
  },

  this.preorder = function(ptr) {
		//var ptr=root;
    if(ptr!== null) {
      document.write(" "+ptr.data+"<br> ");
      this.preorder(ptr.left);
      this.preorder(ptr.right);
    }
    return;
  },

  this.inorder = function(ptr) {
		//var ptr=root;
    if(ptr!== null) {
      this.inorder(ptr.left);
      document.write("-"+ptr.data+"-");
      this.inorder(ptr.right);
    }
    return;
  },
  this.levelorder = function(rt) {
    var h=this.getHeight(rt),
        i;
    for(i=1;i<=h;i++) {
      printLevel(rt,i);
    }
  },

  printLevel = function(rt,level) {
    if(rt === null)
      return;
    if(level === 1)
      document.write(rt.data+" ");
    else if(level > 1)
    {
      printLevel(rt.left,level-1);
      printLevel(rt.right,level-1);
    }
  },
  this.isEmpty = function() {
    if(root === null) {
      return true;
    }
    else {
      return null;
    }
  };

};
