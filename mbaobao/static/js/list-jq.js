var page_index;
var itemsOnPage = 12;
$(function(){
	
	$("#menu-m,#menu-c").hover(function(){
		$("#menu-c").show();
	},
	function(){
		$("#menu-c").hide();
	})
	
	//展开收缩菜单
	$("#category>#cate-8204").click(function (){		
       $(this).find("dd").toggle();
	})
	//移入小图切换大图
	$(".color-wrap").on("mouseenter","a",function(){
		var src = $(this).find("img").attr("src");
		$(this).parents('li').find('.mainpic img').attr("src",src.replace('-1.jpg','.jpg'));
	})

    
    $(".pagination").pagination({
        items: 40,
        itemsOnPage: itemsOnPage,
        cssStyle: 'dark-theme',
        onInit: changePage,
        onPageClick: changePage
    });	
})
function changePage(){
//  console.log("changePage");
    page_index = $(".pagination").pagination('getCurrentPage') -1;
    $(".show-type-style .result").hide();
    for(var i = page_index * itemsOnPage; i < page_index * itemsOnPage + itemsOnPage; i++){
        $(".show-type-style .result:eq(" + i + ")").show();
    }
}