$(function(){
    // 下拉框初始化
	$('#searchType').select();

    // 主色调配置
    var colorData = {
        'normal' : '#123457',
        'hover' : '#e69b02',
        'active' : '#e69b02'
    };
    $('.nav, .shop-go, .btn-search').css('background', colorData.normal);
    $('.shop-go').css('border-color', colorData.normal);
    $('.contact-online').css('background', colorData.active);
    $('.nav').find('li a').hover(function(){
        $(this).css('background', colorData.hover);
    },function(){
        $(this).css('background', colorData.normal);
    });
    $('.nav').find('.active a').hover(function(){
        $(this).css('background', colorData.hover);
    },function(){
        $(this).css('background', colorData.hover);
    });
    // 在线联系
    $('.contact-online').hover(function(){
        $(this).css({'color' : '#fff', 'background' : colorData.normal});
    },function(){
        $(this).css({'color' : '#fff', 'background' : colorData.hover});
    });

    $('.nav').find('.active a').css('background', colorData.active);
    // 关注店铺
    $('.shop-follow').css({'color' : colorData.normal, 'border-color' : colorData.normal});
    $('.shop-follow').hover(function(){
        $(this).css({'color' : '#fff', 'border-color' : colorData.normal, 'background-color' : colorData.normal});
    },function(){
        $(this).css({'color' : colorData.normal, 'border-color' : colorData.normal, 'background-color' : '#fff'});
    });

    $('#proTabHead').find('.active a').css({'color' : '#fff', 'background' : colorData.normal});
    $('#proTabHead').find('.default a').hover(function(){
        $(this).css({'color' : '#fff', 'background' : colorData.normal});
    },function(){
        $(this).css({'color' : '#000', 'background' : 'none'});
    });
    
    // 图片放大镜
    $(".jqzoom1").jqzoom({
        zoomType: 'standard',
        imageOpacity: 0.5,
        xOffset:10,
        lens:true,
        preloadImages: false,
        alwaysOn:false,
        title:false,
        zoomWidth:500,
        zoomHeight:500
    }); 

    // 返利比例
    var perVal = $('#returnPer').attr('returnper');
    /*switch(perVal){
        case 1 : 
            
    }*/

    // 产品详情tab页切换 start
    var tabHeadList = $('#proTabHead ul li');
    tabHeadList.each(function(i){
      $(this).find('a').off('click').on({'click' : function(){
        $(this).css({'color' : '#fff', 'background' : colorData.normal});
        $(this).parent('li').attr('class', 'active').siblings('li').attr('class', 'default');
        $(this).parent('li').siblings('li').find('a').css({'color' : '#000', 'background' : 'none'});
        $('#proTabCont' + (i + 1)).css('display', 'block').siblings('div').css('display', 'none');

        $('#proTabHead').find('.default a').hover(function(){
            $(this).css({'color' : '#fff', 'background' : colorData.normal});
        },function(){
            $(this).css({'color' : '#000', 'background' : 'none'});
        });
        $('#proTabHead').find('.active a').hover(function(){
            $(this).css({'color' : '#fff', 'background' : colorData.normal});
        },function(){
            $(this).css({'color' : '#fff', 'background' : colorData.normal});
        });
      }});
    });
    // tab切换 end

    // 产品排名tab页切换 start
    var tabHeadList = $('#proRankTab ul li');
    tabHeadList.each(function(i){
      $(this).find('a').off('click').on({'click' : function(){
        $(this).parent('li').attr('class', 'active').siblings('li').attr('class', 'default');
        $('#proRankTab' + (i + 1)).css('display', 'block').siblings('div').css('display', 'none');
      }});
    });
    // tab切换 end

    // 产品分类二级树
    $('.parent-cont').click(function(){
      var tmp = $(this);
      if(tmp.next('.child-wrap').is(':visible')){
        tmp.next('.child-wrap').hide();
        tmp.find('.child-mark').attr('class', 'parent-mark');
      }else{
        tmp.next('.child-wrap').css('display', 'block');
        tmp.find('.parent-mark').attr('class', 'child-mark');
      }
    });

    // 商品数量加减
    $('#minusNum').off('click').on({'click' : function(){
        var numVal = $('#numVal').html();
        if(numVal != '1'){
            numVal --;
            $('#numVal').html(numVal);
        }else{
             return false;
        }
    }});
    $('#addNum').off('click').on({'click' : function(){
        var numVal = $('#numVal').html();
        numVal ++;
        $('#numVal').html(numVal);
    }});
});