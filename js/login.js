///jquery实现页面特效
var info = $('.info');
var user = $('#user');
var pass = $('#pass');
var reg = $('#reg');
var frm = $('.main');
///////实现跳转

frm.submit(function() {
	var uu = user.val().trim();
	var pp = pass.val().trim();
	var lc = localStorage;
	if(uu == lc.user && pp == lc.pass) {
		return true;
	} else {
		info.html('用户名密码错误！');
		return false;
	}
});
reg.click(function() {
	location.href = 'reg.html';
});