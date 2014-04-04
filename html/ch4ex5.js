$( function() {

$('a').each(function(index, element) {
		var robotID = GetURLParameter('robotID');
		var href = $(this).attr('href');
		href = href + "?robotID="+robotID;
		$(this).attr('href', href);
});

$('#tryNowa').click( function(obj) {
	var j1 = parseFloat($('#j1a').val());
	var j2 = parseFloat($('#j2a').val());
	var j3 = parseFloat($('#j3a').val());
	if ( (j1 > 0) && (j3 < 0) && (j1 == (j3*-1)) ) {
		$('#checkBoxA').attr("src", "images/check.svg");
	} else {
		$('#checkBoxA').attr("src", "images/cross.svg");
	}
	var robotID = GetURLParameter('robotID');
	var bot = Linkbots.connect(robotID);
	bot.move(j1, j2, j3);
});

$('#stopa').click( function(obj) {
	var robotID = GetURLParameter('robotID');
	var bot = Linkbots.connect(robotID);
	bot.stop();
});

$('#tryNowb').click( function(obj) {
	var j1 = parseFloat($('#j1b').val());
	var j2 = parseFloat($('#j2b').val());
	var j3 = parseFloat($('#j3b').val());
	if ( (j1 < 0) && (j3 < 0) && (j1 == j3) ) {
		$('#checkBoxB').attr("src", "images/check.svg");
	} else {
		$('#checkBoxB').attr("src", "images/cross.svg");
	}
	var robotID = GetURLParameter('robotID');
	var bot = Linkbots.connect(robotID);
	bot.move(j1, j2, j3);
});

$('#stopb').click( function(obj) {
	var robotID = GetURLParameter('robotID');
	var bot = Linkbots.connect(robotID);
	bot.stop();
});

});
