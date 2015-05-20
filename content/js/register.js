// 用户注册页面
$(function(){
    $('#getCode').click(function(){
        var state = $(this).attr('state'), self = $(this);
        if(state == '1'){
            $(this).html('<span id="sec">120</span>秒后重新获取');
            $(this).css('background', '#a4a4a4');
        }
        countTime(119, $('#sec'), function(){
            self.html('获取验证码');
            self.css('background', '#f2cd80');
        });
        return false;
    });

    function countTime(secondTime, secObj, callback){
        var SetRemainTime, InterValObj;
        SetRemainTime = function() {
            if (secondTime > 0) {
               secObj.html(secondTime--);
              } else {//剩余时间小于或等于0的时候，就停止间隔函数
                window.clearInterval(InterValObj);
                callback();
              }
        }
        InterValObj = window.setInterval(SetRemainTime, 1000);
    }
});
