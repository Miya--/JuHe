$(function(){
    // 下拉框初始化
	$('#searchType').select();

    // 首页幻灯片
    index.initSlider(); 

    // 幻灯片右边tab
    var tabHeadList = $('#contditionTab ul li');
    tabHeadList.each(function(i){
       $(this).find('a').hover(function(){
            $(this).parent('li').attr('class', 'active').siblings('li').attr('class', 'default');
            $('#contditionTab' + (i + 1)).css('display', 'block').siblings('div').css('display', 'none');
       },function(){});
    });

    var newsList = $('#newsTab ul li');
    newsList.each(function(i){
      $(this).find('a').hover(function(){
        $(this).parent('li').attr('class', 'active').siblings('li').attr('class', 'default');
        $('#newsTab' + (i + 1)).css('display', 'block').siblings('div').css('display', 'none');
      },function(){});
    });

    floorToggle('1');
    floorToggle('2');
    floorToggle('3');
    floorToggle('4');
    floorToggle('5');

    // 倒计时
    function countTime(secondTime, dayObj, hourObj, minObj, secObj, i){
        var SetRemainTime = 'SetRemainTime'+i;
        var InterValObj = 'InterValObj'+i;
        SetRemainTime = function() {
            if (secondTime > 0) {
               secondTime = secondTime - 1;
               var second = Math.floor(secondTime % 60);             // 计算秒     
               var minite = Math.floor((secondTime / 60) % 60);      //计算分
               var hour = Math.floor((secondTime / 3600) % 24);      //计算小时
               var day = Math.floor((secondTime / 3600) / 24);        //计算天
               dayObj.html(day);
               hourObj.html(hour);
               minObj.html(minite);
               secObj.html(second);
              } else {//剩余时间小于或等于0的时候，就停止间隔函数
                window.clearInterval(InterValObj);
              }
        }
        InterValObj = window.setInterval(SetRemainTime, 1000);
    }

    var timeLast = $('.floor2').find('.time-last'), curObj;
    for(var i = 0; i < timeLast.length; i++){
        curObj = $(timeLast[i]);
        countTime(
            curObj.attr('lostTime'), 
            curObj.find('.day'), 
            curObj.find('.hour'), 
            curObj.find('.min'), 
            curObj.find('.sec'),
            i
            );
    }

    // 案例展示部分 鼠标移上透明遮罩层显示效果
    $('.imgbox').hover(function(){
        $(this).find('.cover').css('display','block');
    },function(){
        $(this).find('.cover').css('display','none');
    });

    // 首页固定导航
    $('#lift').css({'top' : $(window).height()/2 - $('#lift').height()/4});

    // 楼层鼠标移上效果
    hoverStepFloor(1, 105, '1F新品热卖');
    hoverStepFloor(2, 65, '2F团购');
    hoverStepFloor(3, 105, '3F案例展示');
    hoverStepFloor(4, 135, '4F办公家具厂家');
    hoverStepFloor(5, 135, '5F办公配套厂家');


    $('#toTop').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });

});

function hoverStepFloor(index, width, html){
    var tmpTime;
    $('#floorStep'+index).hover(function(){
        tmpTime = setTimeout(function(){
            $('#floorStep'+index).css('border-color', '#123457');
            $('#floorStep'+index).animate({width:width},300,function(){}).html(html);
        },200);
    },function(){
        clearTimeout(tmpTime);
        $('#floorStep'+index).css('border-color', '#dfdfdf');
        $(this).animate({width:38},0.1,function(){}).html(index+'F');
    });
}

function floorToggle(floorNum){
    var i=-1; //第i+1个tab开始
    var offset = 3000; //轮换时间
    var timer = 'timer'+floorNum;
    autoroll();
    hookThumb();

    function autoroll(){
        n = $('#floor'+floorNum+'Tab ul li').length-1;
        i++;
        if(i > n){
        i = 0;
        }
        slide(i);
        timer = window.setTimeout(autoroll, offset);
    }

    function slide(i){
        $('#floor'+floorNum+'Tab ul li').eq(i).attr('class','active').siblings().attr('class','default');
        $('.floor'+floorNum+'TabList').eq(i).css('display','block').siblings('.floor'+floorNum+'TabList').css('display','none');
    }

    function hookThumb(){    
        $('#floor'+floorNum+'Tab ul li').hover(
        function(){
            if(timer){
                clearTimeout(timer);
                i = $(this).prevAll().length;
                slide(i); 
            }
        },function(){
            timer = window.setTimeout(autoroll, offset);  
            this.blur();            
            return false;
        }); 
        $('#floor'+floorNum).find('.floor-tab-cont').hover(
            function(){
                if(timer){
                    clearTimeout(timer);
                    i = $(this).prevAll().length;
                    slide(i); 
                }
            },function(){
                timer = window.setTimeout(autoroll, offset);  
                this.blur();            
                return false;
        }); 
    }
}

(function ($){
    var index = function(){
        var slider ={
            initSlider : function(){
                var currentSlide = 0;
                var oldSlide = 0;
                var slideCount = $('#slideList li').length;
                var slideWidth = $('#slideList li').innerWidth();
                $('#slideList').css('width', slideWidth * slideCount);
                $('#slideControl a.slide-num').eq(0).addClass('contr-active');
                var slideTimeout;
                if(slideCount > 1){
                    $('#slideControl').css('display','block');
                    var slideRotation = function() {
                        oldSlide = currentSlide;
                        currentSlide = (currentSlide + 1) % slideCount;
                        $('#slideControl a.slide-num').eq(oldSlide).removeClass('contr-active');
                        $('#slideControl a.slide-num').eq(currentSlide).addClass('contr-active');
                        $('#slideList').fadeOut('6000', function() {
                            $(this).css('left', -slideWidth * currentSlide);
                            $(this).fadeIn();
                        });
                        slideTimeout = setTimeout(slideRotation, 6000);
                    };
                    slideTimeout = setTimeout(slideRotation, 1000);//启动轮转程序
                }else{
                    $('#slideControl').css('display','none');
                }
                
                //鼠标悬停
                $('#slideControl').hover(function() {
                    clearTimeout(slideTimeout);
                },//鼠标悬停时停止轮转
                function() {
                    slideTimeout = setTimeout(slideRotation, 2500);
                }//鼠标移开后重新开始轮转程序        
                );//hover function end
                $('#slideControl .slide-num').click(function() {
                    clearTimeout(slideTimeout);
                    $('#slideControl a.slide-num').removeClass('contr-active');//取消所有标有当前标记的控制数
                    $(this).addClass('contr-active');//添加当前标记给控制数
        
                    var c_num = $(this).attr("name");
                    currentSlide = parseInt(c_num) - 1;
                    oldSlide = currentSlide - 1;
                    $('#slideList').fadeOut('6000', function() {
                            $(this).css('left', -slideWidth * currentSlide);
                            $(this).fadeIn();
                        });
                });
            }
        }
        return slider;
    }();window.index = index;
}(jQuery)); 