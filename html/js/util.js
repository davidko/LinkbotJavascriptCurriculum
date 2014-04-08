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

