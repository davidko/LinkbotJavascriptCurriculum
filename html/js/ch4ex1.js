$( function() {
var showWholeCode = false;
var chapterClassName = '.ch4ex1';
var robotID = GetRobotId();
if(robotID == undefined) {
  robotID = 'ABCD';
}

$(chapterClassName).find('.tryNow').click( function(obj) {

  var bot = Linkbots.connect(robotID);
  bot.move(360, 0, 0);
});

AddRobotToGetParams(robotID);

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
