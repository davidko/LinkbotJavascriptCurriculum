$( function() {
var showWholeCode = false;
var chapterClassName = '.ch4ex1';
var robotID = GetRobotId();
if(robotID == undefined) {
  robotID = 'ABCD';
}
else {
  $('.unknown-robot-id-comment', chapterClassName).text('');
}

$(chapterClassName).find('.tryNow').click( function(obj) {
  var bot = Linkbots.connect(robotID);
  bot.move(360, 0, 0);
});

AddRobotToGetParams(robotID);
$('.robotID', chapterClassName).text(GetRobotId());

var nextRotateAngle = 180;

$('.expand-program', chapterClassName).click(function (event) {
    // Suppress addition of this navigation event to the browser's history, so
    // the Back button isn't screwed up.
    event.preventDefault();

    $('pre.hidden', chapterClassName).slideToggle();

    // Flip the hider tab image
    $('img', this).css('transform', 'rotate(' + nextRotateAngle + 'deg)');
    nextRotateAngle = (nextRotateAngle + 180) % 360;
});

});
