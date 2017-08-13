var img = ['img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg', 'img/07.jpg', 'img/08.jpg', 'img/09.jpg', ];
var info = ['Editorial', 'Architecture', 'People', 'Places'];
$.each(img, function(t) {
	var list = $('.swiper-slide').eq(0).clone();
	list.find(".imgSs").attr('src', img[t]);
	$('.swiper-wrapper').append(list);

});
$(function() {
	function ini() {
		var temp = Math.floor(Math.random() * info.length)
		$('#info').html(info[temp]);
	};
	setInterval(ini, 2750);
	clearInterval(ini);

});
$(function() {
	var hig = $(window).height();
	$('.imgSs').css('height', hig);
});

/*aside*/
$(function() {
	$('#aside>.menu').click(function() {
		$('.menuList').slideToggle(1000)
	});
	$('.share1>.btn').click(function() {
		$('.share1_link').slideToggle(500)
	});
	$('.share1').mouseleave(function() {
		$('.share1_link').slideUp(500)
	});
})