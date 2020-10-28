// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods

function Front(arr, x){
    for (var i = arr.lenght; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = x;
    return arr;
}

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop()

function removeFront(arr) {
	var val = arr[0];
	for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
	arr.length = arr.length - 1;
	return val;
}

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertIdx(arr, idx, val) {
	for(var i = arr.length; i > idx; i--){
		arr[i] = arr[i-1]
    }
    arr[idx] = val;
    return arr;
}

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
	toRemove = arr[idx];
	for(var i = idx; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return toRemove;
}

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    var x = arr;
	for(var i = 0; i < arr.length - 1; i = i + 2) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
    }
    return x;
}

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 

function removeDupesUnnested(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}
