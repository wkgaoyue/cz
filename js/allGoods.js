$(function(){
	/*导航1右侧的两个图标*/
	$('.nav1 .nav1-right li:eq(0)').hover(function(){
		$(this).find('img').attr('src','./imgs/user-active.png')
	},function(){
		$(this).find('img').attr('src','./imgs/user.png')
	});
	$('.nav1 .nav1-right li:eq(1)').hover(function(){
		$(this).find('img').attr('src','./imgs/cart-active.png')
		$('.cart-dis').fadeIn();
	},function(){
		$(this).find('img').attr('src','./imgs/cart.png');
		$('.cart-dis').hide();
	});
	/*end 导航1右侧的两个图标*/

	/*导航1右侧的购物车图标显示*/
	$('.cart-dis').hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	/*end 导航1右侧的购物车图标显示*/

	/*导航1固定在顶部*/
	$(window).scroll(function(){
		//获取屏幕宽度
		var winwidth=$(window).width();
		// 当为PC端的时候
		if(winwidth>=1300){
			var scrTop = $(document).scrollTop();
			if(scrTop>=400){
				$('.nav1').css({
					'position':'fixed',
					'top':0,
					'z-index': 20,
					'width':'100%',
					'min-height':'50px'
				});
				$('.nav1-con').css({
					'margin-top':0
				});
			}
			else{
				$('.nav1').css({
					'position':'relative',
					'min-height':'100px'
				})
				$('.nav1-con').css({
					'margin-top':'20px'
				});
			}
		}//当为移动端的时候
		else{
			var scrTop = $(document).scrollTop();
			if(scrTop>=400){
				$('.nav1').css({
					'position':'fixed',
					'top':0,
					'z-index': 20,
					'width':'100%'
				});
			}
			else{
				$('.nav1').css({
					'position':'relative'
				})
			}
		}
		
	});
	/* end 导航1固定在顶部*/

	//导航2手机
	$('.nav2 .phone').hover(function(){
		$('.phone-dis').slideDown();
	},function(){
		$('.phone-dis').hide();
	}) 
	$('.phone-dis').hover(function(){
		$(this).show();
	},function(){
		$(this).slideUp();
	})
	//end 导航2手机

	//热门商品按钮
	$('.pan-hot-body .row div').hover(function(){
		$(this).find('.hot-p3').hide()
		$(this).find('.hot-btn').show()
	},function(){
		$(this).find('.hot-btn').hide()
		$(this).find('.hot-p3').show()
	}); 
	//end 热门商品按钮

	//客服图标
	$('.pan-kefu-body a').hover(function(){
		$('.pan-kefu-img').attr('src','./public/imgs/kefu-active.png')
	},function(){
		$('.pan-kefu-img').attr('src','./public/imgs/kefu.png')
	});
	// end客服图标

	//back-top
	$(window).scroll(function(){
		var scroTop = $(document).scrollTop();
		if(scroTop>=600){
			$('.back-top').css({
				bottom:'30px'
			})
		}
		else{
			$('.back-top').css({
				bottom:'-30px'
			})
		}
	});
	$('.back-top').click(function(){
		$('body').animate({
			scrollTop:'0px'
		});
	});
	//end back-top
})