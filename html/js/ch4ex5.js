$( function() {

var r = $('.ch4ex5');
var showWholeCode = false;
var j1text = '0';
var j3text = '0';

r.find('.tryNow').click( function(obj) {
	var j1 = parseFloat(j1text);
	var j2 = 0;
	var j3 = parseFloat(j3text);
	if ( (j1 < 0) && (j3 < 0) && (j1 == j3) ) {
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

AddRobotToGetParams(GetRobotId());

r.find('input.j1text').keyup( function() {
  r.find('input.j1text').val( $(this).val() );
  j1text = $(this).val();
});

r.find('input.j3text').keyup( function() {
  r.find('input.j3text').val( $(this).val() );
  j3text = $(this).val();
});

r.find('.expandProgram').click( function(obj) {
  if(showWholeCode) {
    r.find('.unabridgedCode').attr('style', 'display: none;');
    r.find('.abridgedCode').attr('style', 'visibility: visible;');
    r.find('.expandProgramText').text('Show Unabridged Program');
    showWholeCode = false;
  } else {
    r.find('.programlisting').find('.robotID').text( GetRobotId() );
    r.find('.unabridgedCode').attr('style', 'visibility: visible;');
    r.find('.abridgedCode').attr('style', 'display: none;');
    r.find('.expandProgramText').text('Show Abridged Program');
    showWholeCode = true;
  }
});

});
