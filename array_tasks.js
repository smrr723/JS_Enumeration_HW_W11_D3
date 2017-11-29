var arrayTasks = {

	concat: (arr1, arr2) => {
		return arr1.concat(arr2);
	},


	insertAt: (arr, itemToAdd, index) => {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},


	square: (arr) => {
		var squared = arr.map(arrItem => arrItem * arrItem);
		return squared;
	},


	sum: (arr) => {
		var summed = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
		return summed;
	},


	findDuplicates: (arr) => {
		var tempArr = []
		for (item of arr){
			if(arr.includes(item, item) && !tempArr.includes(item)){
				tempArr.push(item);
			}
		}
		return tempArr;
	},


	removeAndClone: (arr, valueToRemove) => {
		var tempArr = []
		for (item of arr){
			if(item !== valueToRemove){
				tempArr.push(item);
			}
		}
		return tempArr;
	},


	findIndexesOf: (arr, itemToFind) => {
		var tempArr = [];
		arr.forEach((item, index, arr) => {
			if(item == itemToFind){
				tempArr.push(index);
			}
		})
		return tempArr;
	},

// tried below first, but was returning [0,0,0], i.e. just getting stuck on the first instance of 1..??
		// var tempArr = []
		// for (item of arr){
		// 	if(item === itemToFind){
		// 		tempArr.push(arr.indexOf(item));
		// 	}
		// }
		// return tempArr;

	sumOfAllEvenNumbersSquared: (arr) => {
		var filtered = arr.filter(arrItem => arrItem % 2 === 0);
		return arrayTasks.sum(arrayTasks.square(filtered));
	}
}



module.exports = arrayTasks
