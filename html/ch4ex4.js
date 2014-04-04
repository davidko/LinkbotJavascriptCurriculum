$( function() {

var r = $('.ch4ex4');
r.find('.tryNow').click( function(obj) {
  var j1text = r.find('.j1').val();
  var j2text = r.find('.j2').val();
  var j3text = r.find('.j3').val();
	var j1 = parseFloat(j1text);
	var j2 = parseFloat(j2text);
	var j3 = parseFloat(j3text);
	if ( (j1 > 0) && (j3 < 0) && (j1 == (j3*-1)) ) {
		r.find('.checkBox').attr("src", "images/check.svg");
	} else {
		r.find('.checkBox').attr("src", "images/cross.svg");
	}
	var robotID = GetRobotId();
	var bot = Linkbots.connect(robotID);
	bot.move(j1, j2, j3);
});

r.find('.stop').click( function(obj) {
	var robotID = GetRobotId();
	var bot = Linkbots.connect(robotID);
	bot.stop();
});

});
