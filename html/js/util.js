function GetRobotId()
{
  var robotID;

  if( typeof window.ch4_RobotID !== 'undefined' && window.ch4_RobotID !== null) {
    robotID = window.ch4_RobotID;
  } else {
    robotID = GetURLParameter('robotID');
  }
  return robotID;
}

function AddRobotToGetParams(robotId)
{
		$('.navheader').find('a').each(function(index, element) {
				var href = $(this).attr('href').split('?')[0];
				href = href + "?robotID="+robotId;
				$(this).attr('href', href);
			});
		$('.navfooter').find('a').each(function(index, element) {
				var href = $(this).attr('href').split('?')[0];
				href = href + "?robotID="+robotId;
				$(this).attr('href', href);
			});
}

$( function() {
    $('.book').attr('title', '');

    // Add a LinkbotLabs icon on the left side that sticks no matter where you scroll
    var baseStyle = "width:auto;height:auto;position:absolute;left:20px;background-color:#fff;padding:5px;border:solid;border-width:1px;top:20px;";
    $('body').append('<div id="navIcon" style="'+baseStyle+'top:20px;"> <a href="../index.html"><img src="images/linkbot-labs-ER-logo-200x46px.png"/></a> </div>');
    $(document).scroll( function() {
      var top = parseInt($(window).scrollTop());
      top = top + 20;
      $('#navIcon').attr('style', baseStyle+'top:' + top + 'px;');
    });
});
