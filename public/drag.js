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

var updateSuggestion = function(){
	var contents = $( '#ingredient' ).find('div').text();
	var ingredients = contents.trim().split('-');
	ingredients.shift();
	console.log(ingredients);
	$.post('/addIngredient',{newList: ingredients}, function(dataFromServer){
		console.log(dataFromServer);
		if(dataFromServer === ['']){
			$('#match').text('');
		} else {
			$('#match').text('');
			for (var i = 0; i < dataFromServer.length; i++) {
				$('#match').append('<div>-'+ dataFromServer[i] + '</div');
			}
		}
	});
};

$('#recipe-box-form').on('submit', function(e){

	e.preventDefault();
	var ingredient = $('.ingredient').val();
	$('#ingredient').append('<div>-'+ ingredient + '</div>');
	updateSuggestion();
	$('#recipe-box-input').val('');


});

var drake = dragula([document.querySelector('#out'), document.querySelector('#ingredient'), document.querySelector('#match')]);

drake.on('drop', function(el, container, source){
updateSuggestion();
});











