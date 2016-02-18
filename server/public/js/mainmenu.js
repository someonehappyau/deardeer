$(document)
	.ready(function(){
		$('.titleimage')
			.visibility({
				once:false,
				onTopPassed:function(){
					console.log('passed');
					$('.fixed.top.menu').transition('fade in');
				},
				onTopPassedReverse:function(){
					console.log('passed reverse');
					$('.fixed.top.menu').transition('fade out');
				}
			});
	});
