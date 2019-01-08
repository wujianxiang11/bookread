window.onload=function(){
	var slides=JSON.parse(localStorage.getItem('slides'));
	
	for(var i=0;i<slides.length;i++){
		var div=$("<div class='swiper-slide'></div>");
		var img=$("<img src='images/slides/"+slides[i]+"'>");
		div.append(img);
		$(".swiper-wrapper").append(div);
	}
	new Swiper('.swiper-container',{
				autoplay:true,
				loop:true,
				pagination:{
					el:'.swiper-pagination',
					clickable:true
				},
				navigation:{
					prevEl:'.swiper-button-prve',
					nextEl:'.swiper-button-next'
				}
	});
	/////////////////////////////////////////////图书分类///////////////////////////////////////////////////////////////
	var bookTypes=JSON.parse(localStorage.getItem('bookTypes'));
	for(var index in bookTypes){
		var div=$('<div class="ifp" num='+index+'></div>')
		var h2=$("<h3>"+bookTypes[index].title+"</h3>");
		div.append(h2);
        var mydiv=$('<div class="list"></div>');
		for(var i=0;i<bookTypes[index].list.length;i++){
			
			var span=$("<span><a href='javascript:void(0)'>"+bookTypes[index].list[i].name+"</a></span>");
			mydiv.append(span);
			
		}
			div.append(mydiv);
		$('.divif').append(div);
	}
		//
	$(function(){
		$('.ifp').mouseover(function(obj){
			$('.bodyfirst001').html("");
			var num=$(this).attr('num');
			for( var f=0;f<bookTypes[num].list.length;f++){
			var bookTypesdiv=$("<h4 class='bookTypesdiv'>"+bookTypes[num].list[f].name+"</h4>");
			var bookTypesdiv2=$("<div class='bookTypesdiv2'></div>");
			for(var d=0;d<bookTypes[num].list[f].content.length;d++){
				var bookTypesspan=$("<p class='bookTypesspan'><a href='javascript:void(0)'>"+bookTypes[num].list[f].content[d]+"</a></p>");
				bookTypesdiv2.append(bookTypesspan);
			}
			// var bookTypesspan
			$('.bodyfirst001').append(bookTypesdiv);
			$('.bodyfirst001').append(bookTypesdiv2);
			
			$(this).css("background","#ffe4dc")
			$('.bodyfirst001').css("display","block");

		}
		});
		$('.ifp').mouseout(function(obj){
			$(this).css("background","#fff")
			$('.bodyfirst001').css("display","none");
		});
		$('.bodyfirst001').mouseover(function(){
			
			$('.bodyfirst001').css("display","block");
		});
		$('.bodyfirst001').mouseout(function(){
			
			$('.bodyfirst001').css("display","none");
		});
		
	})





	////////////////////////////////////////////////////////////图书畅销榜//////////////////////////////////////////////////
	var bestSelling=JSON.parse(localStorage.getItem('bestSelling'));
	
	for(var j in bestSelling){
		
		var div=$('<div class="bestdiv"></div>');
		if(j<9){
			var span=$('<span>'+"0"+(j*1+1)+"."+bestSelling[j]+'</span>'+"<span>"+'<i class="iconfont icon">&#xe64a;</i>'+"</span>")
		}else{
			var span=$('<span>'+(j*1+1)+"."+bestSelling[j]+'</span>'+"<span>"+'<i class="iconfont icon">&#xe64a;</i>'+"</span>")
		}
		
		div.append(span);
		$('.bodythird3').append(div);
	}
	//////////////////////////////////////////////////////////淘书热销////////////////////////////////////////////////////
	var taoshutuan=JSON.parse(localStorage.getItem('taoshutuan'));
	
	for(var i=0;i<taoshutuan.length;i++){
		var divs=$("<div class='divs'><img src='images/imgs/taoshu/"+taoshutuan[i].img+"'></div>");
		var myp=$('<p class="mypp2">'+taoshutuan[i].desc+'</p>');
		var span1=$('<span class="myspan1">'+'团购价:'+'￥'+taoshutuan[i].newPrice+'</span>')
		var span2=$('<span class="myspan2">'+'￥'+taoshutuan[i].oldPrice+'</span>')
		var nums1=taoshutuan[i].newPrice;
		var nums2=taoshutuan[i].oldPrice;
		var num=((nums1/nums2)*10).toFixed(1);
		// console.log(num);
		var span=$('<span class="myspan3">'+num+"折"+'</span>')
		
		
		var divs1=$('<div class="mydivs1"></div>')
		
		divs1.append(span1);
		divs1.append(span2);
		divs1.append(span);

		divs.append(myp);
		divs.append(divs1);

		// var divs1=$('<div><span class="myspan1">'+taoshutuan[i].newPrice+'</span><span class="myspan2">'+taoshutuan[i].oldPrice+'</span><span class="myspan3">'+num+"折"+'</span></div>')
		$('.bodytaoshu').append(divs);
		// $('.bodytaoshu').append(myp);
		// $('.bodytaoshu').append(divs1);
	}
	////////////////////////////////////////////新书上架促销//////////////////////////////////////////////////////
	var newbooks=JSON.parse(localStorage.getItem('newbooks'));

	for(var a=0;a<newbooks.length;a++){
		var px=$("<p class='px1'>"+newbooks[a].title+"</p>");
		var px1=$("<p class='px2'>"+newbooks[a].author+"</p>");
		var px2=$("<p class='px3'>"+"￥"+newbooks[a].newPrice+"</p>");
		var px3=$("<p class='px4'>"+"￥"+newbooks[a].newPrice+"</p>");
		var divx=$("<div class='divx'><img src='images/imgs/newbooks/"+newbooks[a].img+"'></div>");
		var divx0=$('<div class="divx01"></div>');
		divx0.append(px);
		divx0.append(px1);
		divx0.append(px2);
		divx0.append(px3);
		divx0.append(divx)
		$('.xinshu01').append(divx0);
	}
	/////////////////////////////////平台自营//////////////////////////////////////////////////////////////////////
	var selfSupport=JSON.parse(localStorage.getItem('selfSupport'));
		for(var c=0;c<selfSupport.length;c++){
			var selfdiv=$('<div class="selfdiv" onmouseover="changes('+c+',this)">'+selfSupport[c].title+'</div>');
			$('.pingtaititle').append(selfdiv);

		}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
														//出版社直销left
		var pressList=JSON.parse(localStorage.getItem('pressList'));
				var divhidden=$('<div class="divhidden"></div>')
			for(var y=0;y<pressList.length;y++){
				var pressListdiv=$("<div class='pressListdivs' onmouseover='xuanfu("+y+",this)'>"+'<div class=xuanfudiv>'+pressList[y].name+'</div>'+'<p class="xuanfup">'+'<i class="iconfont icon wbs11">&#xe64a;</i>'+'</p>'+"</div>");
				console.log(pressListdiv);
				divhidden.append(pressListdiv)
			};
			$('.chuban11').append(divhidden);


		
		
	

		
}

	
	



