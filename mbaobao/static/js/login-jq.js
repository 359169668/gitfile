$(function(){

	//手机号检测
	function checkPhone(){
		var val = $("#login-username").val();
		var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0-9])|(18[0-9])|199)\d{8}$/;
		return reg.test(val);
	}
	//密码检测
	function checkPwd(){
		var val = $("#login-pwd").val();
		var reg = /^.{6,20}$/;
		return reg.test(val);					
	}
	//手机号
	$("#login-username").focus(function(){
		$(this).css({border:"1px solid #ff8181", boxShadow:"0 0 2px 3px #ffe3e3"});
	})
	$("#login-username").blur(function(){
		if(!$(this).val()){
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});
			$("#login-error").find("span").css("display","block").html("请填写手机号码或者邮箱");			
		}
		else if(checkPhone()){
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});
			$("#login-error").find("span").hide();	
		}
		else{
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});
			$("#login-error").find("span").show().html("用户名不存在");										
		}
	})
	//密码
	$("#login-pwd").focus(function(){
		$(this).css({border:"1px solid #ff8181", boxShadow:"0 0 2px 3px #ffe3e3"});
	})
	$("#login-pwd").blur(function(){
		if( !$(this).val() ){
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});			
		}
		else if(checkPwd()){
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});
			$("#login-error").find("span").hide();	
		}
		else{
			$(this).css({border:"1px solid #e1e1e1", boxShadow:""});
			$("#login-error").find("span").show().html("密码必须大于等于6位");										
		}
	})
	//点出登录
	$(".btn").click(function(){

		if(checkPhone() && checkPwd()){
			var xhr = new XMLHttpRequest();
            xhr.open("post", "http://127.0.0.1/mbaobao/static/php/login.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var str = "username="+$("#login-username").val() + "&pwd="+$("#login-pwd").val();
            xhr.send(str);
            xhr.onreadystatechange = function () {
                if (xhr.readyState==4 && xhr.status==200) {
//                  console.log(xhr.responseText);
                    //json解析
                     var obj = JSON.parse(xhr.responseText);
                    //如果登录成功直接进入首页
                    if (obj.status == 1) {
						location.href = "index.html";                    	
                    }
                    //如果失败则弹出提示信息
					else {
                    	alert(obj.msg);	
                    }
                }
            }		}
		else{
			if(!checkPhone()){
				$("#login-username").focus();
				$("#login-error").find("span").css("display","block").html("请填写手机号码或者邮箱");							
			}
			else if(!checkPwd()){
				$("#login-pwd").focus();
				$("#login-error").find("span").css("display","block").html("请填写密码");														
			}			
		}
	})

	//判断是否敲击了Enter键 
	$(document).keyup(function(event){ 
	    if(event.keyCode ==13){ 
	      $(".btn").trigger("click"); 
	    } 
	});
















})
