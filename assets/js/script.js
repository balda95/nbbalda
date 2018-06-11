
// Header Sticky

jQuery(document).ready(function(){
	var navOffset = jQuery(".header").offset().top;

	jQuery(".header").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").height(jQuery(".header").outerHeight());

	jQuery(".header").wrapInner('<div class="nav-inner"></div>');
	jQuery(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');

	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();
		
		if(scrollPos >= navOffset){
			jQuery(".header").addClass("fixed");
		}else{
			jQuery(".header").removeClass("fixed");
		}
	});
});

// Show More, Less 

$('document').ready(function(){
	$('.lessBtn').hide();
	$('.more').hide();
	$('.showBtn').click(function(){
		$('.more').show('slow');
		$('.showBtn').hide('slow');
		$('.lessBtn').show('slow');
	});

	$('.lessBtn').click(function(){
		$('.more').hide('slow');
		$('.showBtn').show('slow');
		$('.lessBtn').hide('slow');
	});
});

//  Menu Toggle

$('.menu').click(function(){
    $('.ui.sidebar')
		.sidebar('setting', 'transition', 'overlay')
		.sidebar('toggle');
		
    });

$('.menu_toggle').click(function(){
	$('.ui.sidebar')
		.sidebar('toggle');
});


// Content Image 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){ 
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("img_slide");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}





// Content Right 

// Users Comment

$(document).ready(function () {
	$('.userCom').keyup(function (){
		var inputLenght = $(this).val().length;
		var remain = 200 - inputLenght;

		$('.iLength').html(remain);

		if(remain >= 0){
			$('.iLength').css('color', 'blank');
		}else{
			$('.iLength').css('color', 'red');
		}
	});
});
	

// Image Change

$(document).ready(function () {
	var img = 1;

	var deger = setInterval(function (){
		$('.right_banner_img img').attr("src", "image/" + img + ".jpg");
		if(img == 4){
			img = 0;	
		}
		img++;
	}, 2000);
});


// Image Like

$(document).ready(function () {
	var ind=0;

	$('.like img').on('click', function (){
		$('.index').html(function (index, html) {
				ind++;
				return index + ind;	
			});
	});
});