///////////////////////////////////////////////猜你喜欢 本周精选 主编推荐////////////////////////////////////////////////
	//1
	$(function(){
		change('guessLikes');
	})
	function change(obj,y){
		$('.bodysthird3').empty();
		$('.bodysthird4').empty();
		$('.cainixihuan').removeClass('bodythirsss');
		$(y).addClass('bodythirsss');


	var aa=JSON.parse(localStorage.getItem(obj));
	// console.log(aa);
	// for(var x in guessLikes ){
	// 	var imges="<img src='images/imgs/guessLikes/'"+like+guessLikes[0].+'>'"</img>";
		
	// }
	var imges="<img src='images/imgs/"+obj+"/"+aa[0].img+"'>";
	var mydiv=$('<div class="bodysthird2"></div>');
	var mydiv1=$('<div class="mydiv1"></div>');
	var mydiv2=$('<div class="mydiv2"></div>')
	var title=aa[0].title;
	var newprice=aa[0].newPrice;
	var oldprice=aa[0].oldPrice;
	var desc=aa[0].desc;
	var p1=$('<p ></p>');
	p1.append(title);
	var p2=$('<span class="p2"></span>');

	p2.append(newprice);
	var p3=$('<span class="p3"></span>');
	p3.append(oldprice);
	var p4=$('<p class="p1"></p>');
	p4.append(desc);
	mydiv1.append(p1);
	mydiv1.append(p2);
	mydiv1.append(p3);
	mydiv1.append(p4);
	mydiv.append(mydiv1);
	mydiv2.append(imges);
	$(".bodysthird3").append(mydiv2);
	// $(".bodysthird3").append(mydiv);
	$(".bodysthird3").append(mydiv1);
	for(var i=1;i<guessLikes.length;i++){
		var divs=$('<div class="mydiv0"></div>');
		var imges1="<img src=images/imgs/"+obj+"/"+aa[i].img+">";
		var p5=$('<p class="p5"></p>');
		var p6=aa[i].desc;
		p5.append(p6);
		var span1=$('<span class="span1"></span>');
		var span3=aa[i].newPrice;
		span1.append(span3);
		var span2=$('<span class="span2"></span>');
		span4=aa[i].oldPrice;
		span2.append(span4)
		var divq=$('<div class="mydiv01"></div>');
		divq.append(imges1);
		divs.append(divq);
		divs.append(p5);
		divs.append(span1);
		divs.append(span2);
		$('.bodysthird4').append(divs);
	}
	//////出版社直销
			

		





}
	//////////////////////////////////////////////////////平台自营//////////////////////////////////////////////////////
	var selfSupport=JSON.parse(localStorage.getItem('selfSupport'));
	$(function(){
			changes(0);
		})
	function changes(abs,x){
		//平台自营左侧栏
		$('.pingtai02').empty();
		$('.pingtai03').empty();

		$('.selfdiv').removeClass('pingtaiziying');
		$(x).addClass('pingtaiziying');

		var selfsdiv1=$('<div class="selfsdiv1"></div>')
		var selfsdiv=$("<div class='selsdiv'>自营好书推荐</div>");
		var selfimg=$("<img src='images/imgs/selfSupport/"+selfSupport[abs].list[0].img+"'>").appendTo(selfsdiv1);
		var selfdesc=$('<p class="selfps">'+selfSupport[abs].list[0].title+'</p>').appendTo(selfsdiv1);
		var selfnew=$('<span class="span001">'+"￥"+selfSupport[abs].list[0].newPrice+'</span>').appendTo(selfsdiv1);
		var selfold=$('<span class="span0010">'+"￥"+selfSupport[abs].list[0].oldPrice+'</span>').appendTo(selfsdiv1);
		$('.pingtai02').append(selfsdiv);
		$('.pingtai02').append(selfsdiv1);
////////////////////////////////////////////////平台自营右侧栏///////////////////////////////////////////////////////////////////
	
		for(var d=0;d<selfSupport[abs].list.length;d++){
			
			
			var ddiv=$('<div class="ddiv"></div>');
			var ddiv2=$('<div class="ddiv2"></div>');
			var dselfimg=$("<img src='images/imgs/selfSupport/"+selfSupport[abs].list[d].img+"'>").appendTo(ddiv2);
				ddiv.append(ddiv2);
			var dselfdesc=$('<p class="selfp">'+selfSupport[abs].list[d].title+'</p>').appendTo(ddiv);
			var selfnew=$('<span class="selfspan1">'+"￥"+selfSupport[abs].list[d].newPrice+'</span>').appendTo(ddiv);
			var selfold=$('<span class="selfspan2">'+"￥"+selfSupport[abs].list[d].oldPrice+'</span>').appendTo(ddiv);
			$('.pingtai03').append(ddiv);
		}
	}
	//出版社直销的箭头事件
	function dianji2(){
		$('.divhidden').css({
			position:'relative',
			top:'0px'
		})
	}
	
	function dianji(){
		$('.divhidden').css({
			position:'relative',
			top:'-450px'
		})
	}
