$(document).ready(function() {
	$('#login').click(function() {
		var userName = $('#username').val();
		var password = $('#password').val();

		/**
		 * 此处加入登录代码
		 */
		console.log(userName, password);
	});

	$('.marquee').marquee({
		duration: 25000,
		gap: 0,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		startVisible: true,
		pauseOnHover: true
	});
});
