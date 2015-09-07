function drawGrid(sketchSideSize) {
	$('.cell').remove();

	for (var i=0; i<sketchSideSize*sketchSideSize; i++) {
		$('#cell-container').append("<div class='cell'></div>");
	}

	$('.cell').on('mouseenter', function() {
		$(this).addClass('highlighted');
	});
}

function resizeCells(sketchSideSize) {
	var cells = $('.cell');
	var containerSize = parseInt($('#cell-container').css('height')); //parseInt() ignores non-numeric values
	var cellSize = containerSize/sketchSideSize;
	console.log(cellSize);
	
	cells.css({"height": + (cellSize-2) + "px", "width": + (cellSize-2) + "px"}); //-2 to account for size of cell's borders 
}

$(document).ready(function() {
	drawGrid(16);

	$('#reset').on('click', function() {
		var size = prompt('Enter the size of new sketchpad: ');
		drawGrid(size);
		resizeCells(size);
	});
});
