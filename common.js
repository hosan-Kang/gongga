/* 상단 메뉴 스크롤시 고정 */
$(document).ready(function() {
	var bodyOffset = $('body').offset();
	$(window).scroll(function() {
		if ($(document).scrollTop() > bodyOffset.top) {
			$('#header').css('background', '#516dd1');
		} else {
			$('#header').css('background', 'transparent');
		}
	});
});