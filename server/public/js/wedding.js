var images_wedding=[
	'9',
	'674',
	'905',
	'669',
	'672',
	'677',
	'675',
	'681',
	'683',
	'762',
	'763'];

$('.gallery .image img')
	.visibility({
		type:'image',
		transition:'fade in',
		duration:1000
	});

$('.gallery .image img').click(function(e){
	currentGalleryImage=e.target.attributes.src.value;
	currentGalleryImages=images_wedding.map(function(val){
		return '/img/wedding/wedding-'+val+'.jpg';	
	});
	$('.ui.page.dimmer.slideshow img').attr('src',currentGalleryImage);
	$.fn.dimmer.settings.closable=false;
	$('.ui.page.dimmer.slideshow')
		.dimmer('show')
	;
});

