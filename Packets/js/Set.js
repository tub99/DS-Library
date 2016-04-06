//  a set is an abstract data type that can store certain values, 
// without any particular order, and no repeated values. 
// It is a computer implementation of the mathematical concept of a finite set. 


// This Set class conatins elemnts in a linear data-structure
Packets.Set = function() {
	var setArr = [],
	//This is a private function to remove duplicate elements
		removeDuplicates = function(arr){
			for(var  i=0;i<arr.length;i++) {
				for(var j=i+1; j<arr.length;j++) {
					if(arr[i] === arr[j])
						arr.splice(1,pos);
				}
			}
			return arr;
		};
	// This function converts the set into array 
	// and returns it
	this.ToArray = function() {
			return setArr;
		};
	// This function takes 'item' and inserts it into the set
	this.addData = function(item) {
		//element does not exist in the existing Set
		// as Set doen't allow duplicate elements
		if(setArr.indexOf(item)<0)
			setArr.push(item);
	};
	// This removes the item the user wants to
	// be deleted from the Set
	this.removeData = function(item) {
		// checking if element exists in the set
		// if it exists remove data and return true else false
		if(setArr.indexOf(item)>=0) {
			//removing item from set
			setArr.splice(1,setArr.indexOf(item));
			return true;
		}
		return false;
	};
	// // checking if 'item' exists in the set or not
	this.contains = function(el) {
		if(setArr.indexOf(el)>=0)
			return true;
		else {
			return false;
		}
	};
	//the union (denoted by ∪) of a collection of sets is the set of all
	// distinct elements in the collection set1 and set2
	this.union = function(s2) {
		// temp is the new union Set
		var temp = new Packets.Set(),
			s1Arr=this.ToArray();
			temp=s2;
		for(let val of s1Arr){
			// It will never add duplicate data
				temp.addData(val);
		}
		return temp;

	};
	// the intersection set1 ∩ set2 of two sets set1 and set2 is the set
	// that contains all elements of set1 that also belong to set2 
	//(or equivalently, all elements of set2 that also belong to set1),
	// but no other elements.
	this.intersect = function(s2) {
		// temp is the new intersected Set
		var temp = new Packets.Set(),
			s1Arr=this.ToArray();		
		for(let val of s1Arr){
			// If el in set1 is there in sett2
			// then include those elements only
			if(s2.contains(val))
				temp.addData(val);
		}
		return temp;
	};
	// This function displays the element in the set
	this.show = function() {
		// converting to array and displaying individual elements
		// of an array
		var arr=this.ToArray();
		for( let value of arr)
			console.log(value+"<br>");
	};
	// checking whether a set is empty or not
	this.ifEmpty = function() {
		var arr = this.ToArray();
		if(arr.length === 0)
			return true;
		else return false;
	};
};