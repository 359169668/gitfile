$(function(){
	
	$("#site-x,#site").hover(
		function(){	
			$(this).addClass("over-group");
		},
		function(){
			$(this).removeClass("over-group");
		}
	)
	$("#car-x,#my-cart").hover(
		function(){	
			$(this).addClass("over-group");
		},
		function(){
			$(this).removeClass("over-group");
		}
	)
	
	
	
	
	$("#menu-c>div").hover(
		function(){
			$(this).css("box-shadow","0 0 10px rgba(0,0,0,.2)").find("div").show();
			$(this).find("s").show();
		},
		function(){
			$(this).css("box-shadow","").find("div").hide();
			$(this).find("s").hide();
		}
	)
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
			
		if(scrollTop>=600){
			$("#gotop,.menu-left").show();
		}else{
			$("#gotop,.menu-left").hide();
		}
	})
		
	$("#gotop").click(function(){
		 $('body,html').stop(true).animate({scrollTop:0},1000);
	})
	
})