$(function(){

	$.get("http://127.0.0.1/mbaobao/static/php/index-lunbo.php", function(data){
//		console.log(data); 		
		var arr = JSON.parse(data);		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];		
			$("<li><img src="+ obj.img +" ></li>").appendTo("#banner-pc");
			var li = $("<a></a>").appendTo("#slides");			
			if (i==0) {
				li.addClass("active");
			}
		}		
		//轮播
		lunbo();
	})
	function lunbo(){
		var _bannerPc = $("#banner-pc");
		var _slides = $("#slides");
		var _li1 = $("#banner-pc li");
		var _aA = $("#slides a");		
		//初始化显示第一张图
		_li1.eq(0).show().siblings().hide();		
		//图片总数量
		var size = $("#banner-pc li").size(); //4		
		//自动轮播
		var i = 0; //记录图片下标
		var timer = setInterval(function(){
			i++;
			move(); 
		}, 5000);		
		//移动的函数
		function move(){			
			//如果i超出了图片总数量
			if (i == size) {
				i = 0; //即将移动到2张图
			}			
			//透明度切换到第i张图
			_li1.eq(i).stop().fadeIn().siblings().stop().fadeOut();			
			//改变ul2的按钮状态
			_aA.eq(i).removeClass().addClass("active").siblings().removeClass("active"); 			
		}
		_aA.mouseenter(function(){
			i = $(this).index();
			move();
		})				
	}
	
	//floor1
	//先获取轮播图的数据	
	$.get("http://127.0.0.1/mbaobao/static/php/floor-lunbo.php", function(data){
//		console.log(data); 		
		var arr = JSON.parse(data);
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];	
//			console.log(obj.img);
			$("<li><a href='javascript:void(0);'><img src="+ obj.img +" ><a></li>").appendTo("#bx-viewport");
			var li = $("<li>"+ obj.name +"</li>").appendTo("#list1");			
			if (i==0) {
				li.addClass("active");
			}
		}	
		//轮播
			lunbo1("#bx-viewport","#bx-viewport li","#list1","#list1 li");
	})
	
	//floor2
	//先获取轮播图的数据	
	$.get("http://127.0.0.1/mbaobao/static/php/floor2-lunbo.php", function(data){
		//console.log(data); 		
		var arr = JSON.parse(data);		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];			
			$("<li><a href='javascript:void(0);'><img src="+ obj.img +" ><a></li>").appendTo("#bx-viewport2");
			var li = $("<li>"+ obj.name +"</li>").appendTo("#list2");			
			if (i==0) {
				li.addClass("active");
			}
		}		
		//轮播
			lunbo1("#bx-viewport2","#bx-viewport2 li","#list2","#list2 li");
	})
	
	//floor3
	//先获取轮播图的数据	
	$.get("http://127.0.0.1/mbaobao/static/php/floor3-lunbo.php", function(data){
		//console.log(data); 		
		var arr = JSON.parse(data);		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];			
			$("<li><a href='javascript:void(0);'><img src="+ obj.img +" ><a></li>").appendTo("#bx-viewport3");
			var li = $("<li>"+ obj.name +"</li>").appendTo("#list3");			
			if (i==0) {
				li.addClass("active");
			}
		}		
		//轮播
			lunbo1("#bx-viewport3","#bx-viewport3 li","#list3","#list3 li");
	})
	
	//floor4
	//先获取轮播图的数据	
	$.get("http://127.0.0.1/mbaobao/static/php/floor4-lunbo.php", function(data){
		//console.log(data); 		
		var arr = JSON.parse(data);		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];			
			$("<li><a href='javascript:void(0);'><img src="+ obj.img +" ><a></li>").appendTo("#bx-viewport4");
			var li = $("<li>"+ obj.name +"</li>").appendTo("#list4");			
			if (i==0) {
				li.addClass("active");
			}
		}		
		//轮播
			lunbo1("#bx-viewport4","#bx-viewport4 li","#list4","#list4 li");
	})
	
	//floor5
	//先获取轮播图的数据	
	$.get("http://127.0.0.1/mbaobao/static/php/floor5-lunbo.php", function(data){
		//console.log(data); 		
		var arr = JSON.parse(data);		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];			
			$("<li><a href='javascript:void(0);'><img src="+ obj.img +" ><a></li>").appendTo("#bx-viewport5");
			var li = $("<li>"+ obj.name +"</li>").appendTo("#list5");			
			if (i==0) {
				li.addClass("active");
			}
		}		
		//轮播
			lunbo1("#bx-viewport5","#bx-viewport5 li","#list5","#list5 li");
	})
	
	//jq轮播图
	function lunbo1(id,idx,id1,id1x){		
		var list1 = $(id);
		var list2 = $(id1);
		var li1 = $(idx);
		var li2 = $(id1x);		
		//复制第一张图到最后
		li1.first().clone(true).appendTo(list1);		
		//
		var size = $(idx).size();
		list1.width(952*size);		
		//开启定时器
		var i = 0;
		var timer = setInterval(function(){
			i++;
			move();
		}, 3000);		
		function move(){			
			if (i < 0) {
				list1.css("left", -952*(size-1));
				i = size-2;
			}			
			if (i >= size){
				list1.css("left", 0);
				i = 1;
			}			
			list1.stop().animate({left:-i*952}, 500);
			
			li2.eq(i).addClass("active").siblings().removeClass("active");
			if (i == size-1) {
				li2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}
		li2.click(function(){
			i = $(this).index();
			move();
		})
	}		
	//全局变量， 用来保存获取到json中的所有商品数据
	var arr = [];	
	//先获取数据并创建节点，显示数据
	$.get("http://127.0.0.1/mbaobao/static/php/index-detail.php", function(data){
		//console.log(data);
		arr = JSON.parse(data);		
		//遍历json中的所有商品数据，并用节点显示
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];			
			//创建li节点
			var li = $("<li></li>").appendTo(".mod-pro-list ul");
			$("<a href='javascript:void(0);' class='pic'><img src="+ obj.headImg +" title='"+ obj.name +"'></a>").appendTo(li);
			$("<div class='info'><span><a href='javascript:void(0);' title='"+ obj.name +"'>"+ obj.name +"</a></span><span class='price'>"+obj.unit+obj.price+"<s>"+obj.unit+obj.mbbPrice+"</s></span></div>").appendTo(li);						
		}		
	})	
	//点击商品
	$(".mod-pro-list ul").on("click", "li", function(){
		//console.log("click");
		var index = $(this).index(); 
		var obj = arr[index];
		//console.log(obj.id);		
		//进入详情页， 且将当前点击的商品的id传入
		location.href = "detail.html?id=" + obj.id;		
	})
	//表示是否点击了楼层按钮正在执行动画
	var isMoving = false;	
	//点击楼层按钮， 让页面滚动到对应的楼层
	$("#menu-left li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		var top = $(".floor-warp .warp").eq(index).offset().top;
		
		isMoving = true;
		$("html,body").animate({scrollTop: top},function(){
			isMoving = false;
		});
	})	
	//滚动页面
	$(window).scroll(function(){
		//如果没有点击楼层按钮执行动画， 则执行代码
//		console.log(isMoving);
		if (isMoving == false) {
			var scrollTop = $(window).scrollTop();			
			//遍历所有的楼层div
			var index = 0;
			$(".floor-warp .warp").each(function(key,val){
				//每个楼层div的top值
				var top = $(this).offset().top;
				var winH = $(window).height(); //页面高度
				if (scrollTop - winH >= top) {
					index = $(this).index() + 1;
				}
			})
			//console.log(index);
			$("#menu-left li").eq(index).addClass("active").siblings().removeClass("active")
		}				
	})
	
	//获取购物车的cookie数据,并用节点显示
	refresh();
	function refresh() {
		
		var arr = $.cookie("cart");
		if (arr && arr.length > 2) {
			arr = JSON.parse(arr);
			
			//先清除旧节点
			$("#cart-items").empty();
			
			//再添加新节点
			var totalPrice = 0; //总价
			var num = 0; //总件数
			//遍历数组
			var shtml ='';
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				
				//创建li节点
				shtml += "<dd>"+
							"<div class='goods-item'><div class='g-pic'><a href='javascript:void(0);'><img src='"+obj.headImg+"' ></a></div><div class='g-info'><p class='name'><a href='javascript:void(0);'>"+obj.name+"</a></p><p class='num-pos'>"+obj.num+"</p><p class='price-pos'>"+obj.unit+obj.price+"</p><p class='del-pos'><a href='javascript:void(0);' class='del'>[删除]</a></p></div></div>"+
						"</dd>";
				//计算总价
				totalPrice += obj.price * obj.num;
				num += obj.num;
			}
			$("<dl></dl>").appendTo($("#cart-items"));
			$("#cart-items dl").append(shtml);
			$("<div class='cart-total'><div class='total-num'><strong class='red'>"+num+"</strong>件总计：<span class='price'>"+obj.unit+"<b>"+totalPrice+"</b></span></div><a href='cart.html' class='go-checkout'>去购物车结算</a></div>").appendTo($("#cart-items"));
			$(".down em").html(num);
			$(".cart-content").hide();
		}
		else {
			$(".cart-content").show();
		}
	}
	$("#cart-items dl").on("click", ".del", function(){
		var index = $(this).index();
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index, 1); //删除数组arr的第index个
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		$(this).parents('dd').remove();
		var dd_length = $('#cart-items dd').size();
		if(dd_length == 0){
			$("#cart-items").hide();
			$(".cart-content").show();
		}
		var totalPrice =0;
		var num = 0;
		for(var i=0;i<arr.length;i++){
			var obj = arr[i];
		totalPrice += obj.price * obj.num;
		num += obj.num;
		}
				
		$(".down em").html(num);		
		//刷新节点数据
		refresh();
		
	})
	
	
	
	
	
})
