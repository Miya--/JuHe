$(function(){
	// 倒计时
    function countTime(secondTime, dayObj, hourObj, minObj, secObj, i){
        var SetRemainTime = 'SetRemainTime'+i;
        var InterValObj = 'InterValObj'+i;
    
        var day = Math.floor(secondTime / 1000 / 60 / 60 / 24);  //计算天
      	var hour = Math.floor((secondTime - day * 24 * 60 * 60 * 1000) / 1000 / 60 / 60);      //计算小时
      	var minite = Math.floor((secondTime - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000 ) / 1000 / 60);      //计算分
        dayObj.html(day);
        hourObj.html(hour);
        minObj.html(minite);

        SetRemainTime = function() {
            if (secondTime > 0) {
               secondTime = secondTime - 60000;

      	       day = Math.floor(secondTime / 1000 / 60 / 60 / 24);  //计算天
      	       hour = Math.floor((secondTime - day * 24 * 60 * 60 * 1000) / 1000 / 60 / 60);      //计算小时
      	       minite = Math.floor((secondTime - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000 ) / 1000 / 60);      //计算分

               dayObj.html(day);
               hourObj.html(hour);
               minObj.html(minite);
              } else {//剩余时间小于或等于0的时候，就停止间隔函数
                window.clearInterval(InterValObj);
              }
        }
        InterValObj = window.setInterval(SetRemainTime, 60000);
    }

    var timeLast = $('.time-count-off'), curObj;
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

    // 下拉框初始化
    $('#selectPro').select();
    $('#selectCity').select();
    $('#selectQu').select();
});