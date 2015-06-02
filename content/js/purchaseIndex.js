$(function(){
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

    // 下拉框初始化
    $('#selectPro').select();
    $('#selectCity').select();
    $('#selectQu').select();
});