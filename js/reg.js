var info = $('.info');
var login = $('.login');
var reg = $('.reg');
var user = $('#user');
var pass = $('#pass');
login.click(function() {
	location.href = 'login.html';
});

var lc = localStorage;
lc.clear(); //清除所有子元素

reg.click(function() {
	var uu = user.val().trim();
	var pp = pass.val().trim();
	if(uu == '' && pp == '') {
		info.html('请输入用户名和密码！');
	} else if(pp == '') {
		info.html('密码不能为空！');
	} else if(uu == '') {
		info.html('用户名不能为空！');
	} else {
		lc.setItem('user', uu);
		lc.setItem('pass', pp);
		alert('注册成功!');
		location.href='login.html';
	}
});