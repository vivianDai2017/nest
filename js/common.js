$(document).ready(function(){
    //自动获取屏幕高度
    function autoHeight(){
        var total = document.documentElement.clientHeight;
        // console.log(total);
        // document.getElementsByTagName('div')[0].style.height = total + 'px';
        document.body.style.height = total + 'px';
    }
    autoHeight();
    window.onresize = autoHeight;
    //按键退回上一页
    $(document).keydown(function(e){
        window.history.back(-1);
    })
})