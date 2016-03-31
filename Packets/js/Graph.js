Packets.Graph = function()
{
	// To represent a graph we need a 2-D adjacency Matrix
	var vertices,
		edges = 0,
		adjMat=[],
		marked=[];
	this.initGraph = function(v)
	{
		vertices = (v!=undefined && typeof(v)=="number") ? v : 0 ;
		//initializing the adjacent matrix
		for(var i=0;i<vertices;i++) {
			//creating a 2-D matrix for every vertex
			adjMat[i] = [];
			//initializing with a blank value
			//adjMat[i].push(" ");
		}
	
	}
	this.addEdge = function(v1,v2) {
		// an edge is formed by connecting two vertices
		if(v1<vertices && v2<vertices) {
			adjMat[v1].push(v2);
			adjMat[v2].push(v1);
			edges++;
		}
		else
			console.log("Edge is invalid, cannot be inserted");
	}
	this.deleteEdge = function(v1,v2) {
		if(Array.isArray(adjMat[v1])){
			adjMat[v1].pop(v2);
			adjMat[v2].pop(v1);
			edges--;

		}
		

	}
	this.displayGraph = function(){
		for(var i=0;i<vertices;i++) {
			document.write(i+" -> ");
			for(var j=0; j< vertices; j++){
				// displaying elements
				if(adjMat[i][j]!== undefined)
					document.write(adjMat[i][j]+ ' | ');
			}
			document.write("<br>");
		}
	}
	this.dfs = function(vert) {
		
		//marking the vertex as visited
		marked[vert]=true;
		//checking whether the vertex 'vert' is valid 
		if(adjMat[vert] !== undefined) {
			document.write("Marked vertex:"+vert);
			document.write("<br>");
		}
		//recursively call dfs on the remaining vertices which is adjacent to 'vert'
		// Loop though all the adjacent vertices and call dfs on them
		for( let w of adjMat[vert]) {
			// checking whether that vertex 'w' has been already visited or not
			if(marked[w] === undefined)
				this.dfs(w);
		}


	}
	this.bfs = function(vert) {
		document.write("Under Construction");
	}


}