///////////////////////////////////////////出版社直销///////////////////////////////////////////////////////////
	$(function(){
		xuanfu(0);
	})
	function xuanfu(abx,d){
					$('.pressListdivs').removeClass('pressbackground');
					$(d).addClass('pressbackground');
				
					$('.chubantop').empty();
					$('.chubanbt').empty();
					var pressList=JSON.parse(localStorage.getItem('pressList'));
					var pressListname=$('<h3>'+pressList[abx].name+'</h3>');
					var pressListdesc=$('<p>'+pressList[abx].desc+'</p>');

					$('.chubantop').append(pressListname);
					$('.chubantop').append(pressListdesc);
					

			for(var z=0;z<pressList[abx].list.length;z++){
			var pressListimg=$('<div ><img src="images/imgs/press/'+pressList[abx].list[z].img+'"></div>');
			var pressListmyp=$('<p class="pressListmyp">'+pressList[abx].list[z].title+'</p>');
			var pressListnew=$('<span class="pressListnew">'+"￥"+pressList[abx].list[z].newPrice+'</span>');
			var pressListold=$('<span class="pressListold">'+"￥"+pressList[abx].list[z].oldPrice+'</span>');
			var pressListdiv=$('<div class="pressListdiv"></div>');
			pressListdiv.append(pressListimg);
			pressListdiv.append(pressListmyp);
			pressListdiv.append(pressListnew);
			pressListdiv.append(pressListold);
			$('.chubanbt').append(pressListdiv);
		}
	}
	//////////////////////////////////////图书分类悬///////////////////////////////////////////
