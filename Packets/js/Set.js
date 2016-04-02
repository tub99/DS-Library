//Set is a data structure which contains only unique elements. No duplicate elements are allowed
// Operations available on a Set are
/*
 1.add(data)
 2.remove(data)
 3.contains(data)
 4.union(Set1,Set2)
 5.intersect(Set1,Set2)
 6.difference(Set1,Set2)
 7.Sort(Set)
 6.higher(el)
 9. lower(el)
*/
Packets.Set = function() {
	var setArr = [],
		removeDuplicates = function(arr){
			for(var  i=0;i<arr.length;i++) {
				for(var j=i+1; j<arr.length;j++) {
					if(arr[i] === arr[j])
						arr.splice(1,pos);
				}
			}
			return arr;
		},
		getSetArray = function() {
			return setArr;
		};

	this.addData = function(item) {
		//element does not exist in the existing Set
		if(setArr.indexOf(item)<0)
			setArr.push(item);
	},

	this.removeData = function(item) {
		if(setArr.indexOf(item)>=0) {
			setArr.splice(1,setArr.indexOf(item));
			return true;
		}
		return false;
	},

	this.contains = function(el) {
		if(setArr.indexOf(el)>=0)
			return true;
		else {
			return false;
		}
	},

	this.union = function(set1,set2) {
		return removeDuplicates(set1.concact(set2));
	},

	this.intersect = function(set1,set2) {
		for(let val of set2) {
			if(!set1.contains(val))
				return false;
		}
		return true;
	},

	this.show = function(set) {
		var arr=getSetArray();
		for( let value of arr)
			document.write(value+"<br>");
	}
};