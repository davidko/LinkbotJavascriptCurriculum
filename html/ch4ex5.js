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
		$('#checkMarkA').text( " ☑ " ).attr("style", "font-size:30pt; color:green; font-weight:bold");
	} else {
		$('#checkMarkA').text( " ☒ " ).attr("style", "font-size:30pt; color:red; font-weight:bold");
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
		$('#checkMarkB').text( " ☑ " ).attr("style", "font-size:30pt; color:green; font-weight:bold");
	} else {
		$('#checkMarkB').text( " ☒ " ).attr("style", "font-size:30pt; color:red; font-weight:bold");
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
