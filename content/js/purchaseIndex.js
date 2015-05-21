$(function(){
    $('#btnAllTypePro').hover(function(){
        $('#allTypeProCont').css('display', 'block');
    },function(){
        $('#allTypeProCont').css('display', 'none');
    });

    $('#allTypeProCont').hover(function(){
        $(this).css('display', 'block');
    },function(){
        $(this).css('display', 'none');
    });

    // 导航
    $('.menu-item').hover(function(){
        var self = $(this);
        if(self.find('.inner-wrap').length > 0){
            self.find('.inner-wrap').css('display', 'block');
            self.find('.mask').css('display', 'block');
            self.find('.right-mark').css('display', 'none');
        }else{
            self.css('border-right','1px solid #f6f6f6');
        }
    }, function(){
        var self = $(this);
        if(self.find('.inner-wrap').length > 0){
            self.find('.inner-wrap').css('display', 'none');
            self.find('.mask').css('display', 'none');
            self.find('.right-mark').css('display', 'block');
        }else{
            self.css('border-right','1px solid #184c81');
        }
    });
    // 更多 hover显示右边展开内容
    $('#moreType').hover(function(){
        var self = $(this);
        if(self.find('.inner-wrap').length > 0){
            self.find('.inner-wrap').css('display', 'block');
            self.find('.mask').css('display', 'block');
            //self.find('.right-mark').css('display', 'none');
        }else{
            self.css('border-right','1px solid #f6f6f6');
        }
    }, function(){
        var self = $(this);
        if(self.find('.inner-wrap').length > 0){
            self.find('.inner-wrap').css('display', 'none');
            self.find('.mask').css('display', 'none');
            //self.find('.right-mark').css('display', 'block');
        }else{
            self.css('border-right','1px solid #184c81');
        }
    });

    // menu hover显示下拉
    $('#indexMenu li').hover(function(){
        var self = $(this);
        if(self.find('ul').length > 0){
            self.addClass('active');
            self.find('ul').css('display', 'block');
        }
    },function(){
        var self = $(this);
        if(self.find('ul').length > 0){
            self.removeClass('active');
            self.find('ul').css('display', 'none');
        }
    });

    // 查询条件中的“更多”按钮
    $('#getTypeMore').click(function(){
        var selObj = $(this);
        if(selObj.attr('status') == 'down'){
            $('#typeList').find('li[isover="1"]').css('display', 'block');
            selObj.attr('status', 'up').html('收起 <img src="content/images/arrow-up1.png" />');
        }else{
            $('#typeList').find('li[isover="1"]').css('display', 'none');
            selObj.attr('status', 'down').html('更多 <img src="content/images/arrow-down1.png" />');
        }
        
    });

    
});