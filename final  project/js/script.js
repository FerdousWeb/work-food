$('.portfolio-item').isotope({
	itemSelector:'.item',
	layoutModel : 'fitRows'
});

$('.portfolio-menu ul li').click(function (){
	$('.portfolio-menu ul li').removeClass('active');
	$(this).addClass('active');

	var selector =$(this).attr('data-filter');
	$('.portfolio-item').isotope({
		filter:selector
	});
});

//navbar color

// $(window).scroll(function () {
//     var scrollPosition = $(window).scrollTop();
//     if(scrollPosition > 20) {
//         $('#myNavbar').css ( {
//             'background-color' : 'gray',
//             'z-index' : '99999'
//         })
//     }else {
//         $('#myNavbar').css ('background-color','transparent')
//     }
// });
//navbar color



// lightbox.option({
// 	'resizeDuration' : 2000,
// 	'wrapAround' : true;
// 	'alwaysShowNavOnTouchDevices' : true;
// 	'disableScrolling' : true,
// 	'positionFormTop' : 50,
// 	'showImageNumberLabel' : true

// });