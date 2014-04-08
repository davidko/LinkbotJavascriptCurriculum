$( function() {
var showWholeCode = false;
var chapterClassName = '.ch4ex3';

var j1text = '0';
var j3text = '0';

$('.ch4ex3').find('.tryNow').click( function(obj) {
	var robotID = GetRobotId();
	var bot = Linkbots.connect(robotID);
	var j1 = parseFloat(j1text);
	var j2 = 0;
	var j3 = parseFloat(j3text);
	bot.move(j1, j2, j3);
});

$('.ch4ex3').find('.stop').click( function(obj) {
	var robotID = GetRobotId();
	var bot = Linkbots.connect(robotID);
	bot.stop();
});

$('input.j1text').keyup( function() {
  $('input.j1text').val( $(this).val() );
  j1text = $(this).val();
});

$('input.j3text').keyup( function() {
  $('input.j3text').val( $(this).val() );
  j3text = $(this).val();
});

AddRobotToGetParams(GetRobotId());

$(chapterClassName).find('.expandProgram').click( function(obj) {
  if(showWholeCode) {
    $(chapterClassName).find('.unabridgedCode').attr('style', 'display: none;');
    $(chapterClassName).find('.abridgedCode').attr('style', 'visibility: visible;');
    $(chapterClassName).find('.expandProgramText').text('Show Unabridged Program');
    showWholeCode = false;
  } else {
    $(chapterClassName).find('.programlisting').find('.robotID').text( GetRobotId() );
    $(chapterClassName).find('.unabridgedCode').attr('style', 'visibility: visible;');
    $(chapterClassName).find('.abridgedCode').attr('style', 'display: none;');
    $(chapterClassName).find('.expandProgramText').text('Show Abridged Program');
    showWholeCode = true;
  }
});

});
