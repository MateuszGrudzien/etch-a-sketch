function drawGrid(width, height, container) {
	for (var i=0; i<height*width; i++) {
		$(container).append("<div class='cell'></div>");
	}
}

$(document).ready(function() {
	drawGrid(70, 50, $('#container'));
});
