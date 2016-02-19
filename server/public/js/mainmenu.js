$(document)
	.ready(function(){
		$('.titleimage')
			.visibility({
				once:false,
				onTopPassed:function(){
					$('.fixed.top.menu').transition('fade in');
				},
				onTopPassedReverse:function(){
					$('.fixed.top.menu').transition('fade out');
				}
			});
	});
