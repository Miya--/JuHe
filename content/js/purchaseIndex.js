$(function(){
    // 下拉框初始化
    $('#selectPro').select();
    $('#selectCity').select();
    $('#selectQu').select();

    var isShowBtnOption = false;
    $('.label_check').click(function(){
        if(!isShowBtnOption){
            if($('.sear-condit').find('.c_on').length > 0){
                $('#btnOption').css('display', 'block');
            }else{
                $('#btnOption').css('display', 'none');
            }
        }
    });

    $('.combo-box').click(function(){
        isShowBtnOption = false;
        $('select').each(function(i){
            var obj = $('select').eq(i);
            if(obj.val() != ''){
                isShowBtnOption = true;
            }
        });
        if(isShowBtnOption || $('.sear-condit').find('.c_on').length > 0){
            $('#btnOption').css('display', 'block');
        }else{
            $('#btnOption').css('display', 'none'); 
        }
    });
});