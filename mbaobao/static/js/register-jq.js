$(function(){
	$.idcode.setCode();
	$("#menu-m,#menu-c").hover(function(){
		$("#menu-c").show();
	},
	function(){
		$("#menu-c").hide();
	})
	
	//手机号
	$("#reg-username").focus(function(){
		$(this).css({border:"1px solid #ff8181",boxShadow:"0 0 2px 2px #ffe3e3"});
		$("#reg-username + span").css("color","#72ba07").html("请填写正确的11位手机号码并进行验证");
	})
	$("#reg-username").blur(function(){
		if(!$(this).val){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-username + span").html("");			
		}
		else if(checkPhone()){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-username + span").html("<img src='static/img/index/1.png' />");						
		}
		else{
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-username + span").css("color","red").html("<img src='static/img/index/2.png' />手机号码格式错误，请重新填写");
		}
	})
	//密码
	$("#reg-password").focus(function(){
		$(this).css({border:"1px solid #ff8181",boxShadow:"0 0 2px 2px #ffe3e3"});
		$("#reg-password + span").css("color","#72ba07").html("请填写6-20位密码，可以使用字母和数字组合");
	})
	$("#reg-password").blur(function(){
		if(!$(this).val){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-password + span").html("");			
		}
		else if(checkPwd()){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-password + span").html("<img src='static/img/index/1.png' />");						
		}
		else{
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-password + span").css("color","red").html("<img src='static/img/index/2.png' />格式错误，请使用字母加数字或符号的组合，请使用6-20个字符");
		}
	})
	//重复密码
	$("#reg-password1").focus(function(){
		$(this).css({border:"1px solid #ff8181",boxShadow:"0 0 2px 2px #ffe3e3"});
		$("#reg-password1 + span").css("color","#72ba07").html("请填写6-20位密码，可以使用字母和数字组合");
	})
	$("#reg-password1").blur(function(){
		if(!$(this).val){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-password1 + span").html("");			
		}
		else if(checkPwdr()){
			if($(this).val == $("#reg-password").val ){
				$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
				$("#reg-password1 + span").html("<img src='static/img/index/1.png' />");
			}else{
				$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
				$("#reg-password1 + span").css("color","red").html("<img src='static/img/index/2.png' />两次密码输入不一致，请重新输入");
			}						
		}
		else{
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-password1 + span").css("color","red").html("<img src='static/img/index/2.png' />两次密码输入不一致，请重新输入");
		}
	})
	//短信验证
	$("#reg-tel-verifycode").focus(function(){
		$(this).css({border:"1px solid #ff8181",boxShadow:"0 0 2px 2px #ffe3e3"});
		$("#reg-tel-verifycode + span").css("color","#72ba07").html("请填写短信验证码");
	})
	$("#reg-tel-verifycode").blur(function(){
		if(!$(this).val){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-tel-verifycode + span").html("");			
		}
		else if(checkYzm()){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-tel-verifycode + span").html("<img src='static/img/index/1.png' />");						
		}
		else{
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			$("#reg-tel-verifycode + span").css("color","red").html("<img src='static/img/index/2.png' />错误，请确认验证码");
		}
	})
	//点击获取短信验证码
	$("#green-link").click(function(){
		$(".sms-code").hide();
		$(".photo-code").show();	
	})
	
	//验证码输入检测
	$("#reg_sendsms-verifycode").focus(function(){
		$(this).css({border:"1px solid #ff8181",boxShadow:"0 0 2px 2px #ffe3e3"});		
	})
	$("#reg_sendsms-verifycode").blur(function(){
		if(!$(this).val()){
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});		
		}
		else if(checkYzm()){
			if($(this).val() == $("#reg-verifycode-sms").val() ){
				$(this).css({border:"1px solid #e1e1e1",boxShadow:""});				
			}else{
				$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
			}						
		}
		else{
			$(this).css({border:"1px solid #e1e1e1",boxShadow:""});
		}
	})
	//确定发送
	$("#sms_sendcode").click(function(){
		if($.idcode.validateCode() ){
			$("#reg-verifycode-box").hide();
			$(".sms-code").show();
			var i=60;
			setTimeout(fn, 1000);
			function fn(){
				$("#green-link").html(--i  + "秒");
				if (i == 0) {
					$("#green-link").html("免费获取短信验证码<i class='arrow'></i>");//隐藏					
				}
				else {
					setTimeout(fn, 1000);
				}
			}
		
		}else{
			alert("请先获取验证码");
		}
	})
	//点击注册
	$("#reg-submit").click(function(){
		if($("#reg-checkbox").is(":checked")==true && checkPhone() && checkPwd() && checkPwdr() && checkYzm()){
//			alert("注册成功");	
			var xhr = new XMLHttpRequest();
            xhr.open("post", "http://localhost/mbaobao/static/php/register.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var str = "username="+$("#reg-username").val() + "&pwd="+$("#reg-password").val();
              console.log(str);
            xhr.send(str);
            xhr.onreadystatechange = function () {
                if (xhr.readyState==4 && xhr.status==200) {
                    console.log(xhr.responseText);
                    //json解析
                    var obj = JSON.parse(xhr.responseText);
                    //如果注册成功则进入登录页面
                    if (obj.status == 1) {
						location.href = "login.html";                    	
                    }
                    //如果失败则弹出提示信息
                    else {
                    	alert(obj.msg);	
                    }
                }
            }
			
		}
		else{
			if(!checkPhone()){
				$("#reg-username").focus();	
			}
			else if(!checkPwd()){
				$("#reg-password").focus();
			}
			else if(!checkPwdr()){
				$("#reg-password1").focus();
			}
			else if(!checkYzm()){
				alert('验证码输入不正确，请检查');
			}
		}
	})
	//判断是否敲击了Enter键 
	$(document).keyup(function(event){ 
	    if(event.keyCode ==13){ 
	      $("#reg-submit").trigger("click"); 
	    } 
	});

})

//手机号检测
function checkPhone(){
	var val = $("#reg-username").val();
	var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
	return reg.test(val);					
}
//密码检测
function checkPwd(){
	var val = $("#reg-password").val();
	var reg = /^.{6,20}$/;
	return reg.test(val);					
}
//重复密码检测
function checkPwdr(){
	var val = $("#reg-password1").val();
	var reg = /^.{6,20}$/;
	return reg.test(val);					
}	
//验证码检测
function checkYzm(){
	if($(".sms-code").is(":visited")==true){
		var val = $("#reg_sendsms-verifycode").val();
		var reg = /^\d{6}$/;//短信验证
		return reg.test(val);
	}else{
		var IsBy = $.idcode.validateCode();
		return IsBy;
	}
}