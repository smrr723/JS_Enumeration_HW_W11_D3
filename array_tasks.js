var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squared = arr.map(arrItem => arrItem * arrItem);
		return squared;
	},

	sum: function (arr) {
		var summed = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
		return summed;
	},

	findDuplicates: function (arr) {

	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
