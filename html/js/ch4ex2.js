$( function() {
var showWholeCode = false;
var chapterClassName = '.ch4ex2';
    
$('.ch4ex2').find('.tryNow').click( function(obj) {
			var robotID = GetRobotId();
			var bot = Linkbots.connect(robotID);
			bot.move(0, 0, -360);
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
