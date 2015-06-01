//var drake = dragula([document.querySelector('#out'), document.querySelector('#ingredient'), document.querySelector('#match')]);

// dragula(containers, {
//   moves: function (el, container, handle) {
//     return true;         // elements are always draggable by default
//   },
//   accepts: function (el, target, source, sibling) {
//     return true;         // elements can be dropped in any of the `containers` by default
//   },
//   direction: 'vertical', // Y axis is considered when determining where an element would be dropped
//   copy: false,           // elements are moved by default, not copied
//   revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
//   removeOnSpill: false   // spilling will `.remove` the element, if this is true
// });

var drake = dragula([document.querySelector('#out'), document.querySelector('#ingredient'), document.querySelector('#match')]);

drake.on('drop', function(el, container, source){
	var contents = $( '#ingredient' ).find('div').text();
	var ingredients = contents.trim().split('-');
	ingredients.shift();
	console.log(ingredients);
	$.post('/addIngredient',{newList: ingredients}, function(dataFromServer){
	});
})
 
var array1 = [1,2,3,4,5,6,7];
var array2 = [3,4,5,6,7,8,2];
var array3 = [3,4,5,6,7,8,9];
var array4 = [4,5,6,7,8,9,0];
var array5 = [7,9,6,10,5,11,7];

var arrayArray = [array1, array2, array3,array4,array5];
var newArray = [];

Array.prototype.compareArrays = function(arr) {
    return this.filter(function(i) {return arr.indexOf(i) >= 0;});
};

for (var i = 0; i < arrayArray.length-1; i++) {
	if(i===0){
		newArray = arrayArray[i].compareArrays(arrayArray[i+1]);
	} else {
		newArray = newArray.compareArrays(arrayArray[i+1]);

	}
};
// newArray = arrayArray[0].compareArrays(arrayArray[1]);

console.log(newArray);









