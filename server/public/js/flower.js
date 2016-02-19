var images_flower=[
	'3703',
    '3782',
	'3773',
	'3784',
	'3716',
	'3722',
	'3738',
	'3728',
	'3717',
	'3721',
	'3761',
	'3758',
	'3779',
	'3743',
	'3800',
	'3828',
	'3851',
	'3832',
	'3853',
	'3931',
	'3936',
	'3943',
	'3950',
	'3954',
	'3955',
	'3959',
	'3970',
	'3979',
	'3975'];



$('.gallery .image img')
	.visibility({
		type:'image',
		transition:'fade in',
		duration:1000
	});

$('.gallery .image img').click(function(e){
	currentGalleryImage=e.target.attributes.src.value;
	currentGalleryImages=images_flower.map(function(val){
		return '/img/flower/DSC_'+val+'.JPG';	
	});
	$('.ui.page.dimmer.slideshow img').attr('src',currentGalleryImage);
	$.fn.dimmer.settings.closable=false;
	$('.ui.page.dimmer.slideshow')
		.dimmer('show')
	;
});


