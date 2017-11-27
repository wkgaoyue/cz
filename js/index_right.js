/**
 * Created by Administrator on 2014/12/13.
 */
$(function(){
    setInterval(donghua,2000);

    $(".main_div").delay(500).animate({marginLeft:"100px",width:"250px"},1000)

    $(".top_nav ul li").click(function(){
        var v=$(this).index();
        var v1=v+1;
        var v2=$(".content_"+v1).offset().top;
        var v3=120;
        $("body").animate({scrollTop:v2-v3},1000);
    }).hover(function(){
        var v1=$(this).index();
        $(".nav_bg div").eq(v1).animate({height:"116px"},1000)
    },function(){
        var v1=$(this).index();
        $(".nav_bg div").eq(v1).animate({height:"0"},1000)
    });
    $(".go_top").click(function(){
        $("body").animate({scrollTop:0},500);
    });

    $(".c3_i1,.c3_i2,.c3_i3").hover(function(){
        $(this).animate({height:"430px"},500);
        $(this).children().eq(0).animate({width:"220px"})
        $(this).children().eq(1).animate({height:"70px"})
    },function(){
        $(this).animate({height:"400px"},500);
        $(this).children().eq(0).animate({width:"0"})
        $(this).children().eq(1).animate({height:"0"})
    });

    $(".bl_1").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg1.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg1.gif')"});
    });
    $(".bl_2").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg2.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg2.jpg')"});
    });
    $(".bl_3").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg3.png')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg3.gif')"});
    });
    $(".bl_4").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg4.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg4.png')"});
    });

    $(".change").toggle(function(){
        $(".change_color").animate({height:"105px"},500);
    },function(){
        $(".change_color").animate({height:"0"},500);
    });
    $(".color_1").click(function(){
       $("body").css({ backgroundImage:"url('images/big_bg1.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg1.gif')"});
    });
    $(".color_2").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg2.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg2.jpg')"});
    });
    $(".color_3").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg3.png')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg3.gif')"});
    });
    $(".color_4").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg4.gif')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg4.png')"});
    });
    $(".color_5").click(function(){
        $("body").css({ backgroundImage:"url('images/big_bg6.jpg')"}) ;
        $(".top_nav").css({backgroundImage:"url('images/nav_bg6.jpg')"});
    });

    $(".ac_r").click(function(){
       $(".con3_right_active").animate({left:"-600px"},500);
    }).hover(function(){
        if($(".con3_right_active").css("left")=="0px"){
            $(".ac_r").css({backgroundColor:"#BFBFBF"});
        }
        else{}
    },function(){
        $(".ac_r").css({backgroundColor:"#d7d7d7"});
    });
    $(".ac_l").click(function(){
        $(".con3_right_active").animate({left:"0"},500);
    }).hover(function(){
        if($(".con3_right_active").css("left")=="-600px"){
            $(".ac_l").css({backgroundColor:"#BFBFBF"});
        }
        else{}
    },function(){
        $(".ac_l").css({backgroundColor:"#d7d7d7"});
    });

    $(".crm_i").hover(function(){
        $(this).children().eq(0).animate({left:"0"},500)
        $(this).children().eq(1).animate({opacity:"0.5"},500)
    },function(){
        $(this).children().eq(0).animate({left:"-150px"},500)
        $(this).children().eq(1).animate({opacity:"0"},500)
    });

    $(".con4_top").hover(function(){
        $(".con4_top div").animate({width:"60px"},500)
    },function(){
        $(".con4_top div").animate({width:"0"},500)
    });

    $(".con4_main_i>div").hover(function(){
        var v1=$(this).index();
       $(this).children("div").animate({bottom:"0"},500)
    },function(){
        var v1=$(this).index();
        $(this).children("div").animate({bottom:"-240px"},500)
    });
    $(".con4_right_btn").hover(function(){
       $(this).animate({opacity:"0.8"},500)
    },function(){
        $(this).animate({opacity:"0.3"},500)
    });
    $(".con4_left_btn").hover(function(){
        $(this).animate({opacity:"0.8"},500)
    },function(){
        $(this).animate({opacity:"0.3"},500)
    });

    var page=1;
    $(".con4_right_btn").click(function(){
        if(page==4){
            $(".con4_main_i").animate({left:0},2000);
            page=1;
        }else{
            $(".con4_main_i").animate({left:'-='+320},2000);
            page++;
        }
    });
    $(".con4_left_btn").click(function(){
        if(page!=4){
            $(".con4_main_i").animate({left:'-='+320},2000);
            page++;
        }else{
            $(".con4_main_i").animate({left:'+='+960},2000);
            page=1;
        }
    });

    $(".message").toggle(function(){
        $(".gray_bg").fadeIn(700);
        $(".zc").animate({left:"420px"},500).animate({left:"380px"},200);
    },function(){
        $(".zc").animate({left:"420px"},200).animate({left:"-600px"},500);
        $(".gray_bg").fadeOut(700);
    });
});


function donghua(){
    var img_active=$(".img_lb img.active");
    var v2;
    if(img_active.next().length==0){
        v2=$(".img_lb img:first");
    }else{
        v2=img_active.next();
    }
    var num_i=v2.index();
    v2.animate({opacity:1},500,function(){
        $(this).addClass("active");
        img_active.animate({opacity:0},1000,function(){
            $(this).removeClass("active")
        });
        $(".img_num li").eq(num_i).addClass("active_num")
            .siblings().removeClass("active_num");
        $(".i_ce span").eq(num_i).addClass("active_sp")
            .siblings().removeClass("active_sp");
    });
}
