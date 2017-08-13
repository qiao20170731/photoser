var img = ['img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg', 'img/07.jpg', 'img/08.jpg', 'img/09.jpg', ];
var info = ['Editorial', 'Architecture', 'People', 'Places'];
$.each(img, function(t) {
	var list = $('.swiper-slide').eq(0).clone();
	list.find(".imgSs").attr('src', img[t]);
	$('.swiper-wrapper').append(list);

});
$(function() {
	function info() {
		$.each(info, function(i) {
			$('#info').html(info[i]);
		})
	};
	info();
	setInterval(info, 10);
	clearInterval(info);
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
})