var currentGalleryImage='';
var currentGalleryImages=[];

$('.ui.page.dimmer.slideshow').click(function(e){
	if (e.clientX<screen.width*2/5){
		galleryGoLeft();
	}
	else if (e.clientX>screen.width*3/5){
		galleryGoRight();
	}
});

$('.ui.page.dimmer.slideshow > .close_icon').click(function(e){
	$('.ui.page.dimmer.slideshow').dimmer('hide');
});

$('.ui.page.dimmer.slideshow > .left_icon').click(function(e){
	galleryGoLeft();
});

$('.ui.page.dimmer.slideshow > .right_icon').click(function(e){
	galleryGoRight();
});

function galleryGoLeft(){
	var ifound=currentGalleryImages.findIndex(function(val){
		if(val===currentGalleryImage)
			return true;
		return false;
	});
	ifound=(ifound===-1)?1:ifound;
	ifound--;
	if (ifound===-1)
		ifound=currentGalleryImages.length-1;
	$('.ui.page.dimmer.slideshow img').attr('src',currentGalleryImages[ifound]);
	currentGalleryImage=currentGalleryImages[ifound];
}

function galleryGoRight(){
	var ifound=currentGalleryImages.findIndex(function(val){
		if(val===currentGalleryImage)
			return true;
		return false;
	});
	ifound=(ifound===-1)?-1:ifound;
	ifound++;
	if (ifound===currentGalleryImages.length)
		ifound=0;
	$('.ui.page.dimmer.slideshow img').attr('src',currentGalleryImages[ifound]);
	currentGalleryImage=currentGalleryImages[ifound];
}
