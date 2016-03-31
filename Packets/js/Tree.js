 	Packets.Tree = function() {
	var treeArr=[];
	this.insertNode = function(item) {
   	treeArr.push(item);
	},
	this.getRoot = function() {
		return treeArr[0];
	},
	this.displayTree = function() {
    for(var i=0;i<treeArr.length;i++)
      document.write(treeArr[i]+" -- ");
  }
}